import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ModalUI from "../../../shared/helpers/ModalUI";
import { getHouseById, postHouse, patchHouse } from "../store/action";
import { itemClear, selectHouses } from "../store/slice";
import CustomCheckbox from "./CheckboxUI";
import { PostHouseState } from "../store/types";
import Selectors from "./Selectors";

const PenModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { houseId } = useParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [checkboxState, setCheckboxState] = useState({
    pool: false,
    gym: false,
    garage: false,
    parking: false,
    garden: false,
    fireplace: false,
    elevator: false,
    clubhouse: false,
    laundry: false,
    area: false,
  });

  const isEditing = Boolean(houseId);

  const cancel = () => {
    navigate("/admin/real-estate");
    dispatch(itemClear());
  };

  useEffect(() => {
    if (isEditing) {
      dispatch(getHouseById(Number(houseId)));
    }
    return () => {
      dispatch(itemClear());
    };
  }, [houseId, dispatch, isEditing]);

  const { item } = useSelector(selectHouses);
  const { register, handleSubmit, reset } = useForm<PostHouseState>({
    defaultValues: isEditing && item ? item : {},
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const onCheckboxChange = (name: keyof typeof checkboxState) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const onSubmit: SubmitHandler<PostHouseState> = (data) => {
    const formData = {
      ...data,
      ...checkboxState,
      image: image,
      category: "Дома",
      city: "Бишкек",
    };
    if (isEditing) {
      dispatch(
        patchHouse({
          data: formData,
          id: Number(houseId),
          navigate,
        })
      );
    } else {
      dispatch(
        postHouse({
          data: formData,
          navigate,
        })
      );
    }
  };

  useEffect(() => {
    if (item) {
      reset(item);
      setCheckboxState({
        pool: item.pool || false,
        gym: item.gym || false,
        garage: item.garage || false,
        parking: item.parking || false,
        garden: item.garden || false,
        fireplace: item.fireplace || false,
        elevator: item.elevator || false,
        clubhouse: item.clubhouse || false,
        laundry: item.laundry || false,
        area: item.area || false,
      });
    }
  }, [item, reset]);

  return (
<ModalUI borderColor={isEditing ? "#00008b" : "green"}>
  <form onSubmit={handleSubmit(onSubmit)} className="text-white py-2 px-2 md:py-0 md:px-0 relative w-full max-w-[950px] h-[480px] md:h-[580px]">
    <div className="bg-red-600 p-4 hidden sm:block">
      <p className="text-2xl">Создать новую карточку для недвижимости</p>
    </div>

    <div className="flex flex-col sm:flex-row p-1 md:p-5 gap-5 h-[calc(100%-2.5rem)] overflow-y-auto">
      <div className="flex-1">
        <div className="flex md:flex-row justify-evenly gap-2 md:mt-4">
          <div className="relative m-0">
            <textarea
              className="w-[150px] md:w-[290px] h-[35px] md:h-[80px] resize-none bg-[#131313] text-[10px] md:text-[20px] text-white rounded-md pl-5 placeholder-[#B3B3B3] border border-gray-600 md:border-2 md:border-gray-600"
              placeholder="Добавить заголовок..."
              {...register("title")}
            />
          </div>
          <div className="flex flex-col md:gap-1 w-full md:w-[300px]">
            <input
              type="number"
              className="w-full h-[15px] md:h-[35px] bg-[#131313] text-white text-[10px] md:text-[15px] rounded-md p-1 md:p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
              placeholder="Площадь (м2)"
              {...register("square_footage")}
            />
            <div className="relative md:mt-2">
              <input
                type="number"
                className="w-full h-[15px] md:h-[35px] bg-[#131313] text-white text-[10px] md:text-[15px] rounded-md p-1 md:p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
                placeholder="Цена"
                {...register("price")}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 max-w-[800px] md:flex md:mt-4 md:gap-2 md:max-w-[600px]">
          <div className="md:w-[113px] w-[90px]">
            <Selectors count={5} register={register("rooms")} name="floor" label="Комнаты" value={item?.rooms} />
          </div>
          <div className="md:w-[113px] w-[90px]">
            <Selectors count={5} register={register("bathroom")} name="bathroom" label="Ванна" value={item?.bathroom} />
          </div>
          <div className="md:w-[113px] w-[90px]">
            <Selectors count={5} register={register("bedrooms")} name="bedrooms" label="Спальни" value={item?.bedrooms} />
          </div>
          <div className="md:w-[113px] w-[90px]">
            <Selectors count={5} register={register("kitchen")} name="kitchen" label="Кухни" value={item?.kitchen} />
          </div>
          <div className="md:w-[113px] w-[90px]">
            <Selectors count={5} register={register("garage_how_many")} name="garage_how_many" label="Гараж" value={item?.garage_how_many} />
          </div>
        </div>


        <div className="mt-2 md:mt-4">
          <textarea
            className="w-full resize-none bg-[#131313] text-white rounded-md p-2 mb-2 border-2 border-gray-600"
            placeholder="Описание"
            {...register("description")}
          />
        </div>

        <div className="pt-1">
          <h2 className="text-[10px] md:text-sm">Удобства</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-[6px] my-2 ">
            <CustomCheckbox
              name={"area"}
              title={"Площадь"}
              checked={checkboxState.area}
              onChange={() => onCheckboxChange("area")}
            />
            <CustomCheckbox
              name={"clubhouse"}
              title={"Клубное здание"}
              checked={checkboxState.clubhouse}
              onChange={() => onCheckboxChange("clubhouse")}
            />
            <CustomCheckbox
              name={"elevator"}
              title={"Лифт"}
              checked={checkboxState.elevator}
              onChange={() => onCheckboxChange("elevator")}
            />
            <CustomCheckbox
              name={"fireplace"}
              title={"Камин"}
              checked={checkboxState.fireplace}
              onChange={() => onCheckboxChange("fireplace")}
            />
            <CustomCheckbox
              name={"garage"}
              title={"Гараж"}
              checked={checkboxState.garage}
              onChange={() => onCheckboxChange("garage")}
            />
            <CustomCheckbox
              name={"garden"}
              title={"Сад"}
              checked={checkboxState.garden}
              onChange={() => onCheckboxChange("garden")}
            />
            <CustomCheckbox
              name={"gym"}
              title={"Тренажерный зал"}
              checked={checkboxState.gym}
              onChange={() => onCheckboxChange("gym")}
            />
            <CustomCheckbox
              name={"laundry"}
              title={"Прачечная"}
              checked={checkboxState.laundry}
              onChange={() => onCheckboxChange("laundry")}
            />
            <CustomCheckbox
              name={"parking"}
              title={"Парковка"}
              checked={checkboxState.parking}
              onChange={() => onCheckboxChange("parking")}
              isDoubleOne={true}
            />
            <CustomCheckbox
              name={"pool"}
              title={"Бассейн"}
              checked={checkboxState.pool}
              onChange={() => onCheckboxChange("pool")}
              isDoubleTwo={true}
            />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex md:flex-col md:items-center gap-1 h-[150px] md:h-[430px]">
          {/* {item?.image && <img className="w-[230px] h-[130px] object-cover" src={item.image} alt="image" />} */}
          <div
            className="w-[170px] md:w-[230px] h-[70px] bg-[#262626] flex items-center justify-evenly cursor-pointer"
            onClick={() => inputRef.current?.click()}
          >
            <img src="/svg/upload.svg" alt="upload" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
            <div>
              <p className="text-[8px] md:text-xs">Добавить фото</p>
              <input type="file" className="hidden" ref={inputRef} onChange={handleImageChange} />
            </div>
          </div>
          {image && <img className="w-[230px] h-[130px] object-cover" src={URL.createObjectURL(image)} alt="image preview" />}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={cancel}
            type="button"
            className="bg-gray-700 rounded-full py-1 px-3 md:py-2 md:px-4 flex items-center gap-3 text-[10px] md:text-sm"
          >
            <CloseIcon />
            Отмена
          </button>

          <button type="submit" className="bg-red-600 rounded-full py-1 px-3 md:py-2 md:px-4 flex items-center gap-3 text-[10px] md:text-sm">
            <AddIcon />
            Добавить
          </button>
        </div>
      </div>
    </div>
  </form>
</ModalUI>


  );
};

export default PenModal;
