import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import User from '../models/user';
import { HttpError } from '../lib/errors';

export default {
  signup: async function (email: string, password: string, name: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email: email,
      name: name,
      password: hashedPassword
    });
    return await user.save();
  },

  login: async function (email: string, password: string) {
    const user = await User.findOne({ email: email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const userId = user._id.toString();
        const token = jwt.sign(
          { email: user.email, userId: userId },
          process.env['JWT_SECRET'] as Secret,
          {
            expiresIn: '1h'
          }
        );
        return {
          token: token,
          userId: userId
        };
      } else {
        throw new HttpError(401, 'Password is incorrect!');
      }
    } else {
      throw new HttpError(401, `We could not find ${email} user`);
    }
  }
};
