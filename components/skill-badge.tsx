"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number // 0-100
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-dark-bg-secondary/70 backdrop-blur-sm border border-brand-blue-700/50 p-5 md:p-6 h-full transition-all duration-300 group-hover:border-brand-blue-500/70 group-hover:shadow-lg group-hover:shadow-brand-blue-900/20">
        <div className="absolute -inset-px bg-gradient-to-br from-brand-blue-600/15 via-transparent to-brand-cyan-600/15 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>

        <div className="relative text-center">
          <div className="mb-3 font-semibold text-base md:text-lg text-foreground group-hover:text-gradient-primary">{name}</div>

          <div className="relative h-2.5 w-full bg-dark-bg-tertiary rounded-full overflow-hidden border border-brand-blue-800/50">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-xs md:text-sm text-muted-foreground">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}