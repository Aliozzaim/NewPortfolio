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
    title:
      "Fixing vue-js-modal Library for Vue 3: A Guide to Restoring Modal Functionality",
    description:
      "I’ve put together a comprehensive guide detailing the changes I made to get vue-js-modal working seamlessly with Vue 3. If you’re dealing with similar issues, this article might be just what you need!",
    link: "https://dev.to/aliozzaim/fixing-vue-js-modal-library-for-vue-3-a-guide-to-restoring-modal-functionality-2lai",
  },
  {
    id: 2,
    title: "Creating 3D Art Gallery with Three.js",
    description:
      "Learn how to create a 3D art gallery using Three.js and React.",
    link: "https://dev.to/aliozzaim/creating-a-3d-gallery-app-with-threejs-html-and-css-part-1-2gcf",
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
