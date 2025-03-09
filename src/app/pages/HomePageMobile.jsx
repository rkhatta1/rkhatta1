'use client';
import React, { useState, useEffect } from 'react';
import CardMobile from '../components/CardMobile';

const HomePageMobile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set isLoaded to true after component mounts
    // Small timeout to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation style creator function
  const getAnimationStyle = (delay = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: `translateY(${isLoaded ? 0 : '30px'})`,
    filter: `blur(${isLoaded ? 0 : '2.2rem'})`,
    transition: `opacity 1.8s ease ${delay}s, transform 2s ease ${delay}s, filter 2.2s ease ${delay}s`
  });

  return (
    <div className='parentContainer mx-auto px-[2rem] flex flex-col h-screen overflow-hidden justify-center align-middle space-y-[4rem]'>
        <div className='childContainer items-center flex flex-col'>
            <div 
              className='text-start flex flex-col cursor-default space-y-[0.5rem]'
              style={getAnimationStyle(0)}
            >
                <span className='text-[1rem] font-bold text-white' style={getAnimationStyle(0.1)}>hello, i'm raajveer and this is my little space on the internet.</span>
                <span className='text-sm' style={getAnimationStyle(0.2)}>browse around the site to discover more about me.</span>
            </div>
        </div>
        <div className='childContainer items-center flex flex-col justify-center space-y-[2rem]'>
            <div className='siblingsContainer flex flex-row justify-center space-x-[2rem] items-center'>
            <div style={getAnimationStyle(0.4)}>
              <CardMobile
                  imageSrc='https://rkhatta1.github.io/rkhatta1/Me-Portfolio.png'
                  title='Raajveer Khattar'
                  description=':P'
                  link='/about'
                  rotate='rotate-[2deg]'
                  bg='hover:bg-[#290028]'
                  titleText = "group-hover:text-green-200"
                  border = "hover:border-gray-600"
                  typeOf='image'
              />
            </div>
            <div style={getAnimationStyle(0.5)}>
              <CardMobile
                  title='Projects'
                  description='currently building + previous projects'
                  link='/projects'
                  rotate='rotate-[-1deg]'
                  bg='hover:bg-[#001e17]'
                  typeOf='project'
                  titleText='group-hover:text-green-200'
                  border = "hover:border-gray-600"
              />
            </div>
            </div>
            <div className='siblingsContainer flex flex-row justify-center space-x-[2rem] items-center'>
            <div style={getAnimationStyle(0.6)}>
              <CardMobile
                  title='Work'
                  description='(past and current) work + education'
                  link='/works'
                  rotate='rotate-[-1deg]'
                  bg='hover:bg-[#003738]'
                  typeOf='work'
                  titleText='group-hover:text-yellow-100'
                  border = "hover:border-gray-600"
              />
            </div>
            <div style={getAnimationStyle(0.6)}>
              <CardMobile
                  title='Socials'
                  description="let's connect :)"
                  link='/socials'
                  rotate='rotate-[2deg]'
                  bg='hover:bg-[#513e00]'
                  typeOf='social'
                  titleText='group-hover:text-blue-200'
                  border = "hover:border-gray-600"
              />
            </div>
            </div>
        </div>
    </div>
  );
};

export default HomePageMobile;