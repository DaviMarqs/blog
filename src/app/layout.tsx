import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import { ScrollToTop } from "../components/scroll-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marques's Blog",
  description: "Marques's Blog",
};

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${karla.className} min-h-full p-4`}>
        <header className="max-w-prose mx-auto mb-8">
          <nav className="flex items-center justify-between">
            <Link className="flex flex-col no-underline" href="/">
              <span className="font-bold">Davi Marques</span>
              Software Engineer
            </Link>
            <div className="items-center flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-prose">{children}<ScrollToTop /></main>
      </body>
    </html>
  );
}
