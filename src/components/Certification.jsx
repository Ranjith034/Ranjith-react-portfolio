import { motion } from "framer-motion"


const Certification = () => {
  return (
    <motion.div 
    initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       className="mt-[2rem] ">
        <p className="text-white font-montserrat my-[1.5rem]">Full Stack Development Course - <span className="text-blue-700">Why tap </span></p>
        <p className="text-white font-montserrat">Introduction To Cloud - <span className="text-blue-700">IBM</span> </p>
    </motion.div>
  )
}

export default Certification