const REDIRECT_URL = "https://raajveer.vercel.app/";

export const metadata = {
  title: "Raajveer Khattar",
  description: "Portfolio redirect to the updated site.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${REDIRECT_URL}`} />
        <link rel="canonical" href={REDIRECT_URL} />
        <meta name="robots" content="noindex, nofollow" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("${REDIRECT_URL}");`,
          }}
        />
      </head>
      <body>
        <main>
          <p>
            Redirecting to the updated site. If you are not redirected,
            {" "}
            <a href={REDIRECT_URL}>click here</a>.
          </p>
        </main>
      </body>
    </html>
  );
}
