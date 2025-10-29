import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Abdullah Al Mamun - Full-Stack Developer",
  description:
    "Professional portfolio of Abdullah Al Mamun, specialized in MERN Stack, Next.js, and modern web development.",
  keywords: [
    "MERN",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Full-Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
