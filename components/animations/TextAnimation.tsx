"use client"
import { use, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface TextAnimationProps {
  children: JSX.Element
  with?: "fit-content" | "100%"
}

export default function TextAnimation({
  children,
  with: width,
}: TextAnimationProps) {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  const slideControls = useAnimation()
  const controls = useAnimation()

  useEffect(() => {
    if (isInview) {
      controls.start("visible")
      slideControls.start("visible")
    }
  }, [controls, isInview, slideControls])

  return (
    <div
      ref={ref}
      className="inline-block"
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: "0" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
          zIndex: 1,
        }}
      />
    </div>
  )
}
