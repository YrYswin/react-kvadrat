import React from "react";
import Carousel from "../../features/Banner.jsx/Carousel";
import Contacts from "../../shared/helpers/Contacts";

export const Homepages: React.FC = () => {
  const texts: string[] = [
    "Юридические чистые объекты",
    "Вся ответственность на нас по договору",
    "Поиск, подбор, продажа - все под ключ",
  ];
  return (
    <div className="relative">
      <Carousel />
      <div className="absolute bottom-[20px] lg:bottom-[80px] left-[4%] md:left-[50px] lg:left-[90px] w-[88%] z-10">
        <div className="texts flex flex-col lg:flex-row gap-2 lg:gap-60 mb-3">
          {texts?.map((text, index) => (
            <div key={index} className="flex gap-2">
              <img className="p-1 bg-red-600 rounded-full w-[20px] h-[20px] md:w-[34px] md:h-[34px]" src="/svg/chekcbox.svg" alt="icon" />
              <p className="text-xs md:text-sm font-medium text-white">{text}</p>
            </div>
          ))}
        </div>
        <Contacts />
      </div>
    </div>
  );
};
