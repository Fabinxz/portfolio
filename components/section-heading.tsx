"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={`text-center space-y-3 md:space-y-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          <div className="relative px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-dark-bg-secondary/70 backdrop-blur-sm border border-brand-blue-700/50 text-brand-blue-300 mb-2">
            <span className="relative z-10">{subtitle}</span>
            {/* Brilho sutil no pill */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue-500/10 to-brand-cyan-500/10 opacity-50 animate-pulse"></span>
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary text-glow-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="w-20 md:w-24 h-1 bg-gradient-to-r from-brand-blue-500 to-brand-cyan-500 rounded-full mx-auto mt-4 md:mt-6"
        initial={{ opacity: 0, width: 0 }} // Anima a largura
        whileInView={{ opacity: 1, width: "5rem" }} // Ajuste o valor de 'width' conforme o tamanho (w-20 ou w-24)
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  )
}