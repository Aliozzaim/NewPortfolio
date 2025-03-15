"use server"
import Navbar from "@/components/Navbar"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Works from "../components/Works"
import Contact from "../components/Contact"
import { TechParallax } from "@/components/ui/Tech-parallax"
import { technologies } from "@/constants"
import HeroAbout from "@/components/HeroAbout"

export default async function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <HeroAbout />
        <Experience />
        <Education />
        <TechParallax products={technologies} />
        <Works />
        <Contact />
      </div>
    </>
  )
}
