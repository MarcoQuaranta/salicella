import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caseificio Salicella - Mozzarelle Fresche e Prodotti Caseari Artigianali",
  description: "Dal 1952 produciamo mozzarelle fresche e prodotti caseari artigianali seguendo la tradizione campana. Spedizione in tutta Italia con garanzia di freschezza.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
