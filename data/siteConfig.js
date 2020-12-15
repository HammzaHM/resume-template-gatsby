module.exports = {
  siteTitle: 'Hi! I\'m Hamza Hmem!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Hamza Hmem',
  twitterUsername: '@hamza_hmem',
  githubUsername: 'HammzaHM',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2018 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS and React Native.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 60
    },
    {
      name: 'React',
      level: 80
    },
    {
      name: 'React Native',
      level: 50
    },
    {
      name: 'Git',
      level: 50
    },
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Best Web mobile",
      begin: {
        month: 'april',
        year: '2019'
      },
      duration: '6 months',
      occupation: "React JS developer",
      description: "Create a ReactJS application that responses to all customers needs in order to memic the food delivery mobile application."
  
    },  {
      company: "Wssel For Food Delivery",
      begin: {
        month: 'apr',
        year: '2020'
      },
      duration: 'until now',
      occupation: "Full stack developer",
      description: "I am part of the Corporate team, responsible for the development and maintenance of a delivery food mobile application created with Node js and React Native."
  
    }, {
      company: "Achgaal Technology",
      begin: {
        month: 'November',
        year: '2020'
      },
      duration: null,
      occupation: "React Native developer",
      description: "Build a React Native Application"
    }
  ],
  portifolio: [
    {
      image: "/images/i7san.png",
      description: "volunteering website for managing peoples donates",
      url: "https://github.com/HammzaHM/i7sen.tn"
    },
    {
      image: "/images/merng-stack.png",
      description: "Merng Stack Application",
      url: "https://github.com/HammzaHM/merng-stack-blog-post"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/hmem_hamza",
    linkedin: "https://www.linkedin.com/in/hamza-hmem-5018b2153",
    github: "https://github.com/HammzaHM",
    email: "hmem.hamza@yahoo.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}