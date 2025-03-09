'use client';
import React, { useState, useEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import CardSmall from "../components/CardSmall";

const Works = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('work'); // 'work' or 'education'
  const [previousSection, setPreviousSection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Small timeout to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle section change with smooth transition
  const handleSectionChange = (section) => {
    if (section === activeSection || isTransitioning) return;
    
    // Start transition process
    setIsTransitioning(true);
    setPreviousSection(activeSection);
    
    // First phase: fade out current content
    setTimeout(() => {
      // Switch the active section
      setActiveSection(section);
      
      // Second phase: wait for new content to fade in
      setTimeout(() => {
        // Transition complete
        setIsTransitioning(false);
        setPreviousSection(null);
      }, 100);
    }, 100);
  };

  // Animation style creator function
  const getAnimationStyle = (delay = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: `translateY(${isLoaded ? 0 : "30px"})`,
    filter: `blur(${isLoaded ? 0 : "2.2rem"})`,
    transition: `opacity 1.6s ease ${delay}s, transform 1.6s ease ${delay}s, filter 1.8s ease ${delay}s`,
  });

  // Get content section style based on section status
  const getSectionStyle = (section) => {
    if (section === activeSection && !previousSection) {
      // Normal active state
      return {
        opacity: 1,
        filter: 'blur(0)',
        transition: 'opacity 0.5s ease, filter 0.6s ease',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      };
    } else if (section === activeSection && previousSection) {
      // Fading in
      return {
        opacity: 1,
        filter: 'blur(0)',
        transition: 'opacity 0.5s ease, filter 0.6s ease',
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
      };
    } else if (section === previousSection) {
      // Fading out
      return {
        opacity: 0,
        filter: 'blur(2.2rem)',
        transition: 'opacity 0.5s ease, filter 0.6s ease',
        position: 'absolute',
        top: 0,
        left: 0, 
        width: '100%',
      };
    } else {
      // Hidden
      return {
        opacity: 0,
        filter: 'blur(2.2rem)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
      };
    }
  };

  return (
    <div className='parentContainer w-full m-0 p-0 overflow-hidden flex lg:hidden h-screen'>
      <div className='interContainer max-w-[24rem] sm:max-w-[35rem] flex flex-col space-y-[2rem] sm:space-y-[1.5rem] flex-1 mx-auto justify-center'>
        <div className="items-start flex flex-row w-full space-x-2.5 sm:space-x-[1rem]">
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
        
        <div className='siblingsContainer w-full flex flex-col items-start align-top h-[30rem] justify-start cursor-default'>
          {/* Section Toggle Tabs */}
          <div className='tabs-container flex flex-row space-x-[1.5rem] sm:space-x-4 mb-[1.5rem] sm:mb-[2rem]' style={getAnimationStyle(0)}>
            <button 
              className={`text-[1.3rem] sm:text-2xl font-bold text-start ${activeSection === 'work' ? 'text-white underline' : 'text-gray-400'} transition-all duration-300 hover:text-white`}
              onClick={() => handleSectionChange('work')}
              disabled={isTransitioning}
            >
              Work Experience
            </button>
            <button 
              className={`text-[1.3rem] sm:text-2xl font-bold text-start ${activeSection === 'education' ? 'text-white underline' : 'text-gray-400'} transition-all duration-300 hover:text-white`}
              onClick={() => handleSectionChange('education')}
              disabled={isTransitioning}
            >
              Education
            </button>
          </div>

          {/* Content container with relative positioning */}
          <div className="relative w-full" style={getAnimationStyle(0.15)}>
            {/* Work Experience Section */}
            <div style={getSectionStyle('work')}>
              <div className='workContainer flex flex-col max-w-full space-y-[1.5rem] items-start'>
                <div className='workItem flex flex-col space-y-[0.5rem]'>
                  <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-white border-2 rounded-full transition animate-pulse' style={{ animationDuration: '4s' }}>
                    Aug. 2024 - Present
                  </div>
                  <div className='workContent flex flex-col text-start'>
                    <div className='workTitle text-[1.1rem] font-semibold text-white'>Multimedia Services Assistant, Part Time</div>
                    <div className='text-sm flex items-center flex-row'><span className='font-semibold mt-[0.15rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Fulton Schools of Engineering, ASU</span></div>
                    <div className='workDescription text-sm text-white mt-[0.7rem]'>
                      I work at the Lecture Capture Studios @LTH as a student worker to assist faculty and staff with the recording and production of multimedia content. I also help with the maintenance of as well as troubleshooting the studio equipment and the multimedia content for online courses.
                    </div>
                  </div>
                </div>
                
                <div className='workItemPrev text-gray-400 flex flex-col space-y-[0.5rem] group'>
                  <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-gray-400 border-2 rounded-full group-hover:border-white group-hover:text-white transition duration-300'>
                    Feb. 2023 - May 2023
                  </div>
                  <div className='workContent flex flex-col text-start group-hover:text-white' style={{ transition: 'color 0.3s ease' }}>
                    <div className='workTitle text-[1.1rem] font-semibold '>Flask Developer Intern</div>
                    <div className='text-sm flex flex-row items-center'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>The Trade Journal Project</span></div>
                    <div className='workDescription text-sm mt-[0.7rem]'>
                      I joined Veeral Patel and his team to work on an AI enabled fintech product. I was majorly responsible for contributing to the authentication pipeline and the logic for the trade instruments -- working in a cross-functional team to deliver a high-quality product.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div style={getSectionStyle('education')}>
              <div className='workContainer flex flex-col max-w-full space-y-[1.5rem] items-start'>
                <div className='workItem flex flex-col space-y-[0.5rem] text-white'>
                  <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-white border-2 rounded-full transition animate-pulse' style={{ animationDuration: '4s' }}>
                    Jan. 2024 - Dec. 2025 (Ongoing)
                  </div>
                  <div className='workContent flex flex-col text-start'>
                    <div className='workTitle text-[1.1rem] font-semibold'>Masters in Science, Computer Software Engineering</div>
                    <div className='text-sm flex flex-row'><span className='font-semibold mt-[0.2rem]'><CiLocationOn /></span><span className='ml-[0.2rem]'>Ira A. Fulton School of Engineering, Arizona State University</span></div>
                    <div className='workDescription text-sm mt-[0.7rem]'>
                      Areas of interest: Advanced Data Structures, Software Design, Software Architecture, Continous Integration, Deployment, and Delivery, Workflow Automation, Big Data, Cloud Computing and Large Language Models.
                    </div>
                  </div>
                </div>
                
                <div className='workItemPrev flex flex-col space-y-[0.5rem] text-gray-400 group'>
                  <div className='self-start px-[0.6rem] py-[0.35rem] flex items-center text-[0.6rem] border-gray-400 border-2 rounded-full group-hover:border-white group-hover:text-white transition duration-300'>
                    July 2019 - June 2023
                  </div>
                  <div className='workContent flex flex-col text-start group-hover:text-white' style={{ transition: 'color 0.3s ease' }}>
                    <div className='workTitle text-[1.1rem] font-semibold'>Bachelors in Technology, Computer Science & Engineering</div>
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
      </div>
    </div>
  )
}

export default Works