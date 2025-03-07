'use client';

import React, { useState, useEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import CardSmall from "../components/CardSmall";

const Work = () => {
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

  return (
    <div className='parentContainer w-full m-0 p-0 overflow-hidden flex h-screen'>
      <div className='interContainer max-w-[100rem] flex flex-col space-y-[2rem] mx-auto justify-center'>
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
              <div style={getAnimationStyle(0.15)}>
              <CardSmall
                link="/socials"
                bg="hover:bg-[#003738]"
                border="hover:border-gray-600"
                typeOf="social"
              />
              </div>
          </div>
        <div className='siblingsContainer w-full flex flex-row justify-center space-x-[4rem]'>
          <div className='workContainer flex flex-col space-y-[2rem] items-start align-middle'>
            <div className='text-3xl font-bold text-start text-white underline' style={getAnimationStyle(0.2)}>Work Experience</div>
            <div className='workItem flex flex-col space-y-[0.5rem]' style={getAnimationStyle(0.25)}>
              <div className='self-start px-[0.7rem] py-[0.45rem] flex items-center text-[0.7rem] border-white border-2 rounded-full transition animate-pulse' style={{ animationDuration: '4s' }}>
                Aug. 2024 - Present
              </div>
              <div className='workContent flex flex-col text-start' style={getAnimationStyle(0.3)}>
                <div className='workTitle text-[1.4rem] font-semibold text-white'>Multimedia Services Assistant, Part Time</div>
                <div className='text-lg flex flex-row'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Fulton Schools of Engineering, ASU</span></div>
                <div className='workDescription text-lg text-white mt-[1rem]'>
                  I am a software engineer with a passion for creating web applications. I have experience with React, Node.js, and MongoDB. I am always looking for new opportunities to learn and grow as a developer.
                </div>
              </div>
            </div>
          </div>
          <div className='workContainer flex flex-col space-y-[2rem] items-start align-middle'>
            <div className='text-3xl font-bold text-start text-white underline' style={getAnimationStyle(0.4)}>Education</div>
            <div className='workItem flex flex-col space-y-[0.5rem]' style={getAnimationStyle(0.45)}>
              <div className='self-start px-[0.7rem] py-[0.45rem] flex items-center text-[0.7rem] border-white border-2 rounded-full transition animate-pulse' style={{ animationDuration: '4s' }}>
                Jan. 2024 - Dec. 2025 (Ongoing)
              </div>
              <div className='workContent flex flex-col text-start' style={getAnimationStyle(0.5)}>
                <div className='workTitle text-[1.4rem] font-semibold text-white'>Masters in Science, Computer Software Engineering</div>
                <div className='text-lg flex flex-row'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Ira A. Fulton School of Engineering, Arizona State University</span></div>
                <div className='workDescription text-lg text-white mt-[1rem]'>
                  I am a software engineer with a passion for creating web applications. I have experience with React, Node.js, and MongoDB. I am always looking for new opportunities to learn and grow as a developer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work