import React from "react";
import Container from "../../shared/helpers/Container";
import { services } from "../../utils/data";
import Card from "./Card";

const Uslugi: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center  w-full  gap-[40px] mb-[157px] mt-20  ">
        <h1 className="text-3xl font-medium text-white">НАШИ УСЛУГИ</h1>
        <div className={servicesDiv}>
          {services?.map((item, i) => (
            <Card data={item} key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Uslugi;

const servicesDiv =
  "flex items-start justify-between gap-[15px] w-full mt-[65px] md-[768px] w-[80vw] h-[300px] pt-[30px] overflow-x-auto ";
