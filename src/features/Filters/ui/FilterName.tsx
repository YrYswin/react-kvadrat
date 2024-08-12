import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
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

  const getFilters = (set, filter, name) => {
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
          {getFilters(setPriceClear, price.max && price.min, price.label)}
          {getFilters(clearTypeHouse, typeHouse, `Тип дома ${typeHouse}`)}
          {getFilters(setPool, comfort.pool, "Бассейн")}
          {getFilters(setGym, comfort.gym, "Cпортзал")}
          {getFilters(setGarage, comfort.garage, "Гараж")}
          {getFilters(setParking, comfort.parking, "Стоянка")}
          {getFilters(setGarden, comfort.garden, "Сад")}
          {getFilters(setFireplace, comfort.fireplace, "Камин")}
          {getFilters(setElevator, comfort.elevator, "Лифт")}
          {getFilters(setClubhouse, comfort.clubhouse, "Клубный дом")}
          {getFilters(setLaundry, comfort.laundry, "Прачечная")}
          {getFilters(setArea, comfort.area, "Дектская Площадка")}
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
