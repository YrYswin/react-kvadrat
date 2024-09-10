import React, { useState, useEffect } from "react";
import Container from "../../shared/helpers/Container";
import { services } from "../../utils/data";
import Card from "./Card";

const Uslugi: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center w-full gap-[40px] mb-[100px] md:mb-[157px] mt-20">
        <h1 className="text-3xl font-medium text-white">НАШИ УСЛУГИ</h1>
        <div className={servicesDiv}>
          {services?.slice(0, isMobile ? 3 : services.length).map((item, i) => (
            <Card data={item} key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Uslugi;

const servicesDiv =
  "flex flex-col mb-[50px] md:mb-[0px] md:flex-row items-start md:justify-between gap-[65px] md:gap-[15px] md:w-full md:mt-[65px] w-[260px] h-[610px] md:h-[300px] pt-[30px] overflow-x-auto";
