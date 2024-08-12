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
      <div className="absolute bottom-[70px] left-[10%] lg:left-[100px] z-10">
        <div className="texts flex flex-col lg:flex-row gap-6 lg:gap-60 mb-10">
          {texts?.map((text, index) => (
            <div key={index} className="flex gap-2">
              <img className="p-1 bg-red-600 rounded-full" src="/svg/chekcbox.svg" alt="icon" />
              <p className="text-xs md:text-sm font-medium text-white">{text}</p>
            </div>
          ))}
        </div>
        <Contacts />
      </div>
    </div>
  );
};
