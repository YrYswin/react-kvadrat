import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import {
  setPriceClear,
  clearTypeHouse,
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
  setClearFilter,
  selectFilter,
} from "../store/slice";

const FilterName = () => {
  const dispatch = useAppDispatch();
  const { price, typeHouse, comfort } = useSelector(selectFilter);
  const [filtered, setFiltered] = React.useState(false);

  React.useEffect(() => {
    const hasActiveFilter =
      !!price ||
      !!typeHouse ||
      !!comfort.pool ||
      !!comfort.gym ||
      !!comfort.garage ||
      !!comfort.parking ||
      !!comfort.garden ||
      !!comfort.fireplace ||
      !!comfort.elevator ||
      !!comfort.clubhouse ||
      !!comfort.laundry ||
      !!comfort.area;
    setFiltered(hasActiveFilter);
  }, [price, typeHouse, comfort]);

  interface GetFilterState {
    set: any;
    filter: any;
    name: string;
  }

  const GetFilters: React.FC<GetFilterState> = ({ set, filter, name }) => {
    if (!!filter || filter) {
      return (
        <div className="flex items-center gap-1 px-5 py-1 text-white bg-red-600 rounded-full shrink-0 whitespace-nowrap">
          <p className="text-lg sm:text-sm md:text-lg">{name ? name : filter}</p>
          <ClearIcon sx={{ width: 15, height: 15 }} onClick={() => dispatch(set(filter))} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="text-white ">
      <p className="mb-3">Активный фильтр</p>
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex flex-wrap gap-4 lg:w-[550px] xl:w-full md:w-[290px]">
          <GetFilters set={setPriceClear} filter={price.max && price.min} name={price.label} />
          <GetFilters set={clearTypeHouse} filter={typeHouse} name={typeHouse} />
          <GetFilters set={setPool} filter={comfort.pool} name={"Бассейн"} />
          <GetFilters set={setGym} filter={comfort.gym} name={"Тренажерный зал"} />
          <GetFilters set={setGarage} filter={comfort.garage} name={"Гараж"} />
          <GetFilters set={setParking} filter={comfort.parking} name={"Парковка"} />
          <GetFilters set={setGarden} filter={comfort.garden} name={"Сад"} />
          <GetFilters set={setFireplace} filter={comfort.fireplace} name={"Камин"} />
          <GetFilters set={setElevator} filter={comfort.elevator} name={"Лифт"} />
          <GetFilters set={setClubhouse} filter={comfort.clubhouse} name={"Клуб"} />
          <GetFilters set={setLaundry} filter={comfort.laundry} name={"Прачечная"} />
          <GetFilters set={setArea} filter={comfort.area} name={"Площадка"} />
        </div>
        <div className="relative inline-block whitespace-nowrap">
          {filtered && (
            <span
              className="hidden md:block text-white hover:text-white hover:underline hover:underline-offset-4 hover:cursor-pointer text-lg"
              onClick={() => dispatch(setClearFilter())}
            >
              очистить все
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterName;
