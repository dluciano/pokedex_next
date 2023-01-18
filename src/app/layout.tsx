import localFont from "@next/font/local";
import { Montserrat } from "@next/font/google";
import "./globals.css";

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
  return (
    <html lang="en" className={`${montserrat.variable} ${din.variable}`}>
      <head />
      <body className="lg:mx-auto lg:max-w-5xl lg:container min-h-screen border">
        {children}
      </body>
    </html>
  );
}
