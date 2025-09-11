import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Le Sultan - L'art du kebab Réinventé | Fast Food Haut de Gamme Besançon",
  description: "Découvrez Le Sultan, restaurant turc haut de gamme à Besançon. L'art du kebab réinventé avec des ingrédients premium et des techniques innovantes.",
  icons: {
    icon: '/sultan-logo.JPG',
    shortcut: '/sultan-logo.JPG',
    apple: '/sultan-logo.JPG',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
