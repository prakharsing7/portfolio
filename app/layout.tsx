import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ConsoleBrand } from '@/components/console-brand'
import { CommandPalette } from '@/components/command-palette'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import '@/styles/globals.css'

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prakharsingh.dev'),
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
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="bg-bg text-text-primary">
        <ConsoleBrand />
        <CommandPalette />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
