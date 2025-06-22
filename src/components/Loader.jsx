import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Loader = () => {




  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 1000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Background image */}
      <img
        src={assets.backimg}
        alt="Loading background"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center">
          <div className="">
          <div className="text-white text-[5rem] font-montserrat overflow-hidden   animate-typing">
            <img src={assets.logo}  className="w-[15vh] h-[15vh] flex justify-center ml-[6rem]"/>
        
      </div>
     
      
          </div>
           <p className="text-white text-[5rem] font-montserrat overflow-hidden   animate-typing">Ranjith</p>
              {showLoader && (
          <div className="flex items-center justify-center h-[100px] space-x-2">
      <div className="w-5 h-5 rounded-full bg-blue-700 animate-bounce [animation-delay:0.1s]"></div>
      <div className="w-5 h-5 rounded-full bg-blue-800 animate-bounce [animation-delay:0.2s]"></div>
      <div className="w-5 h-5 rounded-full bg-blue-700 animate-bounce [animation-delay:0.3s]"></div>
      <div className="w-5 h-5 rounded-full bg-blue-800 animate-bounce [animation-delay:0.4s]"></div>
    </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
