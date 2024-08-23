// pages/_app.js
import "../src/app/globals.css";
import { useEffect, useState } from "react";
import { Inter as FontSans } from "next/font/google"
import Header from "@/components/header";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils"


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  })

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  // Close the navbar on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsActive(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
