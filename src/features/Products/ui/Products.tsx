import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import { getHouses } from "../../AdminRealEstate/store/action";
import { Status } from "../../AdminRealEstate/store/types";

import NotFoundProduct from "../../../shared/helpers/NotFoundProduct";
import DropDownMen from "./DropDownMen";
import ProductBLock from "./ProductBLock";
import Container from "../../../shared/helpers/Container";
import ProductBlockSkeleton from "../../../shared/helpers/ProductBlockSkeleton";
import { selectHouses } from "../../AdminRealEstate/store/slice";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectHouses);

  React.useEffect(() => {
    dispatch(getHouses({ params: null, page: 0 }));
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const productsList = items.map((obj, index) => (
    <div className="w-[230px] mx-auto pt-[20px] md:pt-[25px] lg:w-[22%]" key={index}>
      <ProductBLock {...obj} />
    </div>
  ));

  const skeletonList = [...new Array(8)].map((_, index) => (
    <div className="w-[230px] mx-auto pt-[20px] md:pt-[25px] lg:w-[22%]" key={items.length + index}>
      <ProductBlockSkeleton />
    </div>
  ));

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-start gap-7 justify-between md:items-end mt-[-90px]">
        <DropDownMen />
        <div className="max-w-[808px] min-h-[74px] font-inter text-sm md:text-[20px] font-semibold text-white">
          <span className="top-[30px] relative w-[670px] uppercase bg-black">
            выбирайте квартиру для жизни или инвестиций. предложение доступно
          </span>
          <span className="bg-[#DC2215] px-5 rounded-sm top-[30px] relative uppercase">к покупке прямо сейчас</span>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full lg:overflow-x-hidden flex lg:flex-wrap gap-5 items-start overflow-x-scroll">
          {status === Status.LOADING ? (
            skeletonList
          ) : status === Status.ERROR ? (
            <NotFoundProduct title="Ошибка с сервером" />
          ) : items.length > 0 ? (
            productsList
          ) : (
            <NotFoundProduct title="Пока нет недвижимости" />
          )}
        </div>
      </div>
      <div className="flex justify-center p-5">
        <Link to={"/watch"} onClick={scrollToTop}>
          <button className="bg-[red] text-white py-3 px-7 text-xl rounded-full">Смотреть все</button>
        </Link>
      </div>
    </Container>
  );
};

export default Products;
