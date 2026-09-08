import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bagel_Fat_One, Bungee, Fredoka } from "next/font/google";
import "./globals.css";

const display = Bagel_Fat_One({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Fredoka({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ride for Karma",
  description:
    "A 100 km charity bike ride raising money for Karma the cat’s hyperthyroidism treatment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${bungee.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
