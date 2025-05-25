"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }) // Iniciar fora da tela
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringLinkOrButton, setIsHoveringLinkOrButton] = useState(false);
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true) // Tornar visível no primeiro movimento

      // Verificar se está sobre um link ou botão
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor-hoverable="true"]')) {
        setIsHoveringLinkOrButton(true);
      } else {
        setIsHoveringLinkOrButton(false);
      }
    }

    const handleMouseLeaveScreen = () => {
        // Esconder o cursor quando sai da janela do navegador.
        // Pequeno delay para evitar que desapareça ao mover rápido para bordas.
        setTimeout(() => setIsVisible(false), 100);
    }
    const handleMouseEnterScreen = () => {
        setIsVisible(true);
    }


    window.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseleave", handleMouseLeaveScreen);
    document.documentElement.addEventListener("mouseenter", handleMouseEnterScreen);


    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeaveScreen);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnterScreen);
    }
  }, [isMobile, isVisible]) // Adicionado isVisible como dependência

  if (isMobile) return null; // Não renderizar em dispositivos móveis

  const mainCursorSize = isHoveringLinkOrButton ? 36 : 28;
  const mainCursorOpacity = isHoveringLinkOrButton ? 0.2 : 0.3;
  const dotOpacity = isHoveringLinkOrButton ? 0.5 : 1;


  return (
    <>
      {/* Cursor principal maior e com blend mode */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
            width: mainCursorSize,
            height: mainCursorSize,
            backgroundColor: 'hsl(var(--primary))', // Usa a cor primária (azul)
            mixBlendMode: 'difference', // Mantém o efeito de inversão sobre a cor primária
        }}
        animate={{
          x: mousePosition.x - mainCursorSize / 2,
          y: mousePosition.y - mainCursorSize / 2,
          opacity: isVisible ? mainCursorOpacity : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.1 }}
      />

      {/* Ponto central menor e mais opaco */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-foreground pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - (1.5 / 2),
          y: mousePosition.y - (1.5 / 2),
          opacity: isVisible ? dotOpacity : 0,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 300, mass: 0.1 }}
      />
    </>
  )
}