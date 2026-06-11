import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AlumiVetro | Esquadrias de Alumínio e Vidros",
  description: "Especializada em fabricação e instalação de esquadrias de alumínio e vidros. Atendemos Paranavaí e região. Portas, janelas, fachadas e mais.",
  keywords: ["esquadrias de alumínio", "portas de alumínio", "janelas", "vidros", "Paranavaí", "AlumiVetro"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
