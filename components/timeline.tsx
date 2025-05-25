"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile" // Assumindo que o hook existe

// Dados da Experiência Profissional de Fábio Machado (Placeholders)
const experiences = [
  {
    title: "Desenvolvedor FullStack Pleno",
    company: "Soluções Tech Inovadoras Ltda.",
    period: "03/2022 - Presente",
    description:
      "Liderança técnica no desenvolvimento de aplicações web escaláveis usando React, Next.js e Node.js (NestJS). Responsável pela arquitetura de microsserviços, otimização de performance e mentoring de desenvolvedores juniores. Implementação de CI/CD com Docker e Kubernetes.",
    icon: <Briefcase className="h-5 w-5 text-brand-blue-300" />,
  },
  {
    title: "Desenvolvedor FullStack Júnior",
    company: "Web Creators Studio",
    period: "07/2020 - 02/2022",
    description:
      "Desenvolvimento e manutenção de e-commerces e plataformas SaaS utilizando JavaScript, TypeScript, React e Python (Django). Colaboração em equipes ágeis, participando ativamente do ciclo de vida completo dos projetos, desde o design até o deploy.",
    icon: <Briefcase className="h-5 w-5 text-brand-blue-300" />,
  },
  {
    title: "Estágio em Desenvolvimento Web",
    company: "Startup Visionária X",
    period: "01/2019 - 06/2020",
    description:
      "Suporte no desenvolvimento de interfaces com HTML, CSS e JavaScript (jQuery/React básico). Aprendizado prático em versionamento com Git, testes unitários e metodologias ágeis. Contribuição para a criação de landing pages e componentes de UI.",
    icon: <Briefcase className="h-5 w-5 text-brand-blue-300" />,
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div className="relative">
      {/* Linha vertical central (apenas para desktop) */}
      {!isMobile && (
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-brand-blue-700/30 via-brand-cyan-600/30 to-transparent z-0"></div>
      )}

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`relative z-10 flex items-start ${
              !isMobile && index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Ponto e Ícone na linha do tempo (apenas para desktop) */}
            {!isMobile && (
              <div className={`absolute left-1/2 top-1 -translate-x-1/2 transform ${index % 2 !== 0 ? "md:left-auto md:right-1/2 md:translate-x-1/2" : ""}`}>
                <div className="w-8 h-8 rounded-full bg-dark-bg-secondary border-2 border-brand-blue-600 flex items-center justify-center shadow-md">
                  {experience.icon || <Briefcase className="h-4 w-4 text-brand-blue-400" />}
                </div>
              </div>
            )}

            {/* Card da Experiência */}
            <div
              className={`w-full group md:w-[calc(50%-2rem)] ${
                !isMobile && index % 2 !== 0 ? "md:pl-0 md:pr-0" : "md:pl-0 md:pr-0"
              } ${isMobile ? 'ml-0' : (index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto') }`}
            >
              <div className="relative overflow-hidden rounded-xl bg-dark-bg-secondary/70 backdrop-blur-md border border-brand-blue-700/60 p-6 transition-all duration-300 hover:border-brand-blue-500/80 hover:shadow-xl hover:shadow-brand-blue-900/25">
                <div className="absolute -inset-px bg-gradient-to-br from-brand-blue-600/15 via-transparent to-brand-cyan-600/15 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10"></div>
                
                {/* Ícone para mobile, posicionado dentro do card */}
                {isMobile && (
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-brand-blue-600/20 border border-brand-blue-500/50 flex items-center justify-center shadow-md">
                     {experience.icon || <Briefcase className="h-5 w-5 text-brand-blue-300" />}
                  </div>
                )}

                <div className={isMobile ? "pl-14" : ""}>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-gradient-primary">{experience.title}</h3>
                    <p className="text-sm text-brand-blue-300/90 mb-1 font-medium">{experience.company}</p>
                    <p className="text-xs text-muted-foreground mb-3">{experience.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}