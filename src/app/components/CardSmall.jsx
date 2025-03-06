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
  var whichIcon = <FaLaptopCode className="h-[1.5rem] w-[1.5rem] text-white" />;
  if (typeOf === "work") {
    whichIcon = <MdOutlineWorkOutline className="h-[1.5rem] w-[1.5rem] text-white" />;
  } else if (typeOf === "project") {
    whichIcon = <FaLaptopCode className="h-[1.5rem] w-[1.5rem] text-white" />;
  } else if (typeOf === "social") {
    whichIcon = <TiSocialLinkedin className="h-[1.5rem] w-[1.5rem] text-white" />;
  } else if (typeOf === "home") {
    whichIcon = <AiOutlineHome className="h-[1.5rem] w-[1.5rem] text-white" />;
  }
  
  // Card content without the Link wrapper
  const CardContent = () => (
    <div
      className={`parentDivRef group flex flex-col items-center justify-center space-y-[1.8rem] bg-gray-950 border-[0.3rem] p-[0.8rem] border-gray-800 rounded-[1.2rem] shadow-md overflow-hidden transform transition duration-300 ${border} ${bg} cursor-pointer`}
    >
      {/* Image Section */}
      <div className="items-center align-middle mx-auto">
        {typeOf === 'image' ? (
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={600}
            className="h-[1.5rem] w-[1.5rem]" 
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

  // If link is "#" or empty, don't make it navigable
  if (link === "#" || !link) {
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