/* eslint-disable */
"use client"
import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import Image from "next/image"
import { HeroParallax } from "./ui/Hero-parallax"
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demoLink,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    //   <Tilt
    //     options={{
    //       max: 45,
    //       scale: 1,
    //       speed: 450,
    //     }}
    //     className="bg-tertiary p-5 rounded-2xl   sm:w-[360px] w-full"
    //   >
    //     <Card className="py-4">
    //       <CardBody className="overflow-visible py-2 relative w-full h-[230px]  cursor-pointer bg-black">
    //         <Image
    //           alt="Card background"
    //           className="object-cover w-[320px] h-[320px]  rounded-xl"
    //           src={image}
    //           width={270}
    //         />
    //       </CardBody>
    //       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    //         <div className="text-tiny uppercase font-bold relative my-1 ">
    //           {name}
    //           <div className="absolute inset-0 left-[250px] top-[-10px]  card-img_hover  ">
    //             <div
    //               onClick={() => window.open(source_code_link, "_blank")}
    //               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    //             >
    //               <Image
    //                 src={github}
    //                 alt="source code"
    //                 className="w-1/2 h-1/2 object-cover m-2 border-2 rounded-full"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <small className="text-default-500">{description}</small>
    //         <h4 className="font-bold text-large mt-4 flex flex-wrap gap-2">
    //           {tags.map((tag) => (
    //             <p
    //               key={`${name}-${tag.name}`}
    //               className={`text-[14px] ${tag.color}`}
    //             >
    //               #{tag.name}
    //             </p>
    //           ))}
    //         </h4>
    //       </CardHeader>
    //     </Card>
    //   </Tilt>
    // </motion.div>
    null
  )
}

const Works = () => {
  return (
    <>
      <HeroParallax products={projects}></HeroParallax>
    </>
  )
}

export default SectionWrapper(Works, "")
