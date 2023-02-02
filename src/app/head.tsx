import Script from "next/script";

export default function Head() {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7E2CEVR6RL"
        strategy="afterInteractive"
      />
      <Script async id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7E2CEVR6RL');`}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728445304550491"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <title>Pokedex - Pokemon Wikipedia</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Pokedex - pokemon wikipedia and reference"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
