import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <link rel="shortcut icon" href="/imgs/favicon.png" />
      </head>
      <body className={inter.variable} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
