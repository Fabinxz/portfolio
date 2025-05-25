"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast" // Assumindo que seu hook de toast está configurado
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implementar lógica de envio real (ex: API route, EmailJS, Formspree)
    // Por agora, simulamos um envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Responderei em breve.",
      variant: "default", // Ou um estilo de sucesso se você tiver
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-dark-bg-secondary/70 backdrop-blur-sm border border-brand-blue-700/50 p-6 md:p-8 transition-all duration-300 hover:border-brand-blue-500/70">
        <div className="absolute -inset-px bg-gradient-to-r from-brand-blue-500/15 to-brand-cyan-500/15 rounded-xl blur opacity-0 hover:opacity-100 transition duration-1000 hover:duration-200 -z-10"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Envie-me uma Mensagem</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Seu Nome</Label>
              <Input
                id="name"
                name="name"
                placeholder="João Silva"
                required
                className="bg-dark-bg-tertiary/50 border-brand-blue-800/60 focus:border-brand-blue-500 focus:ring-brand-blue-500/30 text-foreground"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Seu Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="joao.silva@exemplo.com"
                required
                className="bg-dark-bg-tertiary/50 border-brand-blue-800/60 focus:border-brand-blue-500 focus:ring-brand-blue-500/30 text-foreground"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Assunto</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Proposta de Projeto Freelance"
                required
                className="bg-dark-bg-tertiary/50 border-brand-blue-800/60 focus:border-brand-blue-500 focus:ring-brand-blue-500/30 text-foreground"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Sua Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Olá Fábio, gostaria de discutir..."
                rows={5}
                required
                className="bg-dark-bg-tertiary/50 border-brand-blue-800/60 focus:border-brand-blue-500 focus:ring-brand-blue-500/30 text-foreground"
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 hover:from-brand-cyan-500 hover:to-brand-blue-600 border-0 text-primary-foreground py-3 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}