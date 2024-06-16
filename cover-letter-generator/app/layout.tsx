import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Powerful Cover Letter Generator",
  description:
    "Craft compelling cover letters that land you interviews. Effortlessly tailor your content to each position and impress hiring managers. Get started today!",
  keywords: [
    "cover letter generator",
    "cover letter writing",
    "job application",
    "resume builder",
    "career",
    "interview",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
      <Toaster />
    </html>
  );
}
