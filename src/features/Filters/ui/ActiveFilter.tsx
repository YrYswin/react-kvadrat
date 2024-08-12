import React from "react";
import SelectUI from "./SelectUI";
import FilterName from "./FilterName";
import ProductFilters from "./ProductFilters";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setFilterType, setPage } from "../store/slice";
import PaginateMenu from "./PaginateMenu";
import { selectHouseCount } from "../../AdminRealEstate/store/slice";

const ActiveFilter = ({ open }) => {
  const dispatch = useDispatch();
  const count = useSelector(selectHouseCount);
  const { filterType, page } = useSelector(selectFilter);
  const changeFilterType = (value) => {
    dispatch(setFilterType(value));
  };
  const changePage = (value) => {
    dispatch(setPage(value));
  };
  return (
    <>
      <div className="flex items-center justify-between mb-5 text-white ">
        <h3 className="text-xs md:text-sm">
          Показаны {page + 1}-{page + count <= 8 ? count : 8} из {count} результатов
        </h3>
        <div onClick={() => open(true)} className="relative inline-block pr-3 font-medium cursor-pointer md:hidden">
          <span className="text-white">Фильтр</span>
          <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
          <div className="absolute top-2 right-0 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
        </div>
        <div className="flex gap-2 items-end max-500:flex-col max-500:items-start">
          <span>Сортировка:</span>
          <SelectUI items={["По популярности", "По цене"]} active={filterType} onChange={changeFilterType} />
        </div>
      </div>

      <FilterName />
      <div className="w-full mt-10">
        <ProductFilters />
        <PaginateMenu changePage={changePage} active={page} maxvalue={count} />
      </div>
    </>
  );
};

export default ActiveFilter;
