import "./globals.css";
import "./animatedblob.css";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Felix Ljungqvist",
  description: "Felix Ljungqvist personal portfolio.",
};

const AnimatedBlob = dynamic(() => import("@/components/AnimatedBlob"), {
  loading: () => <p>Loading...</p>,
});

const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
});

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
