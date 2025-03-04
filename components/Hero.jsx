"use server"
import { Spotlight } from "./ui/Spotlight"
import React from "react"
import TextAnimation from "./animations/TextAnimation"
async function Hero() {
  return (
    <section className={`relative w-full h-screen mx-auto max-w-[1480px] `}>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-25    max-sm:-top-10"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  max-md:mt-[100px]  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-center  ">
            <TextAnimation>
              <span className="text-4xl inline md:text-7xl font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 hover:from-neutral-100 hover:to-neutral-500">
                Hi, I&apos;m <span>Ali</span>
              </span>
            </TextAnimation>
          </h1>

          <h4 className="mt-4  font-normal text-base text-neutral-300 max-w-lg text-center mx-auto hover:text-neutral-200">
            <TextAnimation>
              <span>
                I&apos;m a full-stack engineer building scalable, high-performance applications with clean architecture and exceptional user experience.
              </span>
            </TextAnimation>
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Hero
