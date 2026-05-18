import type { Metadata } from 'next'
import { Montserrat, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ConsoleBrand } from '@/components/console-brand'
import { CommandPalette } from '@/components/command-palette'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Prakhar Singh — AI & Platform Engineer',
    template: '%s · Prakhar Singh',
  },
  description:
    'Building software for the energy transition. AI & Backend Engineer at Electric Miles. 30+ EV charger integrations, OCPP/OCPI specialist, Claude AI integration.',
  keywords: [
    'EV charging', 'OCPP', 'energy infrastructure',
    'AI integration', 'full-stack engineer', 'Electric Miles',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Prakhar Singh',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text-primary">
        <ConsoleBrand />
        <CommandPalette />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
