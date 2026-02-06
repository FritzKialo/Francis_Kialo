import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google"; // original: Poppins:300,400,500,600,700 | Montserrat:300,400,500,600,700,800,900
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Francis Kialo | Creative Portfolio",
  description: "Portfolio of Francis Kialo - Content Writer, Freelancer, and Data Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
