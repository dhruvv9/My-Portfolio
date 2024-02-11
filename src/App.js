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
      <Home />
      <About/>
      <Education/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <SocialLinks/>



     
    </div>
  );
}

export default App;