"use client"

import { AboutPage } from "@/components/about-page"
import { StylizedImage } from "@/components/stylized-image"
import { useState } from "react"

export default function About() {
  // You can replace this with your own image URL
  const [imageSrc, setImageSrc] = useState("https://ionizerresearch.com/wp-content/uploads/2014/08/happy-graduation-student-014.jpg")

  return (
    <>
      <AboutPage />

      {/* This component is hidden but available for use */}
      <div className="hidden">
        <StylizedImage imageSrc={imageSrc} />
      </div>
    </>
  )
}
