"use client"
import React, { useEffect, useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"
import { gsap } from "gsap"

export const TechParallax = ({
  products,
}: {
  products: {
    name: string
  }[]
}) => {
  const skills = useRef<HTMLDivElement | null>(null)
  const scroller = useRef()
  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set")

    let to = gsap.to(skillSet, {
      xPercent: () => 8 * (skillSet.length - 1),
      duration: 5,
      ease: "elastic.out(1,0.3)",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    })

    return () => {
      to.kill()
    }
  }, [scroller, skills])

  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(4, 9)
  const thirdRow = products.slice(8, 13)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 100]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, -100]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.3, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [-100, 400]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="h-[145vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <motion.div
        style={{
          rotateX,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div
          ref={skills}
          className=" skill-set flex flex-row-reverse space-x-reverse space-x-20 mb-20"
        >
          {firstRow.map((product, index) => (
            <ProductCard
              index={index}
              product={product}
              translate={translateX}
              key={product.name}
            />
          ))}
        </motion.div>
        <motion.div
          ref={skills}
          className=" skill-set flex flex-row  mb-20 space-x-20 "
        >
          {secondRow.map((product, index) => (
            <ProductCard
              index={index}
              product={product}
              translate={translateXReverse}
              key={product.name}
            />
          ))}
        </motion.div>
        <motion.div
          ref={skills}
          className=" skill-set flex flex-row-reverse space-x-reverse space-x-20"
        >
          {thirdRow.map((product, index) => (
            <ProductCard
              index={index}
              product={product}
              translate={translateX}
              key={product.name}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
export const ProductCard = ({
  product,
  translate,
  index,
}: {
  product: {
    name: string
  }
  index: number
  translate: MotionValue<number>
}) => {
  return (
    <motion.p
      style={{
        x: translate,
        color: getRandomColor(),
      }}
      whileHover={{
        y: -10,
      }}
      key={product.name}
      className={`${
        index / 2 === 1 ? "!text-white" : ""
      } group/product text-7xl font-extrabold uppercase tracking-tighte relative flex-shrink-0`}
    >
      {product.name}
    </motion.p>
  )
}
