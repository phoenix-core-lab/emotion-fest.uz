import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script"; // Импортируем next/script
import "./globals.sass";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "emotion fest",
  description: "made for emotion fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoico.svg" />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(100373346, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
              });
            `,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/100373346" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
