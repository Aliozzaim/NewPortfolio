import Image from "next/image"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Tech from "../components/Tech"
import StarsCanvas from "../components/canvas/Stars.jsx"
import Works from "../components/Works"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Education />
      <Tech />
      <div className="relative z-0">
        <StarsCanvas />
        <Works />
        <Contact />
      </div>
    </div>
  )
}
