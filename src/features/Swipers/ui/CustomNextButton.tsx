import React from "react";

interface Props {
  onClick?: () => void;
}

const CustomNextButton: React.FC<Props> = ({ onClick }) => (
  <button onClick={onClick} className="swiper-button-next-custom ">
    <svg
      className=" w-[24px] h-[24px] sm:w-[33px] md:h-[44px]   sm:h-[33px] md:w-[44px] lg:w-[56px] lg:h-[55px] "
      viewBox="0 0 56 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27.5" cy="27.5" r="27" transform="matrix(-1 0 0 1 55.5 0)" stroke="white" />
      <path
        d="M30.7338 20.6714L37.5625 27.5001L30.7338 34.3289"
        stroke="#DFDFEC"
        strokeWidth="1.6875"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4373 27.5H37.3711"
        stroke="#DFDFEC"
        strokeWidth="1.6875"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default CustomNextButton;
