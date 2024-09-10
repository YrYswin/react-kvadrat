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

interface Props {
  id?: number;
}

const AdminRealEstate: React.FC<Props> = () => {
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
                marginRight: "10px",
                color: "white",
                alignItems: "center",
                backgroundColor: "#262626",
                padding: "10px 20px",
              }}
              key={obj.id}
            >
              <div className="w-[70px] md:w-[150px] h-[60px] md:h-[90px] overflow-hidden">
                <img className="w-full h-full object-cover" src={obj.image ? obj.image : "/svg/upload.svg"} alt="Photos" />
              </div>
              <p className=" text-[9px] md:text-lg">{obj.title || "3 - комнатная квартира на улице Киевская 30"}</p>
              <p className=" text-[9px] md:text-lg">{`${obj.square_footage || "м2.77.3"}м2`}</p>
              <p className="text-[9px] md:text-lg">{obj.price || "12млн.$"}$</p>
              <div className="flex gap-2 md:gap-5">
                <img
                  src="/svg/pen.svg"
                  onClick={() => navigate(`/admin/real-estate/edit/${obj.id}`)}
                  alt="Pen"
                  className="cursor-pointer hover:scale-125 transition-transform duration-150 pen-icon md:w-[27px] w-[15px] h-[15px] md:h-[27px]"
                />
                <img
                  onClick={() => navigate(`/admin/real-estate/delete/${obj.id}`)}
                  src="/svg/trash.svg"
                  alt="Trash"
                  className="cursor-pointer hover:scale-125 transition-transform duration-150 pen-icon md:w-[27px] w-[15px] h-[15px] md:h-[27px]"
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
          <div>
            <h1 className="text-white text-sm md:text-2xl">Публикация недвижимости</h1>
            <div className="text-red-600 text-[10px] md:text-[17px]">Количество товаров({items.length})</div>
          </div>

          <button
            onClick={() => navigate("/admin/real-estate/add")}
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
            width: "94%",
            height: "calc(100vh - 300px)",
            overflow: "auto",
          }}
          className="scroll-container-x"
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
