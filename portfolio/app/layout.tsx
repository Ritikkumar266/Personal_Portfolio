import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritik Kumar - Full Stack Developer",
  description: "Full Stack Developer specializing in MERN stack, Next.js, Blockchain, and IoT. Building modern web experiences with cutting-edge technologies.",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "React", "Node.js", "Blockchain", "IoT", "Web Development"],
  authors: [{ name: "Ritik Kumar" }],
  openGraph: {
    title: "Ritik Kumar - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, Next.js, Blockchain, and IoT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
