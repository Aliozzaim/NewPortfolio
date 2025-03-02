"use client"
import React, { useRef, useEffect } from "react"
import { LampDemo } from "@/components/ui/Lamp"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import BlogCard from "@/components/BlogCard"
import Navbar from "@/components/Navbar"
const Blog = () => {
  gsap.registerPlugin(ScrollTrigger)

  const section1Ref = useRef(null)
  const section2Ref = useRef(null)

  useEffect(() => {
    const sections = [section1Ref.current, section2Ref.current]

    if (sections[0]) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "power4.out",
        scrollTrigger: {
          trigger: section1Ref.current.parentNode,
          pin: true,
          scrub: 1,
          snap: 1 / sections.length,
          end: "+=" + section1Ref.current.offsetWidth,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <span>
      <Navbar />
      <div className="w-[200%] h-screen flex flex-nowrap">
        <section className="w-[100%] will-change-transform" ref={section1Ref}>
          <LampDemo />
        </section>
        <section
          className="w-[100%] h-screen will-change-transform  "
          ref={section2Ref}
        >
          <BlogCard />
        </section>
      </div>
    </span>
  )
}

export default Blog
