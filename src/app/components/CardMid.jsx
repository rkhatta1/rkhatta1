"use client";
import React from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { TransitionContext } from "../PageTransition";

const CardMid = ({
  imageSrc = "/placeholder.jpg",
  title = "Card Title",
  description = "Short description goes here...",
  link = "#",
  rotate = 4,
  bg = "bg-gray-800",
  titleText = "group-hover:text-black",
  border = "hover:border-gray-800",
  otherText = "group-hover:text-gray-200",
  typeOf = "icon",
}) => {
  var whichIcon = <FaLaptopCode className="h-[2.5rem] w-[2.5rem] text-white" />;
  if (typeOf === "work") {
    whichIcon = <MdOutlineWorkOutline className="h-[2.5rem] w-[2.5rem] text-white" />;
  } else if (typeOf === "project") {
    whichIcon = <FaLaptopCode className="h-[2.5rem] w-[2.5rem] text-white" />;
  } else if (typeOf === "social") {
    whichIcon = <TiSocialLinkedin className="h-[2.5rem] w-[2.5rem] text-white" />;
  }
  
  // Card content without the Link wrapper
  const CardContentMid = () => (
    <div
      className={`parentDivRef group flex flex-col items-start space-y-[1rem] w-[12rem] bg-gray-950 border-[0.3rem] h-[11rem] p-[1.4rem] border-gray-800 rounded-[2.5rem] shadow-md overflow-hidden transform transition duration-300 ${rotate} hover:rotate-0 ${border} ${bg} cursor-pointer`}
    >
      {/* Image Section */}
      <div className="items-start w-full mx-auto">
        {typeOf === 'image' ? (
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={600}
            className="h-[2.5rem] w-[2.5rem]" 
            priority={typeOf === 'image'}
          />
        ) : (
          whichIcon
        )}
      </div>
      {/* Content Section */}
      <div className="text-start space-y-[0.2rem]">
        <h2 className={`text-[1rem] transition text-white font-medium ${titleText}`}>{title}</h2>
        <p className={`text-[0.7rem] transition ${otherText} text-gray-400`}>{description}</p>
      </div>
    </div>
  );

  // Import the transition context
  const { handleNavigation } = React.useContext(TransitionContext);

  // If link is "#" or empty, don't make it navigable
  if (link === "#" || !link) {
    return <CardContentMid />;
  }

  // Otherwise handle navigation with transition
  return (
    <div onClick={() => handleNavigation(link)}>
      <CardContentMid />
    </div>
  );
};

export default CardMid;