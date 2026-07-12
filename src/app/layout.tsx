import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORF Studios",
  description: "Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}