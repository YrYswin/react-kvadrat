import React from "react";

interface Props {
  onClick?: () => void;
}

const CustomPrevButton: React.FC<Props> = ({ onClick }) => (
  <button onClick={onClick} className="swiper-button-prev-custom">
    <svg
      className=" w-[24px] h-[24px] sm:w-[33px] md:h-[44px]   sm:h-[33px] md:w-[44px] lg:w-[56px] lg:h-[55px] "
      viewBox="0 0 56 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="27.5" r="27" stroke="white" />
      <path
        d="M25.2662 20.6714L18.4375 27.5001L25.2662 34.3289"
        stroke="#DFDFEC"
        strokeWidth="1.6875"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.5627 27.5H18.6289"
        stroke="#DFDFEC"
        strokeWidth="1.6875"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default CustomPrevButton;
