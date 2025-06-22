
import { motion } from "framer-motion";


const Skills = () => {

  return (
     <motion.div
      initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}>
       <div className="flex gap-6 items-center mt-4 text-white text-2xl">
  <p className="text-[1rem]"><span className="text-blue-700">Web</span> Development</p>
  <i className='bx bxl-html5'></i>
  <i className='bx bxl-css3'></i>
  <i className='bx bxl-javascript'></i>
  <i className='bx bxl-react'></i>
  <i className='bx bxl-tailwind-css'></i>
  <i className='bx bxl-nodejs'></i>
  <i className='bx bxl-mongodb'></i>
</div>

<div className="flex gap-6 items-center mt-4 text-white text-2xl">
  <p className="text-[1rem]"><span className="text-blue-700">UX/</span>UI Development</p>
  <i className='bx bxl-figma'></i>
  <i className='bx bxl-adobe'></i>
</div>
    </motion.div>
  )
}

export default Skills





