import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Header from "../components/header";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "eXpert Photobooth 360",
  description:
    "Cabină foto, oglindă magică, și video booth 360 pentru evenimente de neuitat. Oferim servicii profesionale de fotografie și video pentru nunți, botezuri, petreceri corporate și alte evenimente speciale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
