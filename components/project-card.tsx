"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, Image as ImageIcon } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string // Tornar imagem opcional
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group h-full" // Adicionado h-full para garantir que o card ocupe o espaço do grid
    >
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-xl bg-dark-bg-tertiary/60 backdrop-blur-sm border border-brand-blue-800/70 transition-all duration-300 group-hover:border-brand-blue-500/80 group-hover:shadow-2xl group-hover:shadow-brand-blue-900/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Efeito de brilho sutil no hover do card */}
        <div className="absolute -inset-px bg-gradient-to-br from-brand-blue-600/20 via-transparent to-brand-cyan-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10"></div>

        <div className="relative overflow-hidden h-48 md:h-56">
          {/* Overlay sutil na imagem no hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-brand-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          {image && image !== "/placeholder.svg?height=400&width=600" ? (
            <img
              src={image}
              alt={`Preview do projeto ${title}`}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-105" : "scale-100"}`}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-dark-bg-secondary flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
            </div>
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient-primary">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-dark-bg-secondary border-brand-blue-700/50 hover:bg-brand-blue-700/30 text-brand-blue-300 text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-auto pt-4 border-t border-brand-blue-800/50 space-y-3 sm:space-y-0">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-brand-blue-300 hover:bg-brand-blue-500/20 w-full sm:w-auto" asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Código
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 hover:from-brand-cyan-500 hover:to-brand-blue-600 border-0 text-primary-foreground w-full sm:w-auto"
              asChild
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Demo ao Vivo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Indicador de hover sutil no canto */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className={`w-2.5 h-2.5 rounded-full ${isHovered ? "bg-brand-blue-500" : "bg-muted-foreground/50"} transition-colors duration-300 animate-pulse`}
          ></div>
        </div>
      </div>
    </motion.div>
  )
}