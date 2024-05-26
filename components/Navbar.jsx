/* eslint-disable */
"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { ButtonsCard } from "./ui/Button"
import { menu, close, github } from "../assets"
import GitHub from "../assets/github-mark.svg"
import Linkedin from "../assets/linkedin-svgrepo-com.svg"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 500) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled, setScrolled, setActive, setToggle])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full    z-50 flex items-center py-5  fixed top-0  mx-auto bg-black ${
        scrolled ? "" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <p className=" text-[18px] font-bold cursor-pointer flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
            Ali Ozzaim &nbsp;
            <span className="sm:block hidden"> | Full Stack Developer</span>
          </p>
        </Link>

        <ul
          className={` list-none hidden sm:flex flex-row gap-[1.5rem]  items-center `}
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white " : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a
                className="  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 hover:from-neutral-100 hover:to-neutral-50"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <div className="flex justify-center items-center">
            <a
              href="https://github.com/Aliozzaim"
              className="w-[45px] h-[36px] inline-flex !rounded-full  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                className="w-[20px] h-[20px]"
                src={GitHub}
                alt="123"
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-r%C4%B1za-%C3%B6zzaim-8b1ba320a/"
              className="  ml-[1rem]  w-[45px] h-[36px] inline-flex !rounded-full  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                className="w-[20px] h-[20px]"
                src={Linkedin}
                alt="123"
              ></Image>
            </a>
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] w-[50%] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <a
                href="https://github.com/Aliozzaim"
                className=" p-[5px]  h-[36px] inline-flex !rounded-full  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Image
                  className="!w-full h-[20px]"
                  src={GitHub}
                  alt="123"
                ></Image>
              </a>
              <a
                href="https://www.linkedin.com/in/ali-r%C4%B1za-%C3%B6zzaim-8b1ba320a/"
                className=" p-[5px]  h-[36px] inline-flex !rounded-full  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Image
                  className="!w-full h-[20px]"
                  src={Linkedin}
                  alt="123"
                ></Image>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
