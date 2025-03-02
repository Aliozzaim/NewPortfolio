"use client"
/* eslint-disable */
import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { BackgroundGradient } from "./ui/Background-gradient"
import { slideIn } from "../utils/motion"
import { Button } from "@nextui-org/react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"
import dynamic from "next/dynamic"
const Animation = dynamic(() => import("./Animation"), { ssr: false })

const Contact = () => {
  const { width, height } = useWindowSize()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })

    setErrors({
      ...errors,
      [name]: "",
    })
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      newErrors.email = "Valid email is required"
      isValid = false
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.NEXT_PUBLIC_TO_NAME,
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setForm({
          name: "",
          email: "",
          message: "",
        })
        setTimeout(() => {
          setLoading(false)
        }, 1700)
        setSubmitMessage(
          "Thank you. I will get back to you as soon as possible."
        )
        setIsSubmitted(true)
      })
      .catch((error) => {
        setIsSubmitted(true)
        setLoading(false)
        console.error(error)
        setSubmitMessage("Ahh, something went wrong. Please try again.")
      })
  }

  return (
    <div
      className={`xl:mt-12 flex  xl:flex-row flex-col-reverse gap-[20px] overflow-hidden mb-3`}
    >
      {loading ? (
        <Confetti
          className={`${loading ? "z-[100]" : ""} absolute`}
          opacity={loading ? 1 : 0}
          width={typeof window !== "undefined" ? window.innerWidth : 1250}
          height={typeof window !== "undefined" ? window.innerHeight : 700}
        />
      ) : null}
      <div className={`${loading ? "-z-10" : ""}  flex-[0.65] `}>
        <BackgroundGradient type="tilt">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className=" bg-black p-8 rounded-2xl "
          >
            <p
              className={` bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50`}
            >
              Get in touch
            </p>
            <h3
              className={` text-6xl max-sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 `}
            >
              Contact
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-[24px] flex flex-col gap-8 relative"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary !bg-black  text-white rounded-lg outline-none border-none font-medium"
                />
                <p className="text-red-500 mt-1">{errors.name}</p>
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary !bg-black  text-white rounded-lg outline-none border-none font-medium"
                />
                <p className="text-red-500 mt-1">{errors.email}</p>
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 !bg-black  px-6 placeholder:text-secondary h-[70px] text-white rounded-lg outline-none border-none font-medium"
                />
                <p className="text-red-500 mt-1">{errors.message}</p>
              </label>

              <Button
                type="submit"
                className="text-tiny text-white bg-white/10 rounded-xl self-center font-bold  shadow-primary  w-[320px] py-3 px-8 hover:scale-105 transition-all duration-200"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                {loading ? "Sending..." : "Send"}
              </Button>
              <Animation visibility={loading} />
            </form>
            {isSubmitted && (
              <div
                className={`mt-2 text-white text-center ${submitMessage.includes("Thank")
                  ? "text-green-500"
                  : "text-red-500"
                  }`}
              >
                {submitMessage}
              </div>
            )}
          </motion.div>
        </BackgroundGradient>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-[0.50] xl:h-auto md:h-[550px] h-[250px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
