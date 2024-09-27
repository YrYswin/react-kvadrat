import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import {
  setPrice,
  setTypeHouse,
  setElevator,
  setOpenArea,
  setCloseArea,
  setFencedYard,
  setPlayground,
  setInsulated,
  setCrossLayout,
  setGarden,
  selectFilter,
  setPlace,
} from "../store/slice";
import SelectUI from "./SelectUI";
import { priceVariable } from "../../../utils/data";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Address {
  id: number;
  region: string;
}

interface Props {
  open: (open: boolean) => void;
}

const Type: React.FC<Props> = ({ open }) => {
  const API = "http://167.172.74.113/addresses/?limit=1000";
  const dispatch = useAppDispatch();
  const { typeHouse, comfort, price } = useSelector(selectFilter);
  const [address, setAddress] = useState<Address[]>([]);
  const [activeAddress, setActiveAddress] = useState<string>("");

  const houseType = ["Все", "Дома", "Квартиры", "Участки", "Комерческая недвижимость"];

  const handleChange = (value: string) => {
    const option = priceVariable.find((x) => x.id === Number(value));
    if (option) {
      dispatch(setPrice(option));
    }
  };

  const handleChangeAddress = (value: string) => {
    setActiveAddress(value);
    dispatch(setPlace(value));
  };

  async function getAddress(): Promise<void> {
    try {
      const res = await axios.get<{ results: Address[] }>(API);
      if (Array.isArray(res.data.results)) {
        setAddress(res.data.results);
      } else {
        console.error("Unexpected data format", res.data);
        setAddress([]);
      }
    } catch (error) {
      console.log(error);
      setAddress([]);
    }
  }

  useEffect(() => {
    getAddress();
  }, []);

  const addressStrings = Array.isArray(address) ? address.map((item) => item.region) : [];

  return (
    <div className="text-white bg-[#111111] lg:w-[350px] md:w-[850px] p-5 rounded">
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
          <SelectUI itemsPrice={priceVariable} isPrice={true} onChange={handleChange} active={String(price?.id ?? "")} />
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
              <input type="checkbox" checked={comfort.elevator} onChange={() => dispatch(setElevator())} />
              <p>Лифт</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.open_area} onChange={() => dispatch(setOpenArea())} />
              <p>Oткрытая территория</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.close_area} onChange={() => dispatch(setCloseArea())} />
              <p>Закрытая территория</p>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.fenced_yard} onChange={() => dispatch(setFencedYard())} />
              <p>Забор огорожен</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.playground} onChange={() => dispatch(setPlayground())} />
              <p>Дектская площадка</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.insulated} onChange={() => dispatch(setInsulated())} />
              <p>Утеплен</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" checked={comfort.cross_layout} onChange={() => dispatch(setCrossLayout())} />
              <p>Сквозная планировка</p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => open(false)}
        className="mt-3 w-[170px] flex justify-center items-center h-[30px] bg-red-700 rounded-xl hover:bg-red-600 lg:hidden"
      >
        Найти
      </div>
    </div>
  );
};

export default Type;
