"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphicCard({ children, className }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group ${className}`} // Adicionado group aqui para o hover effect
    >
      <div className="relative overflow-hidden rounded-xl bg-dark-bg-secondary/70 backdrop-blur-sm border border-brand-blue-700/50 p-6 md:p-8 transition-all duration-300 group-hover:border-brand-blue-500/70">
        {/* Efeito de brilho sutil no hover */}
        <div className="absolute -inset-px bg-gradient-to-r from-brand-blue-500/20 to-brand-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
        <div className="relative z-10">
            {children}
        </div>
      </div>
    </motion.div>
  )
}