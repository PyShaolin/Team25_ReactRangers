"use client"

import { useEffect, useRef } from "react"

interface StylizedImageProps {
  imageSrc: string
}

export function StylizedImage({ imageSrc }: StylizedImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 500
    canvas.height = 500

    // Load the image
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = imageSrc

    img.onload = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Define the capsule shapes
      const capsules = [
        { x: 50, y: 25, width: 350, height: 200, radius: 30 },
        { x: 125, y: 150, width: 350, height: 200, radius: 30 },
        { x: 75, y: 275, width: 350, height: 200, radius: 30 },
      ]

      // Draw each capsule with a portion of the image
      capsules.forEach((capsule, index) => {
        // Save context state
        ctx.save()

        // Create capsule shape
        ctx.beginPath()
        ctx.moveTo(capsule.x + capsule.radius, capsule.y)
        ctx.lineTo(capsule.x + capsule.width - capsule.radius, capsule.y)
        ctx.arcTo(
          capsule.x + capsule.width,
          capsule.y,
          capsule.x + capsule.width,
          capsule.y + capsule.radius,
          capsule.radius,
        )
        ctx.lineTo(capsule.x + capsule.width, capsule.y + capsule.height - capsule.radius)
        ctx.arcTo(
          capsule.x + capsule.width,
          capsule.y + capsule.height,
          capsule.x + capsule.width - capsule.radius,
          capsule.y + capsule.height,
          capsule.radius,
        )
        ctx.lineTo(capsule.x + capsule.radius, capsule.y + capsule.height)
        ctx.arcTo(
          capsule.x,
          capsule.y + capsule.height,
          capsule.x,
          capsule.y + capsule.height - capsule.radius,
          capsule.radius,
        )
        ctx.lineTo(capsule.x, capsule.y + capsule.radius)
        ctx.arcTo(capsule.x, capsule.y, capsule.x + capsule.radius, capsule.y, capsule.radius)
        ctx.closePath()

        // Clip to the capsule shape
        ctx.clip()

        // Calculate source and destination parameters for drawing the image
        // This creates a "zoomed in" effect for each capsule
        const aspectRatio = img.width / img.height
        const sourceY = (img.height / 3) * index
        const sourceHeight = img.height / 3
        const sourceWidth = sourceHeight * aspectRatio
        const sourceX = (img.width - sourceWidth) / 2

        // Draw the image portion in the capsule
        ctx.drawImage(
          img,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          capsule.x,
          capsule.y,
          capsule.width,
          capsule.height,
        )

        // Add white border
        ctx.strokeStyle = "white"
        ctx.lineWidth = 8
        ctx.stroke()

        // Restore context state
        ctx.restore()
      })

      // Add decorative dots
      ctx.fillStyle = "#008080" // Teal color
      ctx.beginPath()
      ctx.arc(20, 20, 10, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#FF7F50" // Coral color
      ctx.beginPath()
      ctx.arc(480, 480, 15, 0, Math.PI * 2)
      ctx.fill()
    }
  }, [imageSrc])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="max-w-full max-h-full shadow-xl rounded-lg" />
    </div>
  )
}
