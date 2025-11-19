import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageProvider"; // ✅ import your provider

export const metadata: Metadata = {
  title: "Vishwanath Math | शिवधाम विश्वनाथ मठ | Official Website",
  description:
    "Vishwanath Math – A sacred Shiv Dham featuring 1100 Shivlings, Sidh Giri Parvat, Gaushala, Rudra Peeth, Bel Van, and spiritual guidance by ShivRishi Acharya Manish Dwivedi Ji.",
  keywords: [
    "Vishwanath Math",
    "विश्वनाथ मठ",
    "Shiv Dham",
    "Shivling Temple",
    "Shiv Mandir Bhopal",
    "Sidh Giri Parvat",
    "Acharya Manish Dwivedi",
    "1100 Shivlings",
    "Gaushala",
    "Rudra Peeth",
    "Chiranjivi Temple",
  ],
  openGraph: {
    title: "Vishwanath Math – शिवधाम विश्वनाथ मठ",
    description:
      "Experience the divine spiritual center of Vishwanath Math with ancient Shivlings, meditation, Gaushala, Rudra Peeth, and guidance by Acharya Manish Dwivedi Ji.",
    url: "https://vishwanathmath.in",
    siteName: "Vishwanath Math",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishwanath Math – Shiv Dham",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwanath Math",
    description:
      "Official site of Vishwanath Math — A sacred center of Lord Shiva's devotion.",
    images: ["/og-image.jpg"],
  },
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
