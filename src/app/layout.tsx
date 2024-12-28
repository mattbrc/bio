import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import MonoFooter from "@/components/mono-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Wilder",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EEE7E3]`}>
        <Navbar />
        {children}
        <MonoFooter />
      </body>
    </html>
  );
}
