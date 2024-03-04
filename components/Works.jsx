/* eslint-disable */
"use client"
import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import Image from "next/image"
import { HeroParallax } from "./ui/Hero-parallax"

const Works = () => {
  return (
    <>
      <HeroParallax products={projects}></HeroParallax>
    </>
  )
}

export default SectionWrapper(Works, "")
