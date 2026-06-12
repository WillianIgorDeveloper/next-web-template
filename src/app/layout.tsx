import { METADATA } from "@/shared/constants/metadata"
import { GlobalProvider } from "@/contexts/_global"
import "./globals.css"

export const metadata = METADATA

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}
