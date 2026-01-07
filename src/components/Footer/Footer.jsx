import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaYoutube }  from 'react-icons/fa';

function Footer() {

  //smooth scroll function
  const handleScroll = (sectionId) =>{
       const section = document.getElementById(sectionId);
       if(section){
        section.scrollIntoView({behavior: 'smooth'});
       }
  }

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] '>
      <div className=' contsiner mx-auto text-center '>
        <h2 className='text-xl font-semibold text-purple-500 '>
          Himanshu Rajput
        </h2>

        {/* Navigation Links */}
        <nav className=' flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 '>
          {[
            {name: "About",id:"about"},
            {name: "Skills",id:"skills"},
            {name:"Projects",id:"work"},
            {name:"Education",id:"education"},
          ].map((item, index) =>(
            <button key={index} onClick={()=> handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1 '
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* SocialMedia Icons */}
        <div className=' flex flex-wrap justify-center space-x-4 mt-4 '>
          {[
            {icon:<FaFacebook />, link:"https://www.facebook.com/himanshurajput757@gmail.com"},
            {icon: <FaTwitter /> , link:"https://x.com/himansh41058157"},
            {icon: <FaLinkedin />, link:"https://www.linkedin.com/in/himanshu-rajput-443727b8/"},
            {icon: <FaInstagram />, link:"https://www.instagram.com/himanshu.rajput.16503/" },
            {icon: <FaYoutube />, link:"https://www.youtube.com/@Himanshurajput-hs2qb" }
          ].map((item, index)=>(
            <a key={index} href={item.link}
             target='_blank'
             rel='noopener noreferrer'
             className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110 '
             >{item.icon}</a>
          ))}
        </div>

        {/* copyright Text */}
        <p className='text-sm text-gray-400 mt-6 '>
         © 2025 Himanshu Rajput, All rights reserved
        </p>
        </div> 
      
    </footer>
  )
}

export default Footer
