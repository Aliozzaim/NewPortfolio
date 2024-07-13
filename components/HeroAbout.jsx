import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import PageAnimations from "./animations/PageAnimations.tsx"

const HeroAbout = () => {
  return (
    <PageAnimations>
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
    </PageAnimations>
  )
}

export default HeroAbout
