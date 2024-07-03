import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Technologies from "./Components/Technologies/Technologies";
import SocialLinks from "./Components/SocialLinks";
import Education from "./Components/Euducation/Education";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" w-full  bg-gradient-to-b from-black via-black to-gray-800">
      <Home />
      <About/>
      <Education/>
      <Technologies/>
      
      <Projects/>
      <Contact/>
      <SocialLinks/>

      </div>

     
    </div>
  );
}

export default App;