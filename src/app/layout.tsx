import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Borealis Prototyping System",
  description: "A modern prototyping environment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
