import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Head from "next/head"
import Navbar from "@/components/Navbar"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ali Ozzaim",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4JTR5CF1TC"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4JTR5CF1TC');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
