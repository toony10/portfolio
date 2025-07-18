import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});


export const metadata: Metadata = {
  title: "Anton - Portfolio",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={ `${ outfit.className } antialiased leading-8 overflow-x-hidden scroll-smooth dark:bg-darkTheme dark:text-white` }
      >
        { children }
      </body>
    </html>
  );
}
