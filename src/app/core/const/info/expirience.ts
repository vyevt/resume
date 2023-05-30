import { Experience } from "../interfaces/expirience.interface";

export const candidateExpirience: Experience[] = [
  
   {
    title: "Angular 16",
    desription: "Portfolio project",
    link:"https://vyevt.github.io/portfolio/",
    tasks: [
       "Developed page From free design found on Figma", 
      "Using named Angular router outlet and lazy-loading"
    ]
  
  },
  {
  title: "Angular 15 development",
  desription: "resume project (03.2023)",
  tasks: ["Design and developed my resume website",
    'using Angular 15',
    'Angular Material']

},
{
  title: "Angular 15 development, Figma using and development",
  desription: "my private internet store project (2022 - current time)",
  tasks: ["Creating components designs using Figma",
    'Implementing lazy-load modules, routing / API points, Page Guards, TS interfaces, enums',
    'Creating layouts for different modules / routes',
    'Learning standalone components and directives',
    'Code refactoring',
    'Fixing bugs',
    'improve skills, best practices'
  ]

},
{
  title: "Hands-on Angular 12-15 development, self-taught experience",
  desription: "my sandbox projects (2020 - current time)",
  link: "https://vyevt.github.io/angular-site-gh_pages",
  tasks: ['Design app architecture (independent / loosely coupled feature modules)',
    'Using Angular 12, 13, 14, 15',
    'Migrating from legacy Angular 12 to Angular 13, 14, 15',
    'Refactor code according to new version requirements, bugs fixing',
    'Recreating the UI from Figma',
    'Creating new features: pages, layouts, components, modules, routing / REST API implementation, page guards',
    'Writing TypeScript functions in components and services',
    'Practical Using of Rxjs, Reactive Typed Forms',

  ]

},
{
  title: 'MEAN development',
  desription: 'my private html web scrapper project (12.2020 - 06.2021)',
  tasks: ['Developing Angular Front end',
    'Developing the Front-end and deploy it using ExpressJS',
    'Writing JavaScript logic for ExpressJS API endpoints',
    'Creating Mongoose schemas and manipulating MongoDB data',
    'implementation CRUD functionality with MongoDb and Mongoose',
    'Creating structures of Db and its tables',
    'Using Cheerio library to scrape and manipulate HTML data'
  ],
 
    
}
  ,
{
  title: 'NodeJs development',
  desription: 'my private json parser projects (2019-2020)',
  tasks: ['Develop a Node.js and Express.js backend to retrieve data from a source API',
    'Managing received JSON data, filtering it and show in the console and sending it to Telegram',
    'Writing JavaScript logic',
    'Creating Mongoose schemas and manipulating MongoDB data',

    
  ]

}
]