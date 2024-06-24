import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import ClientOnly from "./client-only";
import Providers from "@/context/Providers";
import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });
const Layout = dynamic(() => import("@/section/layouts"));

export const metadata: Metadata = {
  title: "Namada Interface",
  description: "Namada Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              <Suspense>
                <Layout>{children}</Layout>
              </Suspense>
            </Providers>
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
