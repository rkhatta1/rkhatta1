import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raajveer Khattar",
  description: "Portfolio website for the man, the myth, the legend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${geistMono.variable} antialiased overflow-y-hidden`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}