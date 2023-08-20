import "./globals.css";
import "./landing.css";
import type { Metadata } from "next";

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
        <main className="container mx-auto max-w-screen-2xl py-5 px-5 flex justify-center flex-col h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
