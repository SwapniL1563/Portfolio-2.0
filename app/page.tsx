import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";


export default function Home() {
  return (
   <div className="h-screen relative">
     <Navbar />
     <Hero/>
     <Skills/>
     <Projects/>
     <About/>
     <Contact/>
     <Footer/>
   </div>
  );
}
