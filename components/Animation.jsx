"use client"
/* eslint-disable */
import React from "react"
import Lottie from "lottie-react"
import animationData from "../assets/animation/EmailAnimation.json"

const Animation = (props) => {
  return (
    <div
      className={`absolute bottom-[-10px] left-100 overflow-visible z-10 ${
        !props.visibility ? "z-[-1] invisible" : ""
      }`}
    >
      <Lottie
        animationData={animationData}
        loop={props.visibility}
        autoplay={props.visibility}
        style={{ width: 300, height: 300 }}
      />
    </div>
  )
}

export default Animation
