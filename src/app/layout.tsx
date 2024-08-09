import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from 'flowbite-react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Odonto',
    template: '%s | Odonto',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <ThemeModeScript />
        <link
          rel="shortcut icon"
          href="/imgs/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body className={inter.variable} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
