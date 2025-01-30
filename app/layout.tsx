import type { Metadata } from "next";
import { Ovo as OvoFont, Outfit as OutfitFont, Exo_2 as Exo_2Font, Kanit as KanitFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

const Kanit = KanitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Exo_2 = Exo_2Font({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} ${Kanit.className} ${Ovo.className} ${Exo_2.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
