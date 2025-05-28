import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "GameVroom",
  description: "postavte 5 pashalko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} antialiased dark`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
