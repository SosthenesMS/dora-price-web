"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import logo from "@/public/logo_final_03.png"

interface LogoProps {
  className?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  showText?: boolean
}

export function Logo({ className, size = "lg", showText = false }: LogoProps) {
  const sizeClasses = {
    xs: "h-6 w-6",        // extra small
    sm: "h-10 w-10",      // small (aumentado de h-8)
    md: "h-16 w-16",      // medium (aumentado de h-10)
    lg: "h-24 w-24",      // large (aumentado de h-16)
    xl: "h-32 w-32",      // extra large
    "2xl": "h-40 w-40"    // double extra large
  }

  const textSizeClasses = {
    xs: "text-base",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl"
  }

  const imageDimensions = {
    xs: 40,
    sm: 64,
    md: 96,
    lg: 128,
    xl: 160,
    "2xl": 200
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative mt-2 h-10", sizeClasses[size])}>
        <Image
          src={logo}
          alt="Dora Logo"
          width={imageDimensions[size]}
          height={imageDimensions[size]}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent",
            textSizeClasses[size],
          )}
        >
         Dora Price Backoffice
        </span>
      )}
    </div>
  )
}


