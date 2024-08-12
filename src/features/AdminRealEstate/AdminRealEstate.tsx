import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { getHouses } from "./store/action";
import { selectHouses } from "./store/slice";
import { Status } from "./store/types";

import AddIcon from "@mui/icons-material/Add";
import NotFoundProduct from "../../shared/helpers/NotFoundProduct";
import AdminProSkeleton from "../../shared/helpers/AdminProSkeleton";

const AdminRealEstate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { items, status, count } = useSelector(selectHouses);

  const skeletonsList = [...new Array(4)].map((_, i) => <AdminProSkeleton key={i} />);

  const ItemRender = () => {
    if (Array.isArray(items)) {
      return (
        <>
          {items.map((obj) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "94%",
                color: "white",
                alignItems: "center",
                backgroundColor: "#262626",
                padding: "10px 20px",
              }}
              key={obj.id}
            >
              <div className="w-[150px] h-[90px] overflow-hidden">
                <img className="w-full h-full object-cover" src={obj.image ? obj.image : "/svg/upload.svg"} alt="Photos" />
              </div>
              <p className="w-[190px]">{obj.title || "3 - комнатная квартира на улице Киевская 30"}</p>
              <p className="w-[220px]">
                {`Площадь: ${obj.square_footage || "м2.77.3"}
                }`}
              </p>
              <p>{obj.price || "12млн.$"}</p>
              <div className="flex gap-5 ">
                <img
                  src="/svg/pen.svg"
                  onClick={() => navigate(`/admin/house-edit/${obj.id}`)}
                  alt="Pen"
                  className="cursor-pointer hover:scale-125 transition-transform duration-150 pen-icon"
                />
                <img
                  src="/svg/trash.svg"
                  alt="Trash"
                  className="cursor-pointer hover:scale-125 transition-transform duration-150 pen-icon"
                />
              </div>
            </Box>
          ))}
        </>
      );
    } else {
      return <div>Houses is not an array</div>;
    }
  };

  React.useEffect(() => {
    dispatch(getHouses({ params: null, page: 0 }));
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          paddingLeft: { xs: "30px", md: "70px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "94%",
            margin: "10px 0",
            padding: "0 10px",
          }}
        >
          <h1 className="text-white text-sm md:text-2xl">Публикация недвижимости</h1>

          <button
            onClick={() => navigate("/admin/house-add")}
            className="text-[10px] h-[25px] md:text-[17px] w-[150px] md:w-[215px] md:h-[57px] bg-[#C8180C] text-white rounded-[30px] flex items-center justify-center gap-3"
          >
            <AddIcon />
            Добавить
          </button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "94%",
            color: "white",
            padding: 2,
            backgroundColor: "rgba(38, 38, 38, 1)",
            fontSize: { xs: "10px", md: "20px" },
          }}
        >
          <p>Фотографии</p>
          <p>Заголовок</p>
          <p>Площадь кв/м2</p>
          <p>Цена</p>
          <p>Действие</p>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {status == Status.LOADING ? (
            skeletonsList
          ) : count > 0 ? (
            ItemRender()
          ) : (
            <NotFoundProduct title="Пока нет недвижимости" />
          )}
        </Box>
      </Box>
    </>
  );
};

export default AdminRealEstate;
