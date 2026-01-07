// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import njpLogo from './assets/education_logo/navjyoti_logo.png';
import uuLogo from './assets/education_logo/uttaranchal.jpg';
import nldLogo from './assets/education_logo/nalanda_logo.png';
import mduLogo from './assets/education_logo/mdulogo.jpg';

// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import coinImage from './assets/work_logo/coin_app.png';
import loginImage from './assets/work_logo/login.png';
import netflixImage from './assets/work_logo/netflixclone.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      
    ],
  },
];

 
  
  export const education = [
    {
      id: 0,
      img: uuLogo,
      school: "Uttaranchal University, Dehradun",
      date: "july 2025 - may 2027",
      grade: "7.81 CGPA",
      desc: "I am pursuing my Master's degree (MCA) in Computer Applications from Uttaranchal University, Dehradun. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. which enhanced my skills and knowledge.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: mduLogo,
      school: "PT. JLN College, Faridabad",
      date: "Sept 2014 - May 2017",
      grade: "60.2%",
      desc: "I completed my Bachelor's degree in Computer Application (BCA) from Pt. JLN College, Faridabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. ",
      degree: "Bachelor of Computer Application - (BCA)",
    },
    {
      id: 2,
      img: nldLogo,
      school: "Nalanda Bal Sr. Sec Public School Ballabgarh, Faridabad",
      date: "Apr 2012 - March 2014",
      grade: "69%",
      desc: "I completed my class 12 education from Nalanda Bal Sr. Sec Public School, Ballabgarh, under the HBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "HBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: njpLogo,
      school: "Nav Jyoti Public School Ballabgarh, Faridabad",
      date: "Apr 2011 - March 2012",
      grade: "70%",
      desc: "I completed my class 10 education from Nav Jyoti Public School, Ballabgarh, under the HBSE board, where I studied Science with Computer.",
      degree: "HBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Himanshurajput757/MoviesApp",
      webapp: "https://himanshurajput757.github.io/MoviesApp/",
    },
    {
      id: 1,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Himanshurajput757/Image_Search_App",
      webapp: "https://himanshurajput757.github.io/Image_Search_App/",
    },
    {
      id: 2,
      title: "CoinGecko  App",
      description:
        "A React.js-based CoinGecko App fetch data from Coingecko Api it's show real time crypto currency price and search by name and show the full deatils of crypto currency and show Chart of web.",
      image: coinImage,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript","Show Chart"],
      github: "https://github.com/Himanshurajput757/Image_Search_App",
      webapp: "https://himanshurajput757.github.io/Image_Search_App/",
    },
    {
      id: 3,
      title: "E-Commerce  App",
      description:
        "A HTML-CSS-based E-Commerce App web-page it's Show the dummy data in this Page.",
      image: coinImage,
      tags: ["HTML ", "CSS", "Web-Page"],
      github: "https://github.com/Himanshurajput757/E-Commerce",
      webapp: "https://himanshurajput757.github.io/E-Commerce/",
    },
    {
      id: 4,
      title: "Login-SignUp Page",
      description:
        "A HTML-CSS-based Login-SignUp Sliding Page .",
      image: loginImage,
      tags: ["HTML ", "CSS", "Web-Page"],
      github: "https://github.com/Himanshurajput757/LoginPage",
      webapp: "https://himanshurajput757.github.io/LoginPage/",
    },
    {
      id: 5,
      title: "Netflix-Clone Page",
      description:
        "A React.js-based Netflix-Clone Page using Html,Css And React.js i am excited to create this Netflix HomePage.",
      image: netflixImage,
      tags: ["React JS", "Tailwind-Css", "CSS",],
      github: "https://github.com/Himanshurajput757/LoginPage",
      webapp: "https://github.com/Himanshurajput757/NetflixClone",
    }
  ];  