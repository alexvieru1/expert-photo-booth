import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import Header from "../components/header";

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "eXpert Photobooth 360",
  description: "Cabină, oglindă, video 360",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
