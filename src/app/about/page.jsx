"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import CardSmall from "../components/CardSmall";
import { CiLocationOn } from "react-icons/ci";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small timeout to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 40);

    return () => clearTimeout(timer);
  }, []);

  // Animation style creator function - keeping filter out of this
  const getAnimationStyle = (delay = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: `translateY(${isLoaded ? 0 : "30px"})`,
    transition: `opacity 1.8s ease ${delay}s, transform 2s ease ${delay}s`,
  });

  // Separate blur animation to not interfere with grayscale
  const getBlurStyle = (delay = 0) => ({
    filter: `blur(${isLoaded ? 0 : "2.2rem"})`,
    transition: `filter 2.2s ease ${delay}s`,
  });

  return (
    <div className="parentContainer overflow-hidden flex w-full h-screen mx-auto justify-center">
      <div
        className="siblingsContainer flex flex-col flex-1 h-[85%] sm:h-full justify-center items-center max-w-[27rem] px-[2rem] sm:px-[3rem] sm:max-w-[34rem] lg:max-w-[41rem] mx-auto space-y-1 sm:space-y-[1rem] overflow-hidden"
        style={getAnimationStyle(0)}
      >
        {/* Wrapper div with animation styles */}
        <div style={getAnimationStyle(0.1)}>
          {/* Separate div for grayscale effect */}
          <div className="transition grayscale hover:grayscale-0 duration-[1.2s]">
            <Image
              src="https://rkhatta1.github.io/rkhatta1/collage.png"
              alt="Profile Picture"
              width={1920}
              height={1080}
              className="rounded-none h-[10rem] w-[22rem] sm:h-[14rem] sm:w-[28rem] lg:h-[15rem] lg:w-[35rem] object-cover"
              style={getBlurStyle(0.1)}
              unoptimized={true}
            />
          </div>
        </div>

        <div
          className="childContainer w-full flex flex-col space-y-[1rem] sm:space-y-[1.5rem]"
          style={getAnimationStyle(0.2)}
        >
          <div className="title hidden sm:flex flex-row justify-between w-full">
            <div className="flex flex-col" style={getBlurStyle(0.2)}>
              <div className="lg:block hidden">
                <AnimatedText text={"Raajveer Khattar"} />
              </div>
              <div className="lg:hidden block">
                <span className="text-[1.2rem] font-semibold">
                  Raajveer Khattar
                </span>
              </div>
              <p className="flex flex-row sm:space-x-1 lg:space-x-2 sm:text-sm lg:text-md">
                <CiLocationOn className="mt-[0.15rem]" />
                <span>Phoenix, AZ</span>
              </p>
            </div>
            <div className="flex flex-row sm:space-x-[0.8rem] lg:space-x-[1rem]">
              <div style={getBlurStyle(0.25)}>
                <CardSmall
                  link="/"
                  bg="hover:bg-[#290028]"
                  border="hover:border-gray-600"
                  typeOf="home"
                />
              </div>
              <div style={getBlurStyle(0.3)}>
                <CardSmall
                  link="/projects"
                  bg="hover:bg-[#001e17]"
                  border="hover:border-gray-600"
                  typeOf="project"
                />
              </div>
              <div className="lg:flex hidden" style={getBlurStyle(0.35)}>
                <CardSmall
                  link="/work"
                  bg="hover:bg-[#001e17]"
                  border="hover:border-gray-600"
                  typeOf="work"
                />
              </div>
              <div className="lg:hidden flex" style={getBlurStyle(0.35)}>
                <CardSmall
                  link="/works"
                  bg="hover:bg-[#001e17]"
                  border="hover:border-gray-600"
                  typeOf="work"
                />
              </div>
              <div style={getBlurStyle(0.4)}>
                <CardSmall
                  link="/socials"
                  bg="hover:bg-[#513e00]"
                  border="hover:border-gray-600"
                  typeOf="social"
                />
              </div>
            </div>
          </div>
          <div className="title sm:hidden flex flex-col space-y-[0.8rem] justify-start w-full">
            <div className="flex flex-col" style={getBlurStyle(0.2)}>
                <span className="text-[1.2rem] font-semibold">
                  Raajveer Khattar
                </span>
                <p className="flex flex-row space-x-0.5 text-sm items-center">
                <CiLocationOn />
                <span>Phoenix, AZ</span>
              </p>
            </div>
            <div className="flex flex-row space-x-[0.8rem]">
              <div style={getBlurStyle(0.25)}>
                <CardSmall
                  link="/"
                  bg="hover:bg-[#290028]"
                  border="hover:border-gray-600"
                  typeOf="home"
                />
              </div>
              <div style={getBlurStyle(0.3)}>
                <CardSmall
                  link="/projects"
                  bg="hover:bg-[#001e17]"
                  border="hover:border-gray-600"
                  typeOf="project"
                />
              </div>
              <div className="lg:flex hidden" style={getBlurStyle(0.35)}>
                <CardSmall
                  link="/work"
                  bg="hover:bg-[#001e17]"
                  border="hover:border-gray-600"
                  typeOf="work"
                />
              </div>
              <div className="lg:hidden flex" style={getBlurStyle(0.35)}>
                <CardSmall
                  link="/works"
                  bg="hover:bg-[#001e17]"
                  border="hover:border-gray-600"
                  typeOf="work"
                />
              </div>
              <div style={getBlurStyle(0.4)}>
                <CardSmall
                  link="/socials"
                  bg="hover:bg-[#513e00]"
                  border="hover:border-gray-600"
                  typeOf="social"
                />
              </div>
            </div>
          </div>
          <div
            className="aboutPara text-start p-0 m-0 space-y-[0.7rem] text-[0.75rem] lg:text-md sm:text-sm"
            style={{ ...getAnimationStyle(0.5), ...getBlurStyle(0.5) }}
          >
            <p>
              hello, people from the internet! raajveer here, a software
              engineering grad student @ASU who loves to code, play tennis and
              look at cute dog videos on the web.{" "}
              <span className="transition duration-300 hover:text-blue-400 focus:text-blue-400">
                oh, did i mention i'm a chelsea fan?
              </span>
              <br />{" "}
              <span className="uppercase transition duration-300 hover:text-blue-400 focus:text-blue-400">
                up the chels! keep the blue flag flying high!!
              </span>
            </p>
            <p>
              i'm a full-stack engineer and my choice of languages to code in
              are primarily python and typescript. i enjoy working on cool
              projects and efficient problem solving. off late, i've been trying
              my hands with agentic AI solutions and smart automation
              services/tools.
            </p>
            <p>
              current topics of interest (in no particular order): clean code,
              big data, generative AI, cloud computing, continuous integration /
              deployment / delivery, workflow automation and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
