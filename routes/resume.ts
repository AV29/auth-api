import express from 'express';
import checkAuth from '../middlewares/auth';
import * as controller from '../controllers/resume';

const router = express.Router();

router.get('/resume', controller.getResume);

router.put('/resume', checkAuth, controller.updateResume);

export = router;
