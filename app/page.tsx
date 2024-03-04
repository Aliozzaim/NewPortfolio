import Image from "next/image"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Works from "../components/Works"
import Contact from "../components/Contact"
import { TechParallax } from "@/components/ui/Tech-parallax"
import { technologies } from "@/constants"

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <TechParallax products={technologies} />
      <Works />
      <Contact />
    </div>
  )
}
