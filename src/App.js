
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { assets } from './assets/assets';
import Loader from './components/Loader'; // import loader
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contsct';
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div>
      <div className="relative w-full md:h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={assets.backimg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Overlay Content */}
        <div className="relative z-10 pt-5 px-4">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
