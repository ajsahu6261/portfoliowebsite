import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "../src/Projects/Projects";
import Footer from "./pages/Footer";
import Certificate from "./Certificate/Certificate";



export default function App() {
 

  return (
    <div className ="bg-[#171d32] h-auto w-full overflow-hidden" >
      <Navbar />
       <Home /> 
      <About />
      <Skills />
      <Certificate />
      <Experience />
      <Contact />
      <Projects />
      <Footer />

    </div>
  )
}

// export default App
