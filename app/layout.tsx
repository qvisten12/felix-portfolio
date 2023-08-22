import Header from "@/components/Header";
import "./globals.css";
import "./landing.css";
import "./animatedblob.css";
import type { Metadata } from "next";
import AnimatedBlob from "@/components/AnimatedBlob";

export const metadata: Metadata = {
  title: "Felix Ljungqvist",
  description: "Felix Ljungqvist personal portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AnimatedBlob />
        <main className="container mx-auto max-w-screen-2xl px-5 flex justify-center flex-col h-screen z-10 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
