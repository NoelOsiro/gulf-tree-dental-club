import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gulf Tree Implant Centre Dental Club',
  description: 'A community for dental professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="bg-background border-b">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/events" className="hover:underline">Events</Link></li>
                <li><Link href="/news" className="hover:underline">News</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
              <ThemeToggle />
              <MobileMenu />
            </nav>
          </header>
          <main>{children}</main>
          <footer className="bg-muted mt-8">
            <div className="container mx-auto px-4 py-8">
              <p>&copy; {new Date().getFullYear()} Gulf Tree Implant Centre Dental Club. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )

}