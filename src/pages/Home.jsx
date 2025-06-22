import { motion } from "framer-motion"




const Home = () => {
  return (
    <div className="md:flex text-center md:justify-around  md:h-[80vh] ">
       <div className="md:block py-[10rem]">
        <motion.h1 
        
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       className="font-montserrat md:text-[3rem] text-[2rem] text-white pt-[2rem]">Hi, I’m Ranjith M</motion.h1>
        <motion.h1 
        initial={{ x: 100, opacity: 0 }}   // Start off-screen right
      animate={{ x: 0, opacity: 1 }}     // Animate to position
      transition={{ duration: 0.8, ease: "easeOut" }}className="font-montserrat md:text-[2rem] text-[1.5rem] text-white pt-[2rem]">MERN <span className="text-blue-700">STACK</span> DEVELOPER</motion.h1>
        <motion.p   initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-montserrat md:text-[1.5rem] text-[1rem] text-white py-[2rem] ">
            I build responsive, user-friendly websites with clean code and creative design. 
            </motion.p>
       </div>
    </div>
  )
}

export default Home