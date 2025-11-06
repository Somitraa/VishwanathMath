import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageProvider"; // ✅ import your provider

export const metadata: Metadata = {
  title: "Vishwanath Math",
  description: "Official website of Vishwanath Math",
  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gotu&family=Vesper+Libre:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* ✅ Wrap everything in LanguageProvider */}
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
