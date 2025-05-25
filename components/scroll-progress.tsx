"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  // Ajustar a suavidade da mola para ser um pouco mais responsiva
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, mass: 0.5 })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Mostrar após um pouco de scroll
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue-500 via-brand-cyan-500 to-brand-blue-600 origin-left z-[60]" // z-index alto, mas abaixo do nav flutuante se necessário
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3, ease: "easeInOut" } }}
    />
  )
}