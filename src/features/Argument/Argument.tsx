import React from "react";

import Container from "../../shared/helpers/Container";

const Argument: React.FC = () => {
  return (
    <Container>
      <div className="text-white mt-[30px] md:mt-[136px] flex flex-col  items-center justify-center w-full ">
        <div className="block py-5 text-sm font-semibold uppercase shadow-lg md:hidden">
          <span className="">3 аргумента почему вам стоит доверить решение вашего квартирног вопроса </span>
          <span className="text-white bg-[#DC2215]"> именно нам </span>
        </div>

        <div className="flex w-full overflow-x-auto">
          <div className="flex gap-3 md:grid md:grid-cols-3 md:grid-rows-5 md:gap-5">
            <div style={{ backgroundImage: "url('/img/argument2.png')" }} className={`${style}`}>
              <div className="  flex flex-col gap-2 lg:gap-[14px] w-full">
                <h2 className={`${h2}`}>С нами надежно!</h2>
                <p className={`${p}`}>
                  Мы предостовляем полное юридическое сопровождение!Тем самым обезопасим вас от злоумышленников!Работаем по закону
                  КР несем ответственность за свои действия.
                </p>
              </div>
            </div>
            <div className=" w-full h-full hidden md:block shadow-lg col-span-2 row-span-1 xl:text-[28px] lg:text-[22px] font-semibold uppercase">
              <span className="">3 аргумента почему вам стоит доверить решение вашего квартирного вопроса </span>
              <span className="text-white bg-[#DC2215]"> именно нам </span>
            </div>

            <div style={{ backgroundImage: "url('/img/argument.png')" }} className={`${style2}`}>
              <div className="w-[374px] h-[168px] flex flex-col gap-2 lg:gap-[14px]">
                <h2 className={`${h2} text-sm `}>С нами быстро!</h2>
                <p className={`${p} `}>
                  Работаем оперативно,Быстрооценим ,отрекламируем ,покажем ,продадим. Используем современные методы продажи
                  ,Прокаченная реклама и хорошо охватоваемые соцсети.Если вы решитесь продать с нами ,половина города будет знать
                  о вашей продажи.
                </p>
              </div>
            </div>

            <div className="hidden w-full h-full row-span-1 md:block"></div>

            <div style={{ backgroundImage: "url('/img/argument3.png')" }} className={`${style2}`}>
              <div className="w-[374px] h-[115px] flex flex-col gap-2 lg:gap-[14px]">
                <h2 className={`${h2}`}>С нами приятно!</h2>
                <p className={`${p} `}>
                  Для нас в первую очередь важно помочь клиенту.Чтобы он безопасно и выгодно продал также купил недвижимость!Все
                  наши сотрудники понимают и ответственно относятся к своей работе.И мы все трудимся во благо наших потрибителей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Argument;

const style ="bg-cover bg-center rounded-md shadow-lg col-span-1 row-span-3   md:w-[218px] md:h-[290px]  lg:w-[330px] lg:h-[420px]  xl:w-[420px] xl:h-[531px] md:px-2 w-[265px] h-[333px]  lg:px-8 px-4 flex md:items-end py-6";
const style2 ="bg-cover bg-center rounded-md shadow-lg col-span-1 row-span-3   md:w-[218px] md:h-[290px]  lg:w-[330px] lg:h-[420px]  xl:w-[420px] xl:h-[531px] md:px-2 w-[265px] h-[333px]  lg:px-8 px-4 flex md:items-end py-6 md:py-24";
const h2 = "lg:text-[22px] md:text-[18px] font-bold ";
const p = "w-full h-full text-[10px] md:text-[12px] lg:text-[16px]";
