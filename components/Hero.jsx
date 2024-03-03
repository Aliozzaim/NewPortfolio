"use client"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { Shapes } from "./Shapes"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div className="flex flex-wrap  justify-center  ">
        <div className={` sm:px-16 px-6 flex flex-row items-start gap-5 mt-24`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1
              className={` font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-white`}
            >
              Hi, I&apos;m <span className="text-[#915EFF]">Ali</span>
            </h1>
            <p
              className={`  text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
            >
              I develop 3D visuals, user <br className="sm:block hidden  " />
              interfaces and web applications
            </p>
          </div>
        </div>
        <div className="w-[40%] h-[50%]  right-1">{/* <Shapes /> */}+</div>
      </div>
      <div className=" absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
