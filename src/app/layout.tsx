import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles.css";
import Navbar from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Camera CSI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <Navbar/>
          <main
            className="bg-cover bg-center h-screen p-4"
            style={{ backgroundImage: "url('/images/bg-aicam.png')" }}
          >
            <div className="bgmain relative  opacity-98 p-7 h-800" style={{ backgroundColor: '#D9D9D9', zIndex: 5 }}>

              {children}
          
            
            </div>
          </main>
        </body>
      
    </html>
  );
}
