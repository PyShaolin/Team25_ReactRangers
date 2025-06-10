"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  title: string
  description: string
}

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images: CarouselImage[] = [
    {
      src: "https://img.freepik.com/premium-photo/group-indian-people-are-using-computer-laptop_53876-9348.jpg?w=740",
      alt: "Citizens using digital services",
      title: "Digital India Initiative",
      description: "Empowering citizens through technology",
    },
    {
      src: "https://www.visualsstock.com/images/Low/5/AK61916.jpg",
      alt: "Farmers benefiting from schemes",
      title: "Agricultural Support",
      description: "Supporting farmers across the nation",
    },
    {
      src: "https://img-cdn.thepublive.com/fit-in/1200x627/30-stades/media/media_files/XqmvqoMorTOnhkOluAcA.jpeg",
      alt: "Women empowerment programs",
      title: "Women Empowerment",
      description: "Creating opportunities for women",
    },
    {
      src: "https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-364.jpg?w=740",
      alt: "Education and skill development",
      title: "Education for All",
      description: "Building skills for the future",
    },
    {
      src: "https://img.freepik.com/premium-photo/indian-doctor-with-patient-hospital-clinic_466689-96537.jpg",
      alt: "Healthcare accessibility",
      title: "Healthcare Access",
      description: "Quality healthcare for everyone",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000) // Change slide every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h3>
            <p className="text-teal-100">{images[currentIndex].description}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
