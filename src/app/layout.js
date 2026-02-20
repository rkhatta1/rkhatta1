import "./globals.css";

export const metadata = {
  title: "Raajveer Khattar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#051F20] text-[#DAF1DE] antialiased">{children}</body>
    </html>
  );
}
