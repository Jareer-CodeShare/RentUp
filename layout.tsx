import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ['700', '300', '400']
});

export const metadata: Metadata = {
  title: "RentUp | Rental Cars",
  description: "The ultimate Rental cars service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
