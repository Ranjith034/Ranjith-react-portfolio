import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";


const Nav = () => {
  
      const [checked, setChecked] = useState(false);

      const navigate = useNavigate()

      const location = useLocation()

      console.log(location.pathname)

  return (
    <div>
    <div className='md:flex md:justify-between md:mx-6 md:items-center flex justify-between'>
       <div className="">
        <motion.img src={assets.logo}
       className="w-[8vh] cursor-pointer"
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       onClick={() => navigate('/')}
      />
  

       </div>
       <motion.div 
        className="hidden md:flex md:justify-center md:gap-5"
       initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <button className="font-montserrat text-lg text-white font-medium cursor-pointer" onClick={() => navigate('/')}>Home</button>
        <button className="font-montserrat text-lg text-white font-medium cursor-pointer" onClick={() => navigate('/about')}>About</button>
        <p className="font-montserrat text-lg text-white font-medium cursor-pointer" onClick={() => navigate('/project')}>Projects</p>
        <p className="font-montserrat text-lg text-white font-medium cursor-pointer" onClick={() => navigate('/contact')}>Contact</p>
       </motion.div>
       <motion.div 
        initial={{ x: 100, opacity: 0 }}   // Start off-screen right
      animate={{ x: 0, opacity: 1 }}     // Animate to position
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
         <div className="flex justify-center items-center">
      <input
        id="checkbox"
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label
        htmlFor="checkbox"
        className="relative w-8 h-[calc(3px*3+11px*2)] cursor-pointer block"
      >
        <div
          className={`absolute left-0 right-0 h-1 rounded bg-white transition-[bottom,transform] duration-[350ms] ease-[cubic-bezier(0.5,-0.35,0.35,1.5)] ${
            checked
              ? "bottom-[calc(50%-2px)] rotate-[-135deg] delay-0"
             
              : "bottom-[calc(50%+11px+2px)] delay-[210ms]"
          }`}
        />
        <div
          className={`absolute top-[calc(50%-2px)] left-0 right-0 h-1 rounded bg-white transition-[opacity,transform] duration-[350ms] ease-[cubic-bezier(0.5,-0.35,0.35,1.5)] ${
            checked
              ? "opacity-0 rotate-[-135deg] delay-[105ms]"
              : "opacity-100 delay-[105ms]"
          }`}
        />
        <div
          className={`absolute left-0 right-0 h-1 rounded bg-white transition-[top,transform] duration-[350ms] ease-[cubic-bezier(0.5,-0.35,0.35,1.5)] ${
            checked
              ? "top-[calc(50%-2px)] rotate-[-225deg] delay-[210ms]"
              : "top-[calc(50%+11px+2px)] delay-0"
          }  ` }

        
        />
       
       
      </label>
       
    </div>
   
       </motion.div>
        

    </div>
    <div className="md:block hidden">
     <div className={`absolute  right-0  mt-[1rem] 
            ${
            checked
            ? "block w-[200px]  p-[1rem] bg-white/10 backdrop-blur-none rounded-lg"
            : "hidden"
        }`}>
        <button className="font-montserrat text-lg text-white font-medium cursor-pointer pb-2 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick = {() => navigate("/")}>Home</button>
        <button className="font-montserrat text-lg text-white font-medium cursor-pointer pb-2 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick = {() => navigate('/about')}>About</button>
        <button className="font-montserrat text-lg text-white font-medium cursor-pointer pb-2 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick = {() => navigate('/project')}>Projects</button>
        <button className="font-montserrat text-lg text-white font-medium cursor-pointer pb-2 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick = {() => navigate('/contact')}>Contact</button>
        </div>
        </div>
        <div className="md:hidden ">
         <div className={`absolute  right-0  mt-[1rem]
            ${
            checked
            ? "block w-[160px]  p-2 bg-white/10 backdrop-blur-none rounded-lg"
            : "hidden"
        }`}>
        <button className="font-montserrat text-md text-white font-medium cursor-pointer pb-1 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick={() => navigate('/')}>Home</button>
        <button className="font-montserrat text-md text-white font-medium cursor-pointer pb-1 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick={() => navigate("/about")}>About</button>
        <button className="font-montserrat text-md text-white font-medium cursor-pointer pb-1 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick={() => navigate('/project')}>Projects</button>
        <button className="font-montserrat text-md text-white font-medium cursor-pointer pb-1 hover:bg-slate-600 rounded-md m-1 ps-2 flex pt-1" onClick={() => navigate('/contact')}>Contact</button>
        </div>
        </div>
    </div>
  )
}

export default Nav