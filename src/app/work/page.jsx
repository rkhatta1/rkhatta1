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

  const getAnimationOpacity = (delay = 0) => ({
    opacity: isLoaded ? 0.1 : 0,
    transform: `translateY(${isLoaded ? 0 : "30px"})`,
    filter: `blur(${isLoaded ? 0 : "2.2rem"})`,
    transition: `opacity 1.6s ease ${delay}s, transform 1.6s ease ${delay}s, filter 1.8s ease ${delay}s`,
  });

  return (
    <div className='parentContainer w-full m-0 p-0 overflow-hidden hidden lg:flex h-screen'>
      <div className='interContainer max-w-[80rem] flex flex-col space-y-[2rem] mx-auto justify-center'>
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
              <div style={getAnimationStyle(0.2)}>
              <CardSmall
                link="/socials"
                bg="hover:bg-[#1e4b39]"
                border="hover:border-gray-600"
                typeOf="resume"
              />
              </div>
          </div>
        <div className='siblingsContainer w-full flex flex-row justify-center space-x-[2.5rem] cursor-default'>
          <div className='workContainer flex flex-col flex-1 max-w-[50%] space-y-[1.5rem] items-start align-middle'>
            <div className='text-2xl font-bold text-start text-white underline' style={getAnimationStyle(0.2)}>Work Experience</div>
            <div className='workItem flex flex-col space-y-[0.5rem]' style={getAnimationStyle(0.25)}>
              <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-white border-2 rounded-full transition animate-pulse' style={{ animationDuration: '4s' }}>
                Aug. 2024 - Present
              </div>
              <div className='workContent flex flex-col text-start' style={getAnimationStyle(0.3)}>
                <div className='workTitle text-[1.1rem] font-semibold text-white'>Multimedia Services Assistant</div>
                <div className='text-sm flex flex-row'><span className='font-semibold mt-[0.15rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Fulton Schools of Engineering, ASU</span></div>
                <div className='workDescription text-sm text-white mt-[0.7rem]'>
                  I work at the Lecture Capture Studios @LTH as a student worker to assist faculty and staff with the recording and production of multimedia content. I also help with the maintenance of as well as troubleshooting the studio equipment and the multimedia content for online courses.
                </div>
              </div>
            </div>
            <div className='workItemPrev text-gray-400 flex flex-col space-y-[0.5rem] group' style={getAnimationStyle(0.25)}>
              <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-gray-400 border-2 rounded-full group-hover:border-white group-hover:text-white transition duration-300'>
                Feb. 2023 - June 2023
              </div>
              <div className='workContent flex flex-col text-start group-hover:text-white' style={{...getAnimationStyle(0.3), transition: `${getAnimationStyle(0).transition}, color 0.3s ease`}}>
                <div className='workTitle text-[1.1rem] font-semibold '>Software Developer Intern</div>
                <div className='text-sm flex flex-row'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>The Trade Journal Project</span></div>
                <div className='workDescription text-sm mt-[0.7rem]'>
                  I joined Veeral Patel and his team to work on an AI enabled fintech product. I was majorly responsible for contributing to the authentication pipeline and the logic for the trade instruments, working in a cross-functional team to deliver a high-quality product.
                </div>
              </div>
            </div>
          </div>
          <div className='w-[0.1rem] rounded-full h-full flex shrink-0 bg-white' style={getAnimationOpacity(0.35)}></div>
          <div className='workContainer flex flex-col flex-1 max-w-[50%] space-y-[1.5rem] items-start align-middle'>
            <div className='text-2xl font-bold text-start text-white underline' style={getAnimationStyle(0.4)}>Education</div>
            <div className='workItem flex flex-col space-y-[0.5rem] text-white' style={getAnimationStyle(0.45)}>
              <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-white border-2 rounded-full transition animate-pulse' style={{ animationDuration: '4s' }}>
                Jan. 2024 - Dec. 2025 (Expected)
              </div>
              <div className='workContent flex flex-col text-start' style={getAnimationStyle(0.5)}>
                <div className='workTitle text-[1.1rem] font-semibold'>MS, Computer Software Engineering</div>
                <div className='text-sm flex flex-row'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Arizona State University</span></div>
                <div className='workDescription text-sm mt-[0.7rem]'>
                  Areas of interest: Agile and Lean Engineering, DevOps, MLOps, Cloud Computing, Microservices, CI/CD/CDel, Advanced Data Structures, Software Design Patterns and Architecture, Big Data, and Agentic AI solutions.
                </div>
              </div>
            </div>
            <div className='workItemPrev flex flex-col space-y-[0.5rem] text-gray-400 group' style={getAnimationStyle(0.45)}>
              <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-gray-400 border-2 rounded-full group-hover:border-white group-hover:text-white transition duration-300'>
                July 2019 - June 2023
              </div>
              <div className='workContent flex flex-col text-start group-hover:text-white' style={{...getAnimationStyle(0.5), transition: `${getAnimationStyle(0).transition}, color 0.3s ease`}}>
                <div className='workTitle text-[1.1rem] font-semibold'>B.Tech, Computer Science & Engineering</div>
                <div className='text-sm flex flex-row'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Manipal University, Jaipur</span></div>
                <div className='workDescription text-sm mt-[0.7rem]'>
                  Key concepts I was exposed to: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Neural Networks, Shell Programming, Computer Vision, Web Development, and Object-Oriented Programming.
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