"use client";

import { useEffect } from "react";

const REDIRECT_URL = "https://raajveer.vercel.app/";

export default function Page() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-forest-900">
      <p className="text-forest-300">
        Redirecting...{" "}
        <a href={REDIRECT_URL} className="underline">
          click here
        </a>
      </p>
    </main>
  );
}
