import React from "react";
import { serviceState } from "../../utils/dataTypes";

interface Props {
  data: serviceState;
}

const Card: React.FC<Props> = ({ data }) => {
  const { image, description } = data;

  return (
    <div className={card}>
      <img className={img} src={image} alt="icon" />
      <div className={descr}>
        <p className="w-[176px] text-center">{description}</p>
      </div>
      <button className={button}>Получить услугу</button>
    </div>
  );
};

export default Card;

const card = "flex flex-col items-center justify-between relative   ";
const img = "absolute top-[-30px] bg-red-600 rounded-full p-[15px] w-[60px] lg:w-[70px]";
const descr =
  "bg-white rounded-md py-[43px] px-[34px] flex flex-wrap text-xl font-bold items-center justify-center w-fullmin-w-[120px] lg:min-w-[198px]  ";
const button =
  "rounded-full px-[22px] text-lg py-[4px] bg-stone-800 hover:bg-stone-700 shadow text-white font-medium absolute bottom-[-20px] mt-[123px] min-w-[120px] lg:min-w-[198px]";
