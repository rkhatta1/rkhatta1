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
    <div className="parentContainer w-full m-0 p-0 overflow-hidden md:overflow-auto flex h-screen">
      <div className="interContainer max-w-[27rem] sm:p-0 sm:max-w-[42rem] lg:max-w-[65rem] sm:h-full flex flex-col space-y-[1.5rem] items-center h-full mx-auto justify-end sm:justify-center overflow-hidden">
        <div className="items-start flex flex-row w-full px-[2rem] space-x-[1rem]">
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
        <div className="siblingsContainer w-full flex flex-col justify-start space-y-[1rem] sm:space-y-0 cursor-default">
          <div
            className="text-[1.5rem] px-[2rem] font-bold text-start text-white underline"
            style={getAnimationStyle(0.2)}
          >
            Projects
          </div>
          <div className="workContainer flex flex-col overflow-auto max-sm:max-h-[35rem] p-[2rem] lg:space-y-0 items-start align-middle max-sm:pb-[10rem] scrollbar-hidden">
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
                  <div className="flex flex-row space-x-[0.8rem] md:space-x-[2rem] justify-between items-start" style={getAnimationStyle(0.3)}>
                    <a href="https://rkhatta1.github.io/edit0-landing/" target="_blank" className="cursor-pointer flex flex-col items-start space-y-[0rem]">
                      <div className="workTitle text-[1rem] lg:text-[1.1rem] font-semibold text-white">
                        Edit0 - An agentic multi-cam video editing copilot
                      </div>
                      <span className="text-[0.75rem] lg:text-sm">
                        &#123; Python, Docker, PostgreSQL + pgvector, GeminiAPI, apple/FastVLM, Google Cloud Vision
                        &#125;
                      </span>
                    </a>
                    <div
                      className="self-start mr-0 px-[0.6rem] py-[0.35rem] hidden lg:flex items-center sm:text-[0.55rem] lg:text-[0.6rem] border-white border-2 rounded-full transition animate-pulse"
                      style={{ animationDuration: "4s" }}
                    >
                      currently building
                    </div>
                    <div
                      className="self-start px-[0.6rem] py-[0.35rem] flex lg:hidden items-center text-[0.55rem] border-white border-2 rounded-full transition animate-pulse"
                      style={{ animationDuration: "4s" }}
                    >
                      current
                    </div>
                  </div>
                  <div className="workDescription text-[0.8rem] sm:text-[0.8rem] text-justify lg:text-sm text-white mt-[0.7rem]" style={getAnimationStyle(0.35)}>
    A video editing copilot that processes multi-cam and multi-audio feeds real-time, and spins up an agentic pipeline that understands visual context, performs speaker diarization, holds context in an intelligent memory layer, and has an LLM in the pipeline that orchestrates and generates an 'fcpxml' file that can be imported to any video-editing software and automatically populates the media files and the timeline with multi-cam cuts, ready to render.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full space-x-[0.8rem] sm:space-x-[1rem]">
              <div className="flex flex-col items-center pt-[0.5rem] shrink-0 ">
                <div className="w-[0.5rem] h-[0.5rem] border-2 shrink-0 border-white bg-transparent rounded-full" style={getAnimationStyle(0.35)}></div>
                <div
                  className="w-[0.1rem] rounded-full h-full flex shrink-0 bg-white"
                  style={getAnimationOpacity(0.4)}
                ></div>
              </div>
              <div
                className="workItem flex flex-col space-y-[0.5rem] pb-[3rem]"
                style={getAnimationStyle(0.4)}
              >
                <div
                  className="workContent flex flex-col text-start"
                >
                  <div className="flex flex-row space-x-[0.8rem] md:space-x-[1.5rem] justify-between items-start" style={getAnimationStyle(0.45)}>
                    <a href="https://github.com/rkhatta1/equate-tts" target="_blank" className="cursor-pointer flex flex-col items-start space-y-[0rem]">
                      <div className="workTitle text-[1rem] lg:text-[1.1rem] font-semibold text-white">
                        Equate-TTS - A Python SDK for properly synthesizing math equations
                      </div>
                      <span className="text-[0.75rem] lg:text-sm">
                        &#123; Python, SpeechifyAPI, ElevenLabsAPI, GeminiAPI
                        &#125;
                      </span>
                    </a>
                    <div
                      className="self-start mr-0 px-[0.6rem] py-[0.35rem] hidden lg:flex items-center sm:text-[0.55rem] lg:text-[0.6rem] border-white border-2 rounded-full transition animate-pulse"
                      style={{ animationDuration: "4s" }}
                    >
                      currently building
                    </div>
                    <div
                      className="self-start px-[0.6rem] py-[0.35rem] flex lg:hidden items-center text-[0.55rem] border-white border-2 rounded-full transition animate-pulse"
                      style={{ animationDuration: "4s" }}
                    >
                      current
                    </div>
                  </div>
                  <div className="workDescription text-[0.8rem] sm:text-[0.8rem] text-justify lg:text-sm text-white mt-[0.7rem]" style={getAnimationStyle(0.5)}>
    Synthesizing math equations is notoriously tough for the existing voice models. Equate-TTS is a python SDK that aims to solve this problem by having an LLM intelligently spell the math equations out for the tts APIs to synthesize it.
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
                style={getAnimationStyle(0.55)}
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
