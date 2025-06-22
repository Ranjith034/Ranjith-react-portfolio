import "boxicons";
import { motion } from "framer-motion";
import { useState } from 'react';
import Certification from '../components/Certification';
import Credentials from '../components/Credentials';
import Experience from '../components/Experience';
import Skills from '../components/Skills.jsx';



const About = () => {
  
 const [activeSection, setActiveSection] = useState('skills'); // default is 'skills'

  const renderSection = () => {
    switch (activeSection) {
      case 'skills':
        return <Skills />;
      case 'certification':
        return <Certification />;
      case 'experience':
        return <Experience />;
      case 'credentials':
        return <Credentials />;
      default:
        return null;
    }
 
  }
 

  return (
    <div className="">
      
        <div className="md:flex md:justify-around md:px-[4rem]  p-[2rem]  m-h-[350vh]">
          <div className="font-montserrat text-white mt-[7rem]">
            <motion.h1 
             initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl font-medium">About Me</motion.h1>
            <motion.p 
            initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-[2rem] leading-7">
              I'm Ranjith, a Full Stack Developer intern passionate about building responsive and
              user-friendly websites. I work with HTML, CSS, JavaScript, ReactJS, AngularJS, and
              ExpressJS to create clean and interactive web interfaces. Currently, I’m gaining hands-on
              experience through real-world projects like a Healthcare Dashboard and a carbon footprint
              tracking site. I also use Figma to turn design ideas into functional layouts.
            </motion.p>
            <div className="md:flex   mt-[2rem]">
              <div className="md:block flex justify-around items-center">
              <p className="md:me-[3rem] md:text-[2rem]  md:ps-[2rem] md:pt-[2rem]  text-[1.2rem] font-montserrat">Experience</p>
              <p className="md:me-[3rem] md:text-xl md:ps-[2rem]  md:pt-[1.5rem] font-montserrat text-[1.7rem] "><span className="text-blue-700 "> 8</span> Months</p>
              </div>
              <div className="md:h-[100px] md:w-[2px] md:bg-gray-600 md:rounded-xl md:mt-[2.5rem] hidden md:block"></div>
              <div className="md:block  flex  justify-around items-center ">
              <p className="md:me-[3rem] md:text-[2rem]  md:ps-[2rem] md:pt-[2rem] pt-[2rem]  text-[1.2rem] font-montserrat">Age</p>
              <p className="md:me-[3rem] md:text-xl md:ps-[2rem]  md:pt-[1.5rem]  pt-[2rem] font-montserrat text-[1.7rem]  text-blue-700">22</p>
              </div>
             <div className="md:h-[100px] md:w-[2px] md:bg-gray-600 md:rounded-xl md:mt-[2.5rem] hidden md:block"></div>
              <div className="md:block  flex justify-around items-center ">
              <p className="md:me-[3rem] md:text-[2rem]  md:ps-[2rem] md:pt-[2rem] pt-[2rem] text-[1.2rem] font-montserrat">Projects</p>
              <p className="md:me-[3rem] md:text-xl md:ps-[2rem]  md:pt-[1.5rem] pt-[2rem] font-montserrat text-[1.7rem]  "><span className="text-blue-700"> 7+</span> projects</p>
              </div>
            </div>

            
          </div>
          <div className="mx-[18rem] my-[11rem]  md:block hidden ">
             
         
      <motion.div 
       initial={{ x: 100, opacity: 0 }}   // Start off-screen right
      animate={{ x: 0, opacity: 1 }}     // Animate to position
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex   gap-8 my-6 font-montserrat text-lg cursor-pointer text-white">
        <p
          className={`${activeSection === 'skills' ? 'underline decoration-blue-500 underline-offset-8' : ''}`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </p>
        <p
          className={`${activeSection === 'certification' ? 'underline decoration-blue-500 underline-offset-8' : ''}`}
          onClick={() => setActiveSection('certification')}
        >
          Certification
        </p>
        <p
          className={`${activeSection === 'experience' ? 'underline decoration-blue-500 underline-offset-8' : ''}`}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </p>
        <p
          className={`${activeSection === 'credentials' ? 'underline decoration-blue-500 underline-offset-8' : ''}`}
          onClick={() => setActiveSection('credentials')}
        >
          Credentials
        </p>
      </motion.div>

      {/* Dynamically rendered component */}
      <motion.div 
      initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}className="mt-4">{renderSection()}</motion.div>
          </div> 
        </div>

        <div>

        </div>
      
    </div>
  );
};

export default About;
