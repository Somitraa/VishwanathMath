import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishwanath Math",
  description: "Official website of Vishwanath Math",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for Gotu (heading) & Vesper Libre (paragraph) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gotu&family=Vesper+Libre:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
