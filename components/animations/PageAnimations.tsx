"use client"
/* eslint-disable */
import React, { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function PageAnimations({ children }: { children: React.ReactNode }) {
  console.log("children: ", children)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  console.log("scrollYProgress", scrollYProgress)
  const y = useParallax(scrollYProgress, 300)

  return (
    <span ref={ref}>
      <motion.div style={{ y }}>{children}</motion.div>
    </span>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {[1, 2, 3, 4, 5].map((id) => (
        <PageAnimations key={id}>
          <motion.h2>{`#00${id}`}</motion.h2>
        </PageAnimations>
      ))}
    </>
  )
}
