"use client";

import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import CardSmall from "../components/CardSmall";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small timeout to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 40);

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
    opacity: isLoaded ? 0.1 : 0,
    transform: `translateY(${isLoaded ? 0 : "30px"})`,
    filter: `blur(${isLoaded ? 0 : "2.2rem"})`,
    transition: `opacity 1.6s ease ${delay}s, transform 1.6s ease ${delay}s, filter 1.8s ease ${delay}s`,
  });

  return (
    <div className="parentContainer w-full m-0 p-0 overflow-hidden flex h-screen">
      <div className="interContainer max-w-[24rem] sm:max-w-[35rem] lg:max-w-[60rem] flex flex-col space-y-[1.5rem] mx-auto justify-center">
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
          <div className="lg:flex hidden" style={getAnimationStyle(0.1)}>
            <CardSmall
              link="/work"
              bg="hover:bg-[#001e17]"
              border="hover:border-gray-600"
              typeOf="work"
            />
          </div>
          <div className="lg:hidden flex" style={getAnimationStyle(0.1)}>
            <CardSmall
              link="/works"
              bg="hover:bg-[#001e17]"
              border="hover:border-gray-600"
              typeOf="work"
            />
          </div>
          <div style={getAnimationStyle(0.15)}>
            <CardSmall
              link="/socials"
              bg="hover:bg-[#003738]"
              border="hover:border-gray-600"
              typeOf="social"
            />
          </div>
        </div>
        <div className="siblingsContainer w-full flex flex-col justify-start space-y-[2rem] cursor-default">
          <div
            className="text-[1.5rem] font-bold text-start text-white underline"
            style={getAnimationStyle(0.2)}
          >
            Projects
          </div>
          <div className="workContainer flex flex-col space-y-0 items-start align-middle">
            <div className="flex flex-row w-full space-x-[0.8rem] sm:space-x-[1rem]">
              <div className="flex flex-col items-center pt-[0.5rem] shrink-0">
                <div className="w-[0.5rem] h-[0.5rem] border-2 shrink-0 border-white bg-transparent rounded-full" style={getAnimationStyle(0.2)}></div>
                <div
                  className="w-[0.1rem] rounded-full h-full flex shrink-0 bg-white"
                  style={getAnimationOpacity(0.25)}
                ></div>
              </div>
              <div
                className="workItem flex flex-col space-y-[0.5rem] pb-[3rem]"
                style={getAnimationStyle(0.25)}
              >
                <div
                  className="workContent flex flex-col text-start"
                >
                  <div className="flex flex-row space-x-[0.8rem] sm:space-x-[1rem] items-start" style={getAnimationStyle(0.3)}>
                    <div className="flex flex-col items-start space-y-[0rem]">
                      <div className="workTitle sm:text-[1rem] lg:text-[1.1rem] font-semibold text-white">
                        SplitThat - AI enabled splitting for Splitwise
                      </div>
                      <span className="text-[0.75rem] sm:text-[0.75rem] lg:text-sm">
                        &#123; GeminiAPI, TesseractOCR, Next.js, SplitwiseAPI
                        &#125;
                      </span>
                    </div>
                    <div
                      className="self-start px-[0.6rem] py-[0.35rem] hidden sm:flex items-center sm:text-[0.55rem] lg:text-[0.6rem] border-white border-2 rounded-full transition animate-pulse"
                      style={{ animationDuration: "4s" }}
                    >
                      currently building
                    </div>
                    <div
                      className="self-start px-[0.6rem] py-[0.35rem] flex sm:hidden items-center text-[0.55rem] border-white border-2 rounded-full transition animate-pulse"
                      style={{ animationDuration: "4s" }}
                    >
                      current
                    </div>
                  </div>
                  <div className="workDescription text-[0.9rem] sm:text-[0.8rem] lg:text-sm text-white mt-[0.7rem]" style={getAnimationStyle(0.35)}>
                    SplitThat, simply put, is a web application (for now) that
                    uses AI to split bills. The flow is simple: upload an image
                    of the bill, and the app will automatically detect the items
                    and their prices. The user can then write or speak a text
                    prompt about their split and the people involved from their
                    Splitwise group, and the app will automatically create the
                    split and upload it to Splitwise with one click! The app is
                    built using Next.js and uses the GeminiAPI for image
                    processing and TesseractOCR for text extraction.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full space-x-[1rem]">
              <div className="flex flex-col items-center pt-[0.5rem] shrink-0">
                <div className="w-[0.5rem] h-[0.5rem] bg-white shrink-0 rounded-full" style={getAnimationStyle(0.4)}></div>
              </div>
              <div
                className="workItem flex flex-col mt-[-0.9rem]"
                style={getAnimationStyle(0.45)}
              >
                <div>
                  <CardSmall
                    bg="hover:bg-[#1e4b39]"
                    border="hover:border-gray-600"
                    typeOf="prevProjects"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
