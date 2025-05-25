"use client";

import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

const personalInfo = {
  name: "Fábio Machado",
  title: "Desenvolvedor FullStack",
  email: "fabinxhard@gmail.com",
  linkedin: "https://www.linkedin.com/in/f%C3%A1bio-machado-03427a26a/",
  github: "https://github.com/fabinxz",
  resumeLink: "curriculo-fabio-machado.pdf",
  location: "Brasil",
  profileImage: "/fabio-machado-perfil.jpg", // <-- ATUALIZADO AQUI
};

// ... (restante do código do page.tsx permanece o mesmo) ...
// Copiei apenas a parte relevante para a mudança da imagem.
// O restante do arquivo que enviei anteriormente continua válido.

const projectsData = [
  {
    title: "Fittrack: Seu Painel de Controle Fitness Inteligente",
    description: "Uma aplicação web moderna e responsiva, desenvolvida para simplificar e otimizar o acompanhamento de treinos e progresso fitness.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS",],
    image: "/fitt.png?height=400&width=600&text=Projeto+Ecom",
    demoUrl: "http://fittrack-phi.vercel.app/",
    repoUrl: "https://github.com/Fabinxz/Fittrack",
  },
  {
    title: "Taskify: Seu Dashboard de Metas Pessoal e Intuitivo",
    description: "Um dashboard de acompanhamento de metas dinâmico e responsivo, projetado para ajudar usuários a organizar e visualizar seu progresso em objetivos diários, semanais, mensais e anuais.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: "/task.png?height=400&width=600&text=App+Produtivo",
    demoUrl: "https://taskify-fabinxz.vercel.app/",
    repoUrl: "https://github.com/Fabinxz/Taskify",
  },
  {
    title: "Clone da Página Principal do Valorant: Um Estudo de UI/Frontend",
    description: "Este projeto é uma recriação fiel da interface da página principal do popular jogo FPS tático, Valorant. Desenvolvido com foco na precisão visual e na replicação da experiência do usuário",
    tags: ["HTML", "JavaScript", "CSS"],
    image: "/vava.png?height=400&width=600&text=Dashboard+Dados",
    demoUrl: "valorant-fabinxz.vercel.app/",
    repoUrl: "https://github.com/Fabinxz/Valorant",
  },
];

const skillsData = [
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React.js / React Native", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Node.js (NestJS, Express)", level: 85 },
  { name: "Python (Flask, Django)", level: 75 },
  { name: "Bancos de Dados (SQL & NoSQL)", level: 80 },
  { name: "Docker & Contêineres", level: 70 },
  { name: "Cloud (AWS, Vercel)", level: 65 },
  { name: "Git & GitHub", level: 90 },
  { name: "HTML5 & CSS3 (Tailwind)", level: 95 },
  { name: "UX/UI (Figma Básico)", level: 60 },
];


export default function PortfolioFabioMachado() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav
        navItems={[
          { name: "Sobre", href: "#sobre" },
          { name: "Habilidades", href: "#habilidades" },
          { name: "Projetos", href: "#projetos" },
          { name: "Experiência", href: "#experiencia" },
          { name: "Contato", href: "#contato" },
        ]}
        siteName={personalInfo.name}
        resumeLink={personalInfo.resumeLink}
      />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue-600/80 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-brand-cyan-500/80 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          {/* Removendo o blob laranja e substituindo por um verde limão suave como teste, ou um azul/ciano mais sutil */}
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-lime-600/50 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          {/* Alternativa (se o verde limão ficar estranho): <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-blue-700/70 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div> */}
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-dark-bg-secondary/80 backdrop-blur-sm border border-brand-blue-500/40 mb-4 shadow-md">
                <span className="relative z-10 text-foreground">{personalInfo.title}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue-500/20 to-brand-cyan-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-foreground/90">Olá, eu sou</span>
              <span className="text-gradient-primary text-glow-primary">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              Eu crio experiências digitais excepcionais com código, criatividade e uma paixão por inovação e resultados.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button asChild className="relative overflow-hidden group bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 hover:from-brand-cyan-500 hover:to-brand-blue-600 border-0 text-primary-foreground px-8 py-3 text-lg shadow-lg hover:shadow-brand-blue-500/30 transition-shadow">
                <Link href="#projetos">
                  <span className="relative z-10 flex items-center">
                    Ver Projetos <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-blue-500 text-brand-blue-400 hover:bg-brand-blue-500/10 hover:text-brand-blue-300 px-8 py-3 text-lg shadow-sm hover:shadow-brand-blue-500/20 transition-all"
              >
                <Link href="#contato">
                 Entre em Contato
                </Link>
              </Button>
            </div>
            <div className="flex gap-3 pt-6 justify-center lg:justify-start">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                { href: personalInfo.resumeLink, icon: Download, label: "Baixar Currículo", download: true },
              ].map(item => (
                 <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" {...(item.download && { download: true })}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-11 h-11 bg-dark-bg-tertiary/60 hover:bg-brand-blue-600 text-muted-foreground hover:text-primary-foreground transition-all transform hover:scale-110"
                    aria-label={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-brand-blue-300/30 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue-300/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 md:py-32 relative bg-dark-bg-secondary">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-blue-700 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-brand-cyan-700 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Sobre Mim" subtitle="Minha trajetória e paixão por desenvolvimento" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-brand-blue-500/10 to-brand-cyan-500/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden border border-brand-blue-800/70 shadow-2xl">
                <img
                  src={personalInfo.profileImage} // Caminho já atualizado na constante
                  alt={`Foto de ${personalInfo.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2 bg-dark-bg-primary/50 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit border border-brand-blue-600/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-foreground/90">Disponível para novos desafios</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <GlassmorphicCard className="h-full">
                <p className="text-lg text-muted-foreground">
                  Olá! Sou Fábio Machado, um Desenvolvedor FullStack apaixonado por transformar ideias em realidade digital. Com um olhar atento para design e uma base sólida em tecnologias modernas, busco criar aplicações web que não apenas funcionem bem, mas que também proporcionem uma experiência de usuário memorável.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Minha jornada é impulsionada pela curiosidade e pelo desafio constante de aprender e aplicar novas ferramentas para construir soluções robustas, escaláveis e visualmente impactantes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 text-sm">
                  {[
                    { label: "Nome", value: personalInfo.name },
                    { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { label: "Localização", value: personalInfo.location },
                    { label: "Disponibilidade", value: "Aberto a Oportunidades", highlight: true },
                  ].map(item => (
                    <div key={item.label} className="space-y-0.5">
                      <div className="text-xs text-muted-foreground/80">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className={`font-medium ${item.highlight ? 'text-brand-blue-400' : 'text-foreground/90 hover:text-brand-blue-400'}`}>{item.value}</a>
                      ) : (
                        <div className={`font-medium ${item.highlight ? 'text-brand-blue-400' : 'text-foreground/90'}`}>{item.value}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild className="bg-brand-blue-600 hover:bg-brand-blue-700 text-primary-foreground px-6 py-2.5">
                    <a href={personalInfo.resumeLink} download target="_blank">
                      Baixar Currículo <Download className="ml-2 h-4 w-4"/>
                    </a>
                  </Button>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restante das seções (Habilidades, Projetos, Experiência, Contato, Footer) permanece igual ao envio anterior */}
      {/* ... */}
       <section id="habilidades" className="py-24 md:py-32 relative bg-dark-bg-primary">
         <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-cyan-700 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue-700 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <SectionHeading title="Minhas Habilidades" subtitle="Tecnologias e Ferramentas que Domino" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mt-16">
            {skillsData.map(skill => (
              <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="py-24 md:py-32 relative bg-dark-bg-secondary">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-brand-orange-600 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-blue-600 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <SectionHeading title="Projetos em Destaque" subtitle="Uma amostra do meu trabalho" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projectsData.map(project => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-24 md:py-32 relative bg-dark-bg-primary">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-brand-blue-700 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-cyan-700 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <SectionHeading title="Experiência Profissional" subtitle="Minha jornada no mercado" />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 md:py-32 relative bg-dark-bg-secondary">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-blue-600 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-brand-orange-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <SectionHeading title="Entre em Contato" subtitle="Vamos criar algo incrível juntos?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Minhas Informações</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Linkedin, label: "LinkedIn", value: personalInfo.linkedin.replace("https://www.", "").replace(/\/$/, ""), href: personalInfo.linkedin },
                  { icon: Github, label: "GitHub", value: personalInfo.github.replace("https://", ""), href: personalInfo.github },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 group/contact-item">
                    <div className="w-11 h-11 rounded-lg bg-dark-bg-tertiary/70 flex items-center justify-center border border-brand-blue-700/50 group-hover/contact-item:border-brand-blue-500 transition-colors">
                      <item.icon className="h-5 w-5 text-brand-blue-400 group-hover/contact-item:text-brand-blue-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground/80">{item.label}</div>
                      <a href={item.href} target={item.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-sm text-foreground/90 hover:text-brand-blue-400 transition-colors">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-brand-blue-800/40">
                <h4 className="text-lg font-medium mb-3 text-foreground">Status Atual</h4>
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-brand-lime-500 animate-pulse shadow-[0_0_10px_theme(colors.brand-lime.DEFAULT)]"></div>
                  <span className="text-sm text-muted-foreground">Disponível para projetos e novas oportunidades.</span>
                </div>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-blue-800/30 py-10 md:py-12 bg-dark-bg-primary">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="#home" className="font-bold text-xl group">
              <span className="text-gradient-primary group-hover:text-glow-primary transition-all">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-foreground/90 group-hover:text-foreground transition-colors">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-1.5">
              © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Criado com Next.js, Tailwind CSS e <span className="text-brand-blue-500">♥</span>
            </p>
          </div>
          <div className="flex gap-3">
             {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(item => (
                 <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-10 h-10 bg-dark-bg-tertiary/60 hover:bg-brand-blue-600 text-muted-foreground hover:text-primary-foreground transition-all transform hover:scale-110 hover:shadow-lg"
                    aria-label={item.label}
                  >
                    <item.icon className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
