import React from "react";

import Container from "../../shared/helpers/Container";

const Argument: React.FC = () => {
  return (
    <Container>
      <div className="text-white mt-[136px] flex flex-col  items-center justify-center w-full ">
        <div className="block py-5 text-sm font-semibold uppercase shadow-lg md:hidden">
          <span className="">3 аргумента почему вам стоит доверить решение вашего квартирног вопроса </span>
          <span className="text-white bg-[#DC2215]"> именно нам </span>
        </div>

        <div className="flex w-full overflow-x-auto">
          <div className="flex gap-3 md:grid md:grid-cols-3 md:grid-rows-5 md:gap-5">
            <div style={{ backgroundImage: "url('/img/argument2.png')" }} className={`${style}`}>
              <div className="  flex flex-col gap-2 lg:gap-[14px] w-full">
                <h2 className={`${h2}`}>15 лет опыта</h2>
                <p className={`${p}`}>
                  Наша цель - решить любую вашу задачу по недвижимости , какой бы сложной она не была. В максиально сжатые сроки
                </p>
              </div>
            </div>
            <div className=" w-full h-full hidden md:block shadow-lg col-span-2 row-span-1 xl:text-[28px] lg:text-[22px] font-semibold uppercase">
              <span className="">3 аргумента почему вам стоит доверить решение вашего квартирного вопроса </span>
              <span className="text-white bg-[#DC2215]"> именно нам </span>
            </div>

            <div style={{ backgroundImage: "url('/img/argument.png')" }} className={`${style}`}>
              <div className="w-[374px] h-[168px] flex flex-col gap-2 lg:gap-[14px]">
                <h2 className={`${h2} text-sm `}>По-человечески-внимательно относимся к клиентам</h2>
                <p className={`${p} `}>
                  Команда специалистов по недвижимости , брокеров , юристов ТОП- уровня проведет вас за руку по сделке
                </p>
              </div>
            </div>

            <div className="hidden w-full h-full row-span-1 md:block"></div>

            <div style={{ backgroundImage: "url('/img/argument3.png')" }} className={`${style}`}>
              <div className="w-[374px] h-[115px] flex flex-col gap-2 lg:gap-[14px]">
                <h2 className={`${h2}`}>Честны и открыты в работе</h2>
                <p className={`${p} `}>Гарантируем юридическую чистоту сделок , состоим в Гильдии риэлторов Бишкека</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Argument;

const style =
  "bg-cover bg-center rounded-md shadow-lg col-span-1 row-span-3   md:w-[218px] md:h-[290px]  lg:w-[330px] lg:h-[420px]  xl:w-[420px] xl:h-[531px] md:px-2 w-[265px] h-[333px]  lg:px-8 px-4 flex md:items-end py-6";
const h2 = "lg:text-[22px] md:text-[18px] font-bold ";
const p = "w-full h-full text-sm  lg:text-md";
