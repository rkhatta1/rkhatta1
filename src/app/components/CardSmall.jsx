"use client";
import React from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { TransitionContext } from "../PageTransition";
import { AiOutlineHome } from "react-icons/ai";

const CardSmall = ({
  imageSrc = "/placeholder.jpg",
  title = "Title",
  link = "#",
  bg = "bg-gray-800",
  border = "hover:border-gray-800",
  typeOf = "icon",
}) => {
  var whichIcon = <FaLaptopCode className="sm:h-[1.2rem] sm:w-[1.2rem] lg:h-[1.5rem] lg:w-[1.5rem] text-white" />;
  if (typeOf === "work") {
    whichIcon = <MdOutlineWorkOutline className="sm:h-[1.2rem] sm:w-[1.2rem] lg:h-[1.5rem] lg:w-[1.5rem] text-white" />;
  } else if (typeOf === "project") {
    whichIcon = <FaLaptopCode className="sm:h-[1.2rem] sm:w-[1.2rem] lg:h-[1.5rem] lg:w-[1.5rem] text-white" />;
  } else if (typeOf === "social") {
    whichIcon = <TiSocialLinkedin className="sm:h-[1.2rem] sm:w-[1.2rem] lg:h-[1.5rem] lg:w-[1.5rem] text-white" />;
  } else if (typeOf === "home") {
    whichIcon = <AiOutlineHome className="sm:h-[1.2rem] sm:w-[1.2rem] lg:h-[1.5rem] lg:w-[1.5rem] text-white" />;
  } else if (typeOf === "resume") {
    whichIcon = <div className="uppercase text-[0.8rem] sm:h-[1.2rem] lg:h-[1.5rem] font-semibold text-white flex items-center justify-center text-center">Resume</div>;
  } else if (typeOf === "prevProjects") {
    whichIcon = <a href="https://github.com/rkhatta1" target="_blank" className="lowercase sm:text-[0.75rem] lg:text-[0.8rem] font-semibold text-white flex items-center justify-center text-center">past projects + contributions</a>;
  }
  
  // Card content without the Link wrapper
  const CardContent = () => (
    <div
      className={`parentDivRef group flex items-center justify-center bg-gray-950 border-[0.3rem] p-[0.8rem] border-gray-800 ${typeOf === 'prevProjects' ? 'rounded-full' : ''} rounded-[1.2rem] shadow-md overflow-hidden transform transition duration-300 ${border} ${bg} cursor-pointer`}
      onClick={typeOf === "resume" ? handleDownload : undefined}
    >
      {/* Image Section */}
      <div className="items-center align-middle mx-auto flex">
        {typeOf === 'image' ? (
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={600}
            className="h-[1.2rem] w-[1.2rem] lg:h-[1.5rem] lg:w-[1.5rem]" 
          />
        ) : (
          whichIcon
        )}
      </div>
      {/* Content Section */}
      {/* <div className="text-start space-y-[0.2rem]">
        <h2 className={`text-[1rem] transition text-white font-medium ${titleText}`}>{title}</h2>
        <p className={`text-sm transition ${otherText} text-gray-400`}>{description}</p>
      </div> */}
    </div>
  );

  // Import the transition context
  const { handleNavigation } = React.useContext(TransitionContext);

  const handleDownload = (e) => {
    e.stopPropagation(); // Prevent any parent onClick handlers from triggering
    
    // Create a link element
    const link = document.createElement('a');
    link.href = 'https://arizonastateu-my.sharepoint.com/:b:/g/personal/rkhatta1_sundevils_asu_edu/EXo5hRjEZ8NMpTm8yZpk7OwBUTIaksmIaMl_chu015vpoA?e=DGDXvI'; // Path to your resume PDF in the public folder
    link.download = 'RaajveerKhattar-Resume.pdf'; // Name for the downloaded file
    link.target = '_blank'; // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If link is "#" or empty, don't make it navigable
  if (link === "#" || !link || typeOf === "resume" || typeOf === "prevProjects") {
    return <CardContent />;
  }

  // Otherwise handle navigation with transition
  return (
    <div onClick={() => handleNavigation(link)}>
      <CardContent />
    </div>
  );
};

export default CardSmall;