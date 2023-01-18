import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="lg:mx-auto lg:max-w-5xl lg:container min-h-screen border">
        {children}
      </body>
    </html>
  );
}
