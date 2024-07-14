// components/BlogCard.jsx
import React from "react"
import {
  FollowPointer,
  FollowerPointerCard,
} from "@/components/ui/FollowingPointer"
import { HoverEffect } from "@/components/ui/Cardhovereffect"

const items = [
  {
    id: 1,
    title: "Creating 3D Art Gallery with Three.js",
    description:
      "Learn how to create a 3D art gallery using Three.js and React.",
    link: "https://dev.to/aliozzaim",
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    description:
      "Learn how to build scalable applications using best practices in React and Next.js.",
    link: "https://dev.to/aliozzaim",
  },
  {
    id: 3,
    title: "Deploying Your Next.js App",
    description:
      "A guide to deploying your Next.js applications to Vercel and other hosting platforms.",
    link: "https://dev.to/aliozzaim",
  },
]

const BlogCard = () => {
  return (
    <div className="mt-[6rem]  flex justify-center space-y-[500px] ">
      {/* <FollowerPointerCard> */}
      <HoverEffect items={items}></HoverEffect>
      {/* </FollowerPointerCard> */}
    </div>
  )
}

export default BlogCard
