import { METADATA } from "@/shared/constants/metadata"
import "./globals.css"

export const metadata = METADATA

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
