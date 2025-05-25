"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile" // Assumindo que este hook já existe e funciona

interface NavItem {
  name: string;
  href: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  siteName: string;
  resumeLink: string;
}

export function FloatingNav({ navItems, siteName, resumeLink }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile() // Hook para verificar se é mobile

  const siteFirstName = siteName.split(" ")[0];
  const siteLastName = siteName.split(" ").slice(1).join(" ");

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o nav um pouco antes, ou imediatamente se for mobile
      if (window.scrollY > 50 || isMobile) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    // Garante que a nav seja visível no mobile desde o início
    if (isMobile) {
        setIsVisible(true);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevenir comportamento padrão
    const targetId = e.currentTarget.hash;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const navClasses = isMobile
  ? "fixed top-0 left-0 right-0 z-50" // Ocupar topo inteiro no mobile
  : `fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`;

  const navMotionProps = isMobile
  ? { initial: { y: 0 }, animate: { y: 0 } } // Sem animação de entrada no mobile para visibilidade imediata
  : { initial: { y: -100 }, animate: { y: isVisible ? 0 : -100 } };


  return (
    <>
      <motion.div
        className={navClasses}
        initial={navMotionProps.initial}
        animate={navMotionProps.animate}
        transition={{ duration: 0.3 }}
      >
        <div className={`relative px-4 py-3 ${isMobile ? 'rounded-b-xl' : 'rounded-full'} bg-dark-bg-secondary/80 backdrop-blur-md border-b ${isMobile ? 'border-brand-blue-700/50' : 'border-brand-blue-700/50'} shadow-lg`}>
          <div className={`absolute -inset-0.5 ${isMobile ? 'rounded-b-xl' : 'rounded-full'} bg-gradient-to-r from-brand-blue-500/20 to-brand-cyan-500/20 blur opacity-50`}></div>

          <div className="relative flex items-center justify-between w-full container mx-auto px-0 sm:px-4">
            <Link href="/" className="font-bold text-lg shrink-0">
              <span className="text-gradient-primary">{siteFirstName}</span>
              <span className="text-foreground">{siteLastName}</span>
            </Link>

            {isMobile ? (
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/70 hover:text-brand-blue-400 hover:bg-brand-blue-500/20"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            ) : (
              <nav className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-1 text-sm font-medium text-muted-foreground hover:text-brand-blue-300 transition-colors"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  size="sm"
                  className="ml-2 bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 hover:from-brand-cyan-600 hover:to-brand-blue-700 border-0 text-primary-foreground"
                >
                  <a href={resumeLink} download target="_blank">
                    Currículo <Download className="ml-1.5 h-4 w-4"/>
                  </a>
                </Button>
              </nav>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-dark-bg-primary/95 backdrop-blur-md pt-20 ${isOpen ? "block" : "hidden"}`} // pt-20 para dar espaço para o header fixo
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)} // Fechar ao clicar fora
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full space-y-4"
            initial={{ y: -20 }}
            animate={{ y: isOpen ? 0 : -20 }}
            onClick={(e) => e.stopPropagation()} // Prevenir fechar ao clicar dentro do menu
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-3 text-2xl font-medium text-foreground hover:text-brand-blue-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="mt-6 bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 hover:from-brand-cyan-600 hover:to-brand-blue-700 border-0 text-primary-foreground px-8 py-3"
            >
              <a href={resumeLink} download target="_blank">
                Baixar Currículo <Download className="ml-2 h-5 w-5"/>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}