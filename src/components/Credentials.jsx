import { motion } from "framer-motion"


const Credentials = () => {
  return (
    <motion.div
     initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}>
         <div className="mt-[2rem] ">
        <p className="text-white font-montserrat my-[1.5rem]">Computer Science Engineering  -  Jai Shriram Engineering College <span className="text-blue-700"> (2020 - 2024) </span></p>
        
    </div>
    </motion.div>
  )
}

export default Credentials