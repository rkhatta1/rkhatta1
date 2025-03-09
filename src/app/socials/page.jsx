"use client";
import React, { useState, useEffect } from "react";
import CardSmall from "../components/CardSmall";
import {
  MdOutlineEmail,
  MdOutlinePhoneInTalk,
  MdContentCopy,
  MdCheck,
} from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Socials = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  useEffect(() => {
    // Small timeout to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 20);
    return () => clearTimeout(timer);
  }, []);
  // Animation style creator function
  const getAnimationStyle = (delay = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: `translateY(${isLoaded ? 0 : "30px"})`,
    filter: `blur(${isLoaded ? 0 : "2.2rem"})`,
    transition: `opacity 1.6s ease ${delay}s, transform 1.6s ease ${delay}s, filter 1.8s ease ${delay}s`,
  });
  const getAnimationOpacity = (delay = 0) => ({
    opacity: isLoaded ? 0.2 : 0,
    transform: `translateY(${isLoaded ? 0 : "30px"})`,
    filter: `blur(${isLoaded ? 0 : "2.2rem"})`,
    transition: `opacity 1.6s ease ${delay}s, transform 1.6s ease ${delay}s, filter 1.8s ease ${delay}s`,
  });
  // Copy to clipboard function
  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className="parentContainer flex flex-col w-full h-screen mx-auto justify-center">
      <div
        className="siblingsContainer flex flex-col sm:max-w-[35rem] lg:max-w-[60rem] mx-auto space-y-[1rem]"
      >
        <div className="flex flex-col w-full justify-center space-y-[2rem]">
          <div className="items-start flex flex-row w-full space-x-[1rem]">
            <div style={getAnimationStyle(0)}>
              <CardSmall
                link="/"
                bg="hover:bg-[#290028]"
                border="hover:border-gray-600"
                typeOf="home"
              />
            </div>
              <div style={getAnimationStyle(0.05)}>
              <CardSmall
                imageSrc="https://rkhatta1.github.io/rkhatta1/Me-Portfolio.png"
                link="/about"
                bg="hover:bg-[#513e00]"
                border="hover:border-gray-600"
                typeOf="image"
              />
              </div>
            <div style={getAnimationStyle(0.1)}>
              <CardSmall
                link="/projects"
                bg="hover:bg-[#001e17]"
                border="hover:border-gray-600"
                typeOf="project"
              />
              </div>
              <div className="lg:flex hidden" style={getAnimationStyle(0.15)}>
            <CardSmall
              link="/work"
              bg="hover:bg-[#001e17]"
              border="hover:border-gray-600"
              typeOf="work"
            />
          </div>
          <div className="lg:hidden flex" style={getAnimationStyle(0.15)}>
            <CardSmall
              link="/works"
              bg="hover:bg-[#001e17]"
              border="hover:border-gray-600"
              typeOf="work"
            />
          </div>
          </div>
          <div
            className="childContainer w-full flex flex-col sm:flex-row flex-1 max-w-full sm:max-w-[50%] space-y-[2rem] sm:space-y-0 sm:space-x-[2rem] lg:space-x-[5rem]"
            style={getAnimationStyle(0.2)}
          >
            <div className="title flex flex-col space-y-[1rem] items-start w-full">
              <div className="underline underline-offset-4 cursor-default">
                <p className="text-[1.2rem] lg:text-[1.5rem] font-semibold">Contact Information</p>
              </div>
              <div className="flex flex-col space-y-[0.6rem]">
                <div className="flex flex-row space-x-2 text-md group relative">
                  <span className="mt-[0.2rem]">
                    <MdOutlineEmail />
                  </span>
                  <span
                    onClick={() =>
                      copyToClipboard(
                        "khattarraajveer@gmail.com",
                        setCopiedEmail
                      )
                    }
                    onMouseEnter={() => setShowEmailTooltip(true)}
                    onMouseLeave={() => setShowEmailTooltip(false)}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    khattarraajveer@gmail.com
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {copiedEmail ? (
                        <MdCheck className="text-green-500" />
                      ) : (
                        <MdContentCopy className="text-gray-400" size={16} />
                      )}
                    </span>
                    {showEmailTooltip && !copiedEmail && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
                        Click to copy!
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                      </div>
                    )}
                    {copiedEmail && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-600 text-white text-sm rounded shadow-lg whitespace-nowrap">
                        Copied!
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-green-600"></div>
                      </div>
                    )}
                  </span>
                </div>
                <div className="flex flex-row space-x-2 text-md group relative">
                  <span className="mt-[0.25rem]">
                    <MdOutlinePhoneInTalk />
                  </span>
                  <span
                    onClick={() =>
                      copyToClipboard("+1(623)755-3499", setCopiedPhone)
                    }
                    onMouseEnter={() => setShowPhoneTooltip(true)}
                    onMouseLeave={() => setShowPhoneTooltip(false)}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    +1(623)755-3499
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {copiedPhone ? (
                        <MdCheck className="text-green-500" />
                      ) : (
                        <MdContentCopy className="text-gray-400" size={16} />
                      )}
                    </span>
                    {showPhoneTooltip && !copiedPhone && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
                        Click to copy!
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                      </div>
                    )}
                    {copiedPhone && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-600 text-white text-sm rounded shadow-lg whitespace-nowrap">
                        Copied!
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-green-600"></div>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
            {/* Divider line - hidden on mobile, visible on sm and up */}
            <div className='flex w-full h-[0.1rem] sm:w-[0.1rem] rounded-full sm:h-full shrink-0 bg-white' style={getAnimationOpacity(0.25)}></div>
            <div
              className="aboutPara items-start flex flex-col p-0 m-0 space-y-[1rem] flex-1 sm:max-w-[50%]"
              style={getAnimationStyle(0.3)}
            >
              <div className="underline underline-offset-4 cursor-default">
                <p className="text-[1.2rem] lg:text-[1.5rem] font-semibold">Socials</p>
              </div>
              <div className="flex flex-row space-x-[1.5rem]">
                <a
                  className="hover:scale-110 transition duration-200"
                  href="https://github.com/rkhatta1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-[1.8rem] text-white" />
                </a>
                <a
                  className="hover:scale-110 transition duration-200"
                  href="https://www.linkedin.com/in/raajveer-khattar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-[1.8rem] text-white" />
                </a>
                <a
                  className="hover:scale-110 transition duration-200"
                  href="https://x.com/raajveerkhattar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-[1.8rem] text-white" />
                </a>
                <a
                  className="hover:scale-110 transition duration-200"
                  href="https://www.instagram.com/raajveerkhattar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[1.8rem] text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Socials;