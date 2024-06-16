"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fadeIn, textVariant } from "../../utils/motion"
import { useMousePosition } from "../hooks/useMousePosition"
import { events } from "@react-three/fiber"

interface StopOnHoverTimeParams {
  x: number
}

interface OnHoverTimeParams {
  x: number
}

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
    description: string
    tags: { name: string; color: string }[]
  }[]
}) => {
  const { x, y } = useMousePosition()
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(3, 7)
  const thirdRow = products.slice(5, 10)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [hoverSlip, setHoverSlip] = useState<number>(0.5)
  const [stopSlip, setStopSlip] = useState<boolean>(true)
  const [reverseSlip, setReverseSlip] = useState<number>(-0.5)
  const stopOnHoverTime = ({
    x,
  }: StopOnHoverTimeParams): number | undefined => {
    setHoverSlip(0.5)
    return undefined
  }

  const reverseStopOnHoverTime = ({
    x,
  }: StopOnHoverTimeParams): number | undefined => {
    setReverseSlip(-0.5)
    return undefined
  }

  const onhoverTime = ({ x }: OnHoverTimeParams): number => {
    let newHoverSlip = hoverSlip
    for (let i = 0; i < 1000; i++) {
      newHoverSlip += 1.1
      setHoverSlip(newHoverSlip)
    }
    return newHoverSlip
  }
  const reverseOnhoverTime = ({ x }: OnHoverTimeParams): number => {
    let newHoverSlip = hoverSlip
    for (let i = 0; i < 1000; i++) {
      newHoverSlip += 1.1
      setReverseSlip(newHoverSlip)
    }
    return newHoverSlip
  }

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 3], [0, 4000 + hoverSlip]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 3], [0, -4000 + -hoverSlip]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-100, 300]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="h-[320vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div
          onHoverEnd={() => stopOnHoverTime({ x: hoverSlip })}
          onHoverStart={() => onhoverTime({ x: hoverSlip })}
          className="flex flex-row-reverse space-x-reverse space-x-20"
        >
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div id="Projects" className="left-0 top-0">
      <motion.div variants={textVariant()}>
        <p
          className={`bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 `}
        >
          My work
        </p>
        <h2
          className={`text-start text-7xl max-sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50`}
        >
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 1, 0.75)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
    description: string
    tags: { name: string; color: string }[]
  }
  translate: MotionValue<number>
}) => {
  return (
    <>
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -50,
        }}
        key={product.title}
        className="group/product h-[30rem] w-[25rem] relative flex-shrink-0 "
      >
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
          <div className="relative w-full h-[230px]">
            <Image
              src={product.thumbnail}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            <Link href={product.link}>
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  {/* <img
                  src={product.thumbnail}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
          // border 
                <div className="relative inline-flex  overflow-hidden  p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center  bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"></span>
            </div>
                /> */}
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              {product.title}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              {product.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <p
                key={`${tag.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
