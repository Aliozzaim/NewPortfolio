"use client"
/* eslint-disable */
import React from "react"
import { Tilt } from "react-tilt"
import Image from "next/image"
import { motion } from "framer-motion"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { BackgroundGradient } from "./ui/Background-gradient"
import TextAnimation from "./animations/TextAnimation"

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full  p-[2px] rounded-[20px] shadow-card   bg-[#18181b]"
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <Image
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center !max-w-[152px]  ">
        {title}
      </h3>
    </div>
  </motion.div>
)

const About = () => {
  return (
    <>
      <span id="about">
        <motion.div variants={textVariant()}>
          <h2
            className={`text-center  m-auto text-6xl max-sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 `}
          >
            About Me
          </h2>
        </motion.div>

        <motion.h6
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4  ml-[18%] max-lg:ml-[10%] max-sm:ml-0 text-center  text-[17px] max-w-3xl leading-[30px]"
        >
          <TextAnimation>
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients
            to create efficient, scalable, and user-friendly solutions that
            solve real-world problems. Let's work together to bring your ideas
            to life!
          </TextAnimation>
        </motion.h6>

        <div className="mt-20 flex flex-wrap gap-[2rem] w-full justify-center">
          {services.map((service, index) => (
            <BackgroundGradient key={service.title} index={index}>
              <ServiceCard index={index} {...service} />
            </BackgroundGradient>
          ))}
        </div>
      </span>
    </>
  )
}

export default SectionWrapper(About, "about")
