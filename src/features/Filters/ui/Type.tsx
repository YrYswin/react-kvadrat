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
import axios from "axios";
import { useEffect, useState } from "react";

export interface Adress {
  id: number;
  region: string;
}

const Type = () => {
  const API = "http://167.172.74.113/addresses/";
  const dispatch = useAppDispatch();
  const { typeHouse, comfort, price } = useSelector(selectFilter); // Добавил price из стейта
  const [address, setAddress] = useState<Adress[]>([]);
  const [activeAddress, setActiveAddress] = useState<string>("");

  const houseType = ["Все", "Дома", "Квартиры", "Участки", "Комерческое недвижимость"];

  const handleChange = (value: string) => {
    const option = priceVariable.find((x) => x.id === Number(value));
    if (option) {
      dispatch(setPrice(option)); // Устанавливаем цену через Redux
    }
  };

  const handleChangeAddress = (value: string) => {
    setActiveAddress(value);
  };

  async function getAddress(): Promise<void> {
    try {
      const res = await axios.get<{ results: Adress[] }>(API);
      if (Array.isArray(res.data.results)) {
        setAddress(res.data.results);
      } else {
        console.error("Unexpected data format", res.data);
        setAddress([]);
      }
    } catch (error) {
      console.log(error);
      setAddress([]); // Обработка ошибок
    }
  }

  useEffect(() => {
    getAddress();
  }, []);

  const addressStrings = Array.isArray(address) ? address.map((item) => item.region) : [];

  return (
    <div className="text-white bg-[#111111] lg:w-[350px] md:w-[20px] p-5 rounded">
      <div>
        <h2>Найти свою недвижимость</h2>
      </div>
      <hr className="my-5" />
      <div className="mt-5">
        <p className="mb-3">Местоположение</p>
        <SelectUI itemsAdress={addressStrings} active={activeAddress} onChange={handleChangeAddress} width={300} />
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
          <SelectUI
            itemsPrice={priceVariable}
            isPrice={true}
            onChange={handleChange}
            active={String(price?.id ?? "")} // Отображаем выбранную цену
          />
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
