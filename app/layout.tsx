import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster as SonnerToaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fábio Machado | Desenvolvedor FullStack',
  description: 'Portfólio de Fábio Machado, Desenvolvedor FullStack especializado em criar soluções web modernas e performáticas.',
  generator: 'Next.js',
  keywords: "Fábio Machado, Desenvolvedor FullStack, Portfólio, Web Development, React, Next.js, Node.js, TypeScript",
  authors: [{ name: "Fábio Machado" }],
  openGraph: {
    title: 'Fábio Machado | Desenvolvedor FullStack',
    description: 'Portfólio de Fábio Machado, Desenvolvedor FullStack especializado em criar soluções web modernas e performáticas.',
    url: 'https://www.fabio-machado.dev', // Substitua pela URL real do seu site
    siteName: 'Portfólio Fábio Machado',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // O comentário foi removido daqui para corrigir o erro de hidratação
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-dark-bg-primary text-foreground antialiased`}>
        {children}
        {/* Para notificações do form de contato */}
        <SonnerToaster richColors position="top-right" />
      </body>
    </html>
  )
}