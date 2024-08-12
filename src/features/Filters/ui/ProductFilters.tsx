import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import ProductBlock from "../../Products/ui/ProductBLock";
import ProductBlockSkeleton from "../../../shared/helpers/ProductBlockSkeleton";
import NotFoundProduct from "../../../shared/helpers/NotFoundProduct";
import { getHouses } from "../../AdminRealEstate/store/action";
import { Status } from "../../AdminRealEstate/store/types";
import { selectHouses } from "../../AdminRealEstate/store/slice";
import { useAppDispatch } from "../../../app/store";
import { selectFilter } from "../store/slice";

const ProductFilters = () => {
  const dispatch = useAppDispatch();
  const { items, status, count } = useSelector(selectHouses);
  const { price, typeHouse, comfort, page } = useSelector(selectFilter);

  React.useEffect(() => {
    dispatch(
      getHouses({
        params: {
          price,
          typeHouse,
          comfort,
        },
        page: page || 0,
      })
    );
  }, [price, typeHouse, comfort, page]);

  const productsList = items.map((item, index) => <ProductBlock key={index} {...item} />);
  const skeletonsList = [...new Array(8)].map((_, i) => <ProductBlockSkeleton key={i} />);

  return status === Status.ERROR ? (
    <NotFoundProduct title="Ошибка с сервером" />
  ) : (
    <Box className="grid grid-cols-4 gap-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-500:grid-cols-2">
      {status === Status.LOADING ? skeletonsList : count > 0 ? productsList : <NotFoundProduct title="Ничего не найдено" />}
    </Box>
  );
};

export default ProductFilters;
