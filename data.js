export const projectsData = [
  {
    id: 1,
    name: "Covid-19 Tracker",
    description: "A simple web app to track the progress of COVID-19",
    image: "project1.jpg",
    url: "https://github.com/HoruScodes/covid-19-tracker",
    live: "https://covid-19-tracker-7d459ftmv-horuscodes.vercel.app/",
    stack: {
      frontend: "React , Styled-Components , ChartJs , Material-UI",
      backend: "NodeJS, Axios",
    },
    details: [
      "when the pandemic started and my classes were online, and I was not doing any part-time job so I had extra time on my hand and I took this opportunity to learn React.",

      "one day I saw the post about react project ideas on Instagram and I was comfortable enough to apply my knowledge and develop my first react web application(considering building a to-do application does not count 😛).",

      "developing this project alongside learning new concepts as react lifecycles, hooks, ES6 was challenging in the starting phase, but I'm glad that i stuck with it and built the application.",

      "I started this project with class-based components, later switched to functional components as realized that a functional component is written shorter and simpler, which makes it easier to develop, understand, and test. Class components can also be confusing with so many uses of this. Using functional components can easily avoid this kind of a mess and keep everything clean.",

      "selecting the perfect API for different data was a bit challenging task for me as I had to change API endpoints time by time when one does not work.",

      "I had selected ChartJs npm library to show charts and inject data into it from public APIs, for design I had used Material Ui from google and a few Styled-Components.",

      "This project helped to solidify a lot of my React knowledge, such as using hooks or updating the states. I also got a lot of great practice using ES6+ syntax across the entirety of the project.",
    ],
    projectImages: ["proj11.png", "proj12.png", "proj13.png", "proj14.png"],
  },
  {
    id: 2,
    name: "Chef Help",
    description:
      "aimed to break the barrier restaurant workers are facing by prioritizing menu items by their cook time.",
    image: "project2.jpg",
    url: "https://github.com/HoruScodes/chef-helper",
    stack: {
      frontend: "React , SCSS, Formik",
      backend: "NodeJS, ExpressJs",
      database: "MongoDB",
    },
    details: [
      'This "Restaurant Management System" is aimed to break the barrier restaurant workers are facing.',
      "imagine One Customer comes to the store and orders Some Items from the menu and sometimes its huge orders, so it is hard to keep track of all the items and because of this customer may get some items missing in the order, leaving them unsatisfied. this may hurt restaurants' image if this anomaly continues, it's small but it can lead to very serious issues. And What if there are Many Customers instead of one customer? and also with huge orders!",
      ` This Product will try to solve this problem by doing
      - Take Customers Orders
      - Analyze Order and extract the ingredients from the items
      - sort the ingredients by preparation time
      - show preparation instruction to the kitchen crew`,
    ],
    projectImages: [
      "proj21.png",
      "proj22.png",
      "proj23.png",
      "proj24.png",
      "proj25.png",
    ],
  },
  {
    id: 3,
    name: "Make My Cuisine",
    description:
      "Make My Cuisine Is Unique Application That finds matching recipes by addding your available ingredients and a practical way to save money. Take full advantage of ingredients you already have, and naturally buy less groceries.",
    image: "project3.jpg",
    url: "https://github.com/HoruScodes/covid-19-tracker",
    stack: {
      frontend: "React , Bootstrap",
      backend: "Axios, Spoonacular API",
      database: "Firebase",
    },
    details: [
      "the app would allow users to search for recipes based on ingredients they already have at home.",
      "Users can also save recipes for future use.",
      "‘Search Engine’ will take all the ingredients and that would allow users to enter their current items at homes and suggest recipes based on it.",
    ],
    projectImages: ["proj31.png", "proj32.png", "proj33.png"],
  },
  {
    id: 4,
    name: "BooksMTL",
    description:
      "Built an E-commerce web-app for Users in Montreal to buy and sell old books, later added support to add other items.",
    // image: "project3.jpg",
    url: "https://github.com/HoruScodes/covid-19-tracker",
    stack: {
      frontend: "HTML, CSS",
      backend: "PHP, JQuery, AJAX",
      database: "SQL",
    },
    details: [
      "Developed and Designed an E-commerce web-app for Users in Montreal Region to buy and sell old books, later added support to add other items.",
      "Implemented multiple and custom Validation using jQuery",
      "Created Search Functionality using AJAX",
      "Built Stored Procedures for CRUD operations into SQL Database.",
    ],
  },
];

export const eventsData = [
  {
    title: "Bachelor's In Information Technology",
    range: "May 2014 - May 2018",
    place: "Birla Vishwakaram Mahavidhyalaya , India",
  },
  {
    title: "Associate Software Developer",
    place: "Srkay Consulting Group",
    range: "Sept 2018 - Nov 2019",
  },
  {
    title: "PG Diploma",
    range: "Jan 2020 - July 2021",
    place: "College Lasalle , Montreal , QC",
  },
  {
    title: "Web Developer",
    range: "Nov 2021 - Present",
    place: "Amilia , Montreal , QC",
  },
];
