"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import FortuneCookie from "@/components/FortuneCookie";
import { useState, useEffect } from "react";

export default function LuckPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = ["/intact.png", "/broken.png", "/pfp.jpg"];
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded === images.length) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === images.length) {
          setIsLoading(false);
        }
      };
      img.src = src;
    });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#051F20]">
        <img
          src="/intact.png"
          alt="Loading..."
          className="w-12 h-12 animate-spin"
          style={{ animationDuration: "1s" }}
        />
      </div>
    );
  }

  return (
    <main className="h-screen overflow-hidden flex flex-col-reverse items-center justify-center p-8 font-sans">
      <div className="max-w-md absolute bottom-10">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-forest-600 shrink-0">
            <img
              src="/pfp.jpg"
              alt="Raajveer Khattar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="font-serif text-2xl md:text-3xl text-forest-100 tracking-normal">
              Raajveer Khattar
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-row justify-start items-center gap-3">
                <a
                  href="https://github.com/rkhatta1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-forest-100 hover:text-forest-300 transition-colors"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/raajveer-khattar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-forest-100 hover:text-forest-300 transition-colors"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/raajveerkhattar/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-forest-100 hover:text-forest-300 transition-colors"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
              <span className="text-forest-100/40">•</span>
              <a
                href="https://drive.google.com/file/d/1OvmDsZ982hR7OyG6IVBEQhRY9s8fOHsg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-0 text-forest-100 rounded font-light text-sm tracking-wide hover:text-forest-300 transition-colors"
              >
                Resume
              </a>
              <span className="text-forest-100/40">•</span>
              <a
                href="https://raajveer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-0 text-forest-100 rounded font-light text-sm tracking-wide hover:text-forest-300 transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <FortuneCookie />
    </main>
  );
}
