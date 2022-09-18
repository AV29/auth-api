import uuid from 'node-uuid';

export default {
  content: {
    achievements: [
      { id: uuid.v4(), icon: '🤝️', description: 'Team / Tech lead' },
      { id: uuid.v4(), icon: '️🐣', description: 'Started projects from scratch' },
      { id: uuid.v4(), icon: '💼️', description: 'Took part in pre-sale estimations' },
      { id: uuid.v4(), icon: '️👥', description: 'Group Manager leading a group of 12 people' },
      {
        id: uuid.v4(),
        icon: '🗣️️',
        description: 'Spoke at several conferences and meetups in Belarus'
      },
      {
        id: uuid.v4(),
        icon: '️🚀',
        description: "Helped projects' teams to gain speed at the starting stages"
      },
      {
        id: uuid.v4(),
        icon: '️📈',
        description: 'Developed technical assessment mind maps and matrices with colleagues'
      },
      {
        id: uuid.v4(),
        icon: '🎓️',
        description:
          'Within the existing training center at ISsoft, developed and conducted React training for Junior developers'
      },
      {
        id: uuid.v4(),
        icon: '🧠️',
        description:
          'Organized everyday meetups for web developers, where colleagues could discuss articles and solve problems'
      },
      {
        id: uuid.v4(),
        icon: '🧑‍💻',
        description:
          'Technical assessment interviewer / interviewer for external candidates. Conducting in both Russian and English'
      },
      {
        id: uuid.v4(),
        icon: '🤓️',
        description:
          'On all projects organized short meetings to share knowledge with teammates adapting presentation for target audience'
      }
    ],
    technologies: [
      {
        title: 'Languages',
        skills: [
          { title: 'JavaScript', description: '7+ years of everyday usage', level: 5 },
          {
            title: 'TypeScript',
            description: 'Worked on 3 different projects. 2 years total',
            level: 4
          },
          {
            title: 'C#',
            description:
              'School, college, university. Took trainings at work to refresh my knowledge',
            level: 2
          },
          {
            title: 'C++',
            description: 'Studied since was a kid, in college and university',
            level: 1
          }
        ]
      },
      {
        title: 'Frameworks & Libs',
        skills: [
          { title: 'React', description: 'Everyday usage during the last 5 years', level: 5 },
          { title: 'Redux', description: 'Everyday usage during the last 5 years', level: 5 },
          {
            title: 'Angular > 1.5',
            description: 'Worked on a project ~6 years ago',
            level: 4
          },
          { title: 'jQuery', description: 'Worked all along the carrier', level: 4 },
          { title: 'Angular < 1.5', description: 'Worked on a project ~6.5 years ago', level: 3 }
        ]
      },
      {
        title: 'Visuals',
        skills: [
          { title: 'HTML', description: '7+ years of everyday usage', level: 5 },
          { title: 'CSS', description: '7+ years of everyday usage', level: 5 },
          { title: 'Sass', description: '6+ years of everyday usage', level: 5 },
          { title: 'Less', description: '6+ years of everyday usage', level: 5 }
        ]
      },
      {
        title: 'Tools',
        skills: [
          {
            title: 'npm',
            description: 'Everyday work for 6+ years. Scripts, semantic versioning, node_modules',
            level: 5
          },
          {
            title: 'webpack',
            description: 'Everyday work for 5+ years. Creating and managing custom configurations',
            level: 5
          },
          { title: 'Git', description: 'Everyday work during the whole carrier', level: 5 },
          {
            title: 'JSDoc',
            description:
              'Created full spec for functions, classes, and methods on one of the projects',
            level: 4
          },
          {
            title: 'Jenkins',
            description:
              '4 years. Logs, run and edit jobs. Creating pipelines of moderate complexity',
            level: 4
          },
          {
            title: 'Docker',
            description: 'Work with test containers. Embedded into QA environment deploy pipeline',
            level: 4
          }
        ]
      },
      {
        title: 'BE & Databases',
        skills: [
          {
            title: 'NodeJS',
            description: '6+ years. API servers, static servers, proxy servers, rendering UI',
            level: 5
          },
          {
            title: 'MongoDB',
            description: 'Worked on different side projects. Use on pet projects',
            level: 4
          },
          {
            title: 'MySQL',
            description: 'Studied in college and university. Did not work on real projects',
            level: 1
          }
        ]
      }
    ],
    experience: [
      {
        title: 'Software developer / Team Lead / Tech Lead',
        companyInfo: 'Coherent Solutions, Poland, Wrocław, (July 2021 - now)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Supply chain design and planning',
        responsibilities: [
          'Developing UI for supply chain soft platform SPA using primarily React and Redux from scratch',
          'Working on scalable and adaptive solution for platform. Gone through 3 brand book changes. Few projects have grown up to 100 views',
          "Working in isolated SDLC team as well as deep integration with customer's team abroad",
          'Managing up to 7 projects of the whole platform at the same time',
          'Helping customer to make product better every day by suggesting more optimal and performant alternatives',
          'Leading the team of 6 people',
          'Making technical decisions everyday',
          'Conducting weekly meetups with teammates to share useful insights from tech world related to our stack',
          'Conducting code reviews',
          'Estimating MVPs',
          'Accessibility improvements',
          'Good browser support. Up (or down) to IE10',
          'Integration with back-end',
          'Managing API and proxy-servers on NodeJS',
          'Integrating Google Analytics and later Pendo.io',
          'Converting non-React project to React project',
          'Converting JavaScript based projects to use TypeScript',
          'Managing build pipeline with webpack, npm, Jenkins and Docker',
          'Writing documentations with JSDoc',
          'Creating, managing, versioning and documenting library of reusable components with help of lerna and JFrog',
          'Covering 98% of Redux infrastructure and React views with Jest'
        ],
        stack: [
          'JavaScript',
          'React',
          'Redux',
          'TypeScript',
          'ImmutableJS',
          'React-virtualized',
          'Mapbox',
          'jQuery',
          'NodeJS',
          'HTML',
          'CSS',
          'styled-components',
          'Sass',
          'Less',
          'Jest',
          'webpack',
          'npm'
        ],
        tools: ['Webstorm', 'Jira', 'Bitbucket', 'Git', 'JFrog', 'Docker', 'Jenkins', 'Nginx'],
        methodologies: ['Scrum', 'Kanban']
      },
      {
        title: 'Software developer / Team Lead / Tech Lead',
        companyInfo: 'ISsoft, Belarus, Minsk, (April 2017 - July 2021)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Supply chain design and planning',
        responsibilities: [
          'Developing UI for supply chain soft platform SPA using primarily React and Redux from scratch',
          'Working on scalable and adaptive solution for platform. Gone through 3 brand book changes. Few projects have grown up to 100 views',
          "Working in isolated SDLC team as well as deep integration with customer's team abroad",
          'Managing up to 7 projects of the whole platform at the same time',
          'Helping customer to make product better every day by suggesting more optimal and performant alternatives',
          'Leading the team of 6 people',
          'Making technical decisions everyday',
          'Conducting weekly meetups with teammates to share useful insights from tech world related to our stack',
          'Conducting code reviews',
          'Estimating MVPs',
          'Accessibility improvements',
          'Good browser support. Up (or down) to IE10',
          'Integration with back-end',
          'Managing API and proxy-servers on NodeJS',
          'Integrating Google Analytics and later Pendo.io',
          'Converting non-React project to React project',
          'Converting JavaScript based projects to use TypeScript',
          'Managing build pipeline with webpack, npm, Jenkins and Docker',
          'Writing documentations with JSDoc',
          'Creating, managing, versioning and documenting library of reusable components with help of lerna and JFrog',
          'Covering 98% of Redux infrastructure and React views with Jest'
        ],
        stack: [
          'JavaScript',
          'React',
          'Redux',
          'TypeScript',
          'ImmutableJS',
          'React-virtualized',
          'Mapbox',
          'jQuery',
          'NodeJS',
          'HTML',
          'CSS',
          'styled-components',
          'Sass',
          'Less',
          'Jest',
          'webpack',
          'npm'
        ],
        tools: ['Webstorm', 'Jira', 'Bitbucket', 'Git', 'JFrog', 'Docker', 'Jenkins', 'Nginx'],
        methodologies: ['Scrum', 'Kanban']
      },
      {
        title: 'Software developer',
        companyInfo: 'ISsoft, Belarus, Minsk, (November 2016 – April 2017)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Healthcare',
        responsibilities: [
          'Developing UI for platform SPA using React and Redux',
          'Constant communications with abroad part of the team',
          'Managing build pipeline with webpack, npm and style linting',
          'Covering 87% of Redux infrastructure and React views with Jest',
          'Conducting code reviews',
          'Integration with back-end'
        ],
        stack: [
          'JavaScript',
          'React',
          'Redux',
          'NodeJS',
          'HTML',
          'CSS',
          'Sass',
          'React-Bootstrap',
          'Jest',
          'webpack',
          'npm'
        ],
        tools: ['IntelliJ IDEA', 'Jira', 'Bitbucket', 'Git'],
        methodologies: ['Scrum', 'Kanban']
      },
      {
        title: 'Software developer',
        companyInfo: 'ISsoft, Belarus, Minsk, (August 2016 – November 2016)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Web hosting',
        responsibilities: [
          'Developing UI for web hosting portal SPA with Angular 1.5',
          'Conducting code reviews',
          'Constant communications with abroad part of the team',
          'Work with functional and system requirements',
          'Integration with back-end'
        ],
        stack: [
          'JavaScript',
          'Angular 1.5',
          'NodeJS',
          'CSS',
          'Bootstrap',
          'Stylus',
          'HTML',
          'webpack',
          'gulp',
          'npm'
        ],
        tools: ['IntelliJ IDEA', 'Gitlab', 'Git'],
        methodologies: ['Waterfall']
      },
      {
        title: 'Software developer',
        companyInfo: 'ISsoft, Belarus, Minsk, (June 2016 – August 2016)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Software development',
        responsibilities: [
          'Developing UI for Informational Portal from scratch using Angular 2 and TypeScript',
          'Developing back-end for Informational Portal from scratch using NodeJS and Mongo',
          'Conducting code reviews',
          'Managing build pipeline with linting',
          'Cross browser and cross platform responsive styles and mock-ups',
          'Agile workflow'
        ],
        stack: [
          'TypeScript',
          'Angular2',
          'NodeJS',
          'MongoDB',
          'CSS',
          'HTML',
          'jQuery',
          'Sass',
          'gulp',
          'npm'
        ],
        tools: ['IntelliJ IDEA', 'Jira', 'Git', 'Bitbucket', 'Adobe Photoshop'],
        methodologies: ['Kanban']
      },
      {
        title: 'Front-end developer',
        companyInfo: 'ISsoft, Belarus, Minsk, (April – June 2016)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Auctions and sale of antiques',
        responsibilities: [
          'Developing UI for desktop from scratch, table and mobile versions using Vanilla JS',
          'Cross browser and cross platform styles and mock-ups. Pixel perfect layouts',
          'Daily scrums and permanent communications with the client'
        ],
        stack: [
          'JavaScript',
          'HTML',
          'NodeJS',
          'CSS',
          'Sass',
          'npm',
          'Grunt',
          'Bootstrap',
          'jQuery',
          'jQuery UI'
        ],
        tools: ['IntelliJ IDEA', 'Jira', 'Magento', 'BeansTalk', 'Git', 'Gimp2', 'Adobe Photoshop'],
        methodologies: ['Waterfall']
      },
      {
        title: 'Front-end developer',
        companyInfo: 'ISsoft, Belarus, Minsk, (February – April 2016)',
        customerInfoTitle: "Customer's domain",
        customerInfo: 'Brewing and food',
        responsibilities: [
          'Developing UI for desktop, table and mobile versions using Backbone and Vanilla JS',
          'Cross browser and cross platform styles and mock-ups. Pixel perfect and responsive layouts'
        ],
        stack: [
          'JavaScript',
          'HTML',
          'CSS',
          'Sass',
          'npm',
          'Grunt',
          'Bootstrap',
          'jQuery',
          'jQuery UI',
          'Microsoft SQL Server',
          'Apache'
        ],
        tools: ['IntelliJ IDEA', 'Jira', 'Magento', 'BeansTalk', 'Git', 'Gimp2', 'Adobe Photoshop'],
        methodologies: ['Scrum', 'Kanban']
      },
      {
        title: 'Front-end developer',
        companyInfo: 'Tesidex, Belarus, Minsk, (March – December 2015)',
        customerInfoTitle: "Customers' domains",
        customerInfo: 'Software development; Cosmetics; Instant messaging',
        responsibilities: [
          'Software development; Cosmetics; Instant messaging',
          'Pixel perfect layouts',
          'Cross browser and cross platform styles and mock-ups'
        ],
        stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'jQuery UI'],
        tools: ['Sublime', 'Webstorm', 'Git', 'Adobe Photoshop CS6'],
        methodologies: ['Scrum', 'Kanban', 'Waterfall']
      }
    ],
    languages: [
      { title: 'Russian', flag: '🇷🇺', level: 5, description: 'Native Speaker' },
      { title: 'English', flag: '🇬🇧', level: 5, description: 'Advanced' },
      { title: 'Polish', flag: '🇵🇱', level: 2, description: 'Basic' }
    ],
    education: [
      {
        title: 'Belarusian State University of Informatics and Radio Electronics',
        level: 5,
        years: '2005 - 2010',
        description: "Master's degree. Computers, systems and networks (Assembler, C++, C#)"
      },
      {
        title: 'Lyceum of Belarusian State University',
        level: 5,
        years: '2003 - 2005',
        description: 'Department of Mathematics. Studying Physics and Informatics (C#, Pascal)'
      },
      {
        title: 'Postgraduate education academy',
        level: 5,
        years: '2000 - 2002',
        description: 'Learning Pascal, C and C++'
      }
    ]
  }
};
