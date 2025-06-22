import "boxicons";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';
import { assets } from "../assets/assets";
import moreImage from '../assets/Group 108.png';




const Projects = () => {


  const View = () => {
        Swal.fire({
    title: "<span style='color: #fff;'>My Projects</span>",
    html: `
      <p style="color: #ccc;">
        View more <a href='https://github.com/Ranjith034' target='_blank' style='color: #4aa1ff;'>Projects</a>.
      </p>
      <img src="${moreImage}" alt="Project Preview" style="width: 100%; border-radius: 8px; margin-top: 10px;" />
    `,
    
    background: "linear-gradient(to right, #434343 0%, black 100%)",
    showConfirmButton: true,
    confirmButtonColor: "#004ccb",
    customClass: {
      popup: 'border border-gray-600'
    }
  });
  

console.log(moreImage);


    }


  return (
    <div>
        <motion.div 
        initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:flex md:justify-around md:mt-[8rem] ">
         <div className="md:ml-[3rem]">
             <p className="text-xl  font-montserrat text-blue-700 mb-[2rem] "><span className="text-white">My</span> Projects</p>
             <p className="text-md font-montserrat text-white max-w-[600px]">
              "Explore a selection of my featured projects that reflect my passion for creating clean, responsive, and user-centric web experiences. Each project showcases my dedication to writing maintainable code, applying modern UI/UX principles, and solving real-world problems through thoughtful design and efficient functionality. From static landing pages to dynamic web applications, these works highlight my continuous journey in mastering front-end and full-stack development."
             </p>
             <div className="flex mt-[4rem] items-center">
            
             <div className="flex items-center group cursor-pointer">
  <div className="w-[70px] h-[70px] rounded-[50%] flex justify-center items-center border-2 border-gray-600">
    <box-icon name='right-arrow-alt' animation='burst' color='#ffffff'></box-icon>
  </div>

  <div className="w-[110px] h-[39px] ml-[1rem] border-2 border-gray-600 rounded-md hidden group-hover:flex items-center justify-center transition-all duration-300">
    <button className="text-md font-montserrat text-white"
    onClick={View}
    >View More</button>
  </div>
</div>

             </div>
         </div>
         <div>
           

 <div className="md:p-3 md:min-h-[60vh] md:block flex justify-center items-center p-3 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">

    {/* Project Card 1 with hover button */}
    <div className="w-full max-w-[18rem] rounded-lg overflow-hidden shadow-lg relative group hover:scale-105 transition duration-300">
      <img src={assets.tr} alt="Project 1" className="w-full h-[13rem] object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-md p-3 z-10">
        <h3 className="text-gray-700 font-montserrat text-base">Lawyer Appointment Project</h3>
        <img src={assets.title} className="w-[18vh]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <button className="px-4 py-2 text-black font-montserrat bg-white/80 rounded-lg hover:bg-white" onClick={() => window.location.href = "https://charu.whydev.in/"}
>
            View Details
          </button>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full max-w-[18rem] rounded-lg overflow-hidden shadow-lg relative group hover:scale-105 transition duration-300">
      <img src={assets.tl} alt="Project 2" className="w-full h-[13rem] object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-md p-3 z-10">
        <h3 className="text-gray-700 font-montserrat text-base">Portfolio Web Site</h3>
        <img src={assets.three} className="w-[10vh]" />
      </div>
     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <button className="px-4 py-2 text-black font-montserrat bg-white/80 rounded-lg hover:bg-white" onClick={() => window.location.href = "https://charu.whydev.in/"}
>
            View Details
          </button>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full max-w-[18rem] rounded-lg overflow-hidden shadow-lg relative group hover:scale-105 transition duration-300">
      <img src={assets.b2} alt="Project 3" className="w-full h-[13rem] object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-md p-3 z-10">
        <h3 className="text-gray-700 font-montserrat text-base">Bus Booking UI/UX Design</h3>
        <img src={assets.two} className="w-[9vh]" />
      </div>
     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <button className="px-4 py-2 text-black font-montserrat bg-white/80 rounded-lg hover:bg-white" onClick={() => window.location.href = "https://www.figma.com/design/y4hIl8CNSc2OmlQh0BzlaE/Untitled?node-id=120-8&t=AeRMB5LgQAv1BmLE-1"}
>
            View Details
          </button>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="w-full max-w-[18rem] rounded-lg overflow-hidden shadow-lg relative group hover:scale-105 transition duration-300">
      <img src={assets.b1} alt="Project 4" className="w-full h-[13rem] object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-md p-3 z-10">
        <h3 className="text-gray-700 font-montserrat text-base">Food Order UI/UX Design</h3>
        <img src={assets.two} className="w-[9vh]" />
      </div>
     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <button className="px-4 py-2 text-black font-montserrat bg-white/80 rounded-lg hover:bg-white" onClick={() => window.location.href = "https://www.figma.com/design/x9Oa7MWX1W0vAx7gTpM924/Food-app?node-id=0-1&t=KG6sjjIbj2KTENQS-1"}
>
            View Details
          </button>
        </div>
      </div>
    </div>

  </div>
</div>



         </div>
        </motion.div>
    </div>
  )
}

export default Projects