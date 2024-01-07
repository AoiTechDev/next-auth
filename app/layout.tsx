'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session | null
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
