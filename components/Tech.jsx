/* eslint-disable */
"use client"
import React from "react"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import TechParallax from "./ui/Tech-parallax"
const Tech = () => {
  return (
    <div className=" relative w-full h-[700px] bg-slate-600">
      {/* {technologies.map((technology) => (
        <div className="w-25 h-25" key={technology.name}>
          <div className="cursor-pointer"></div>
        </div>
      ))} */}
    </div>
  )
}

export default SectionWrapper(Tech, "")
