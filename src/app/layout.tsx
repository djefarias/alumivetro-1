import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
  title: "AlumiVetro | Esquadrias de Alumínio em Paranavaí PR",
  description: "Especializada em esquadrias de alumínio, portas, janelas e fachadas em Paranavaí e noroeste do Paraná. Orçamento sem compromisso.",
  keywords: [
    "esquadrias de alumínio Paranavaí",
    "portas de alumínio noroeste PR",
    "janelas de alumínio Paranavaí",
    "brises soleil Paranavaí",
    "fachadas de alumínio noroeste PR",
    "instalação de esquadrias Paranavaí",
    "AlumiVetro",
    "serralheria Paranavaí",
    "vidros temperados Paranavaí",
    "esquadrias sob medida noroeste PR",
  ],
  openGraph: {
    title: "AlumiVetro | Esquadrias de Alumínio em Paranavaí PR",
    description: "Esquadrias, brises e estruturas de alumínio sob medida. Equipe própria, materiais certificados.",
    type: "website",
    locale: "pt_BR",
    siteName: "AlumiVetro",
  },
}

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
