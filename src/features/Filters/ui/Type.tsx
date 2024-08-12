import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import {
  setPrice,
  setTypeHouse,
  setPool,
  setGym,
  setGarage,
  setParking,
  setGarden,
  setFireplace,
  setElevator,
  setClubhouse,
  setLaundry,
  setArea,
  selectFilter,
} from "../store/slice";
import SelectUI from "./SelectUI";
import { priceVariable } from "../../../utils/data";
import { addressArray } from "../../../utils/data";

const Type = () => {
  const dispatch = useAppDispatch();
  const { typeHouse, comfort } = useSelector(selectFilter);

  const houseType = ["Все", "Дома", "Квартиры", "Участки", "Комерческое недвижиомть"];
  const handleChange = (value) => {
    const option = priceVariable.find((x) => x.id === value);
    if (option) {
      dispatch(setPrice(option));
    }
  };

  return (
    <div className="text-white bg-[#111111] lg:w-[350px] md:w-[20px] p-5 rounded">
      <div>
        <h2>Найти свою недвижимость</h2>
      </div>
      <hr className="my-5" />
      <div className="mt-5">
        <p className="mb-3">Местоположение</p>
        <SelectUI items={addressArray} active={"Бишкек"} width={300} />
      </div>
      <hr className="mt-10 mb-5" />
      <div>
        <p>Cтатус собственности</p>
        <div>
          <div className="flex gap-3 pt-3">
            <input type="checkbox" />
            <p>Арендовать</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>Продавать</p>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-5" />
      <div>
        <p>Тип недвижимости</p>
        <div>
          {houseType.map((item, i) => (
            <div className="flex gap-3" key={i}>
              <input type="checkbox" checked={typeHouse === item} onChange={() => dispatch(setTypeHouse(item))} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-10 mb-5" />

      <div>
        <div>Цена</div>
        <div>
          <SelectUI items={priceVariable} isPrice={true} onChange={handleChange} active={priceVariable[0].id} />
        </div>
      </div>
      <hr className="mt-10 mb-5" />

      <div>
        <p>Удобства</p>
        <div className="flex gap-10">
          <div className="pt-5">
            <div className="flex gap-3 ">
              <input type="checkbox" checked={comfort.garden} onChange={() => dispatch(setGarden())} />
              <p>Сад</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.gym} onChange={() => dispatch(setGym())} />
              <p>Спортзал</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.elevator} onChange={() => dispatch(setElevator())} />
              <p>Лифт</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.garage} onChange={() => dispatch(setGarage())} />
              <p>Гаражи</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.parking} onChange={() => dispatch(setParking())} />
              <p>Стоянка</p>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.fireplace} onChange={() => dispatch(setFireplace())} />
              <p>Камин</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.pool} onChange={() => dispatch(setPool())} />
              <p>Бассейн</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.area} onChange={() => dispatch(setArea())} />
              <p>Детская площадка</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.clubhouse} onChange={() => dispatch(setClubhouse())} />
              <p>Клубный дом</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.laundry} onChange={() => dispatch(setLaundry())} />
              <p>Прачечная</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
