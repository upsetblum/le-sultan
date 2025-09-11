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
  keywords: "kebab, restaurant turc, Besançon, halal, livraison, Uber Eats, Deliveroo, cuisine turque, fast food premium",
  authors: [{ name: "Le Sultan" }],
  creator: "Le Sultan",
  publisher: "Le Sultan",
  icons: {
    icon: '/sultan-logo.JPG',
    shortcut: '/sultan-logo.JPG',
    apple: '/sultan-logo.JPG',
  },
  openGraph: {
    title: "Le Sultan - L'art du kebab Réinventé",
    description: "Restaurant turc haut de gamme à Besançon. Kebab premium avec ingrédients d'exception et techniques innovantes. Commandez sur Uber Eats et Deliveroo.",
    url: 'https://le-sultan.vercel.app',
    siteName: 'Le Sultan Berliner',
    images: [
      {
        url: '/IMG_9392.JPG',
        width: 1200,
        height: 630,
        alt: 'Le Sultan - Restaurant turc premium à Besançon',
      },
      {
        url: '/sultan-logo.JPG',
        width: 400,
        height: 400,
        alt: 'Le Sultan Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Le Sultan - L'art du kebab Réinventé",
    description: "Restaurant turc haut de gamme à Besançon. Kebab premium avec ingrédients d'exception. Commandez maintenant !",
    images: ['/IMG_9392.JPG'],
    creator: '@lesultan',
    site: '@lesultan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
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
