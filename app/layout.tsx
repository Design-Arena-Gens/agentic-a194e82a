import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'کلینیک دندانپزشکی دکتر رضایی | بهترین خدمات دندانپزشکی',
  description: 'کلینیک دندانپزشکی دکتر رضایی با بیش از 20 سال سابقه، ارائه‌دهنده خدمات ایمپلنت، ارتودنسی، لمینیت و زیبایی دندان با جدیدترین تکنولوژی',
  keywords: 'دندانپزشکی، ایمپلنت، ارتودنسی، لمینیت، بلیچینگ، کلینیک دندانپزشکی تهران',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
