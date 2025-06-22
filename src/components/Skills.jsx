import "boxicons"
import { motion } from "framer-motion"

const Skills = () => {

  return (
     <motion.div
      initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className='flex gap-6 items-center mt-[1rem]'>
        <p className="text-white  "><span className="text-blue-700">Web</span> Development</p>
        <p><box-icon name='html5' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon name='css3' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon name='javascript' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon name='react' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon name='tailwind-css' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon name='nodejs' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon type='logo' name='mongodb' color='#ffffff' ></box-icon></p>
        </div>
         <div className='flex gap-6 items-center mt-[1rem]'>
        <p className="text-white  "><span className="text-blue-700">UX/</span>UI Development</p>
        <p><box-icon name='figma' type='logo' color='#ffffff' ></box-icon></p>
        <p><box-icon type='logo' name='adobe' color='#ffffff' ></box-icon></p>
       
       
        </div>
    </motion.div>
  )
}

export default Skills





