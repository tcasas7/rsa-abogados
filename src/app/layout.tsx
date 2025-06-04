import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import  DarkModeBlocker  from "@/components/DarkModeBlocker";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RSA & Asociados",
  description: "Especialistas en Derecho de Familia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={lora.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Navbar />
        <div>{children}</div>
        <DarkModeBlocker />
      </ThemeProvider>
      </body>
    </html>
  );
}
