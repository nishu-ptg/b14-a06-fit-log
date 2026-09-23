import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "FitLog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${oswald.variable} ${inter.variable} `}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
