import localFont from "@next/font/local";
import { Montserrat } from "@next/font/google";
import { NavBar } from "./components";
import "./globals.css";
import styles from "./layout.module.css";

//  @see: https://beta.nextjs.org/docs/optimizing/fonts#local-fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

//  @see: https://beta.nextjs.org/docs/optimizing/fonts#local-fonts
const din = localFont({
  src: "../../public/fonts/DIN Alternate Medium.otf",
  variable: "--font-din",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerClass ="lg:mx-auto lg:max-w-5xl lg:container";
  return (
    <html lang="en" className={`${montserrat.variable} ${din.variable}`}>
      <head />
      <body>
        <header className="w-full bg-pokeGray3">
          <NavBar className={`${containerClass}`}/>
        </header>
        <main className={`${containerClass} bg-white ${styles.main}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
