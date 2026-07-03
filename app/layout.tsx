import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Talha Tahir - Freelance Developer | Landing Pages, AI Chatbots & Automation',
  description: 'Talha Tahir (M. Talha Tahir) - Freelance developer specializing in landing pages, AI chatbots, and business automation for small businesses. Also building SaaS applications.',
  keywords: ['freelance developer', 'landing pages', 'AI chatbots', 'business automation', 'SaaS'],
  authors: [{ name: 'Talha Tahir' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talhatahjir.com',
    siteName: 'Talha Tahir - Freelance Developer',
    title: 'Talha Tahir - Freelance Developer | Landing Pages, AI Chatbots & Automation',
    description: 'Talha Tahir (M. Talha Tahir) - Freelance developer specializing in landing pages, AI chatbots, and business automation for small businesses.',
    images: [
      {
        url: 'https://talhatahjir.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Talha Tahir - Freelance Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talha Tahir - Freelance Developer',
    description: 'Specializing in landing pages, AI chatbots, and business automation.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
