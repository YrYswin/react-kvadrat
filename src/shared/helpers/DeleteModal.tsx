import React from "react";
import ModalUI from "./ModalUI";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { deleteHeading } from "../../features/AdminHeadings/store/action";
import { deleteHouse } from "../../features/AdminRealEstate/store/action";

const DeleteModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const isHeading = !!params?.headingId;
  console.log(isHeading);

  const cancelClick = () => {
    navigate(isHeading ? `/admin/headings` : `/admin/real-estate`);
  };
  const deleteItem = (id: number) => {
    if (isHeading) {
      dispatch(deleteHeading({ id, navigate }));
    } else if (!isHeading) {
      dispatch(deleteHouse({ id, navigate }));
    }
  };

  return (
    <ModalUI bgColor="#262626" borderColor="red">
      <div className="flex flex-col gap-5 p-5 text-white">
        <h1 className="text-2xl whitespace-nowrap">
          Вы действительно хотите удалить {isHeading ? "Объявление" : "Недвижимость"} ?
        </h1>
        <div className="flex justify-evenly">
          <button className="bg-lime-600 py-2 px-8 rounded-full text-xl hover:bg-lime-500" onClick={cancelClick}>
            Отмена
          </button>
          <button
            className="bg-red-600 py-2 px-8 rounded-full text-xl hover:bg-red-500"
            onClick={() => deleteItem(Number(isHeading ? params.headingId : params.houseId))}
          >
            Удалить
          </button>
        </div>
      </div>
    </ModalUI>
  );
};

export default DeleteModal;
