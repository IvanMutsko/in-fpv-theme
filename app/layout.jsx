import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "In FPV theme",
  description: "Все про тему FPV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
