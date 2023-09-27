import './globals.css';
import { Lexend } from 'next/font/google';
import {Header} from "@/layouts/header";
import React from "react";
import {Footer} from "@/layouts/footer";

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
          <div className="main-layout">
              <Header/>
            <main className="main">
              {children}
            </main>
            <Footer/>
          </div>
      </body>
    </html>
  )
}
