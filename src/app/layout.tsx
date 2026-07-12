import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORF Studios | Creative Agency in Mumbai",
  description:
    "ORF Studios is a creative agency specializing in Photography, Films, Branding, Website Development, Social Media Management and Digital Marketing.",

  keywords: [
    "ORF Studios",
    "Creative Agency",
    "Photography",
    "Videography",
    "Branding",
    "Website Development",
    "Digital Marketing",
    "Social Media Management",
    "Mumbai",
  ],

  authors: [{ name: "ORF Studios" }],
  creator: "ORF Studios",
  publisher: "ORF Studios",

  metadataBase: new URL("https://orf-studios.vercel.app"),

  openGraph: {
    title: "ORF Studios",
    description:
      "Creative Agency based in Mumbai. Photography, Films, Branding, Websites & Digital Marketing.",
    url: "https://orf-studios.vercel.app",
    siteName: "ORF Studios",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ORF Studios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ORF Studios",
    description:
      "Creative Agency based in Mumbai. Photography, Films, Branding & Websites.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}