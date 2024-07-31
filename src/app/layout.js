import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
      </head>
      <body className={montserrat.className}>
        <Header/>{children}<Footer/>
        </body>
    </html>
  );
} 
