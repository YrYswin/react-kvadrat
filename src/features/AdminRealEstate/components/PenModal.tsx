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
import PenModSelect from "./PenModSelect";
import EstateType from "./EstateType";
import { CircularProgress } from "@mui/material";
import { selectHouseStatus } from "../store/slice";

const PenModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { houseId } = useParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [activeAddress, setActiveAddress] = useState<string>("Микрарайоны");
  const [images, setImages] = useState<File[]>([]);
  const [estate, setEstate] = useState<string>("");
  const [checkboxState, setCheckboxState] = useState({
    garden: false,
    elevator: false,
    close_area: false,
    open_area: false,
    fenced_yard: false,
    playground: false,
    insulated: false,
    cross_layout: false,
  });

  const isEditing = Boolean(houseId);
  const status = useSelector(selectHouseStatus);

  const isLoading = status === "loading";

  const handleChangeAddress = (value: string) => {
    setActiveAddress(value);
  };

  const handleChangeEstate = (value: string) => {
    setEstate(value);
  };

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImages = filesArray.map((file) => file);

      setImages((prevImages) => [...prevImages, ...newImages]);
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
      image: images[0],
      category: estate,
      city: activeAddress,
    };
    console.log(formData);
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
          house: formData,
          images: images.slice(1),
          navigate,
        })
      );
    }
  };

  useEffect(() => {
    if (item) {
      reset(item);
      setCheckboxState({
        garden: item.garden || false,
        elevator: item.elevator || false,
        close_area: item.close_area || false,
        open_area: item.open_area || false,
        fenced_yard: item.fenced_yard || false,
        playground: item.playground || false,
        insulated: item.insulated || false,
        cross_layout: item.cross_layout || false,
      });
    }
  }, [item, reset]);

  return (
    <ModalUI borderColor={isEditing ? "#00008b" : "green"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-white py-2 px-2 md:py-0 md:px-0 relative w-full max-w-[950px] h-[540px] md:h-[580px]"
      >
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
                  required
                />
              </div>
              <div className="flex flex-col md:gap-1 w-full md:w-[300px]">
                <input
                  type="number"
                  className="w-full h-[15px] md:h-[35px] bg-[#131313] text-white text-[10px] md:text-[15px] rounded-md p-1 md:p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
                  placeholder="Площадь (м2)"
                  {...register("square_footage")}
                  required
                />
                <div className="relative md:mt-2">
                  <input
                    type="number"
                    className="w-full h-[15px] md:h-[35px] bg-[#131313] text-white text-[10px] md:text-[15px] rounded-md p-1 md:p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
                    placeholder="Цена"
                    {...register("price")}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-evenly my-2">
              <PenModSelect active={activeAddress} onChange={handleChangeAddress} />
              <EstateType active={estate} onChange={handleChangeEstate} />
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
                <Selectors
                  count={5}
                  register={register("garage_how_many")}
                  name="garage_how_many"
                  label="Гараж"
                  value={item?.garage_how_many}
                />
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
              <div className="flex gap-10 items-end">
                <h2 className="text-[12px] md:text-[16px]">Удобства </h2>
                <p className="text-[6px] md:text-[12px]">добавьте нужные удобства для вашей квартиры</p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-[6px] my-2 ">
                <CustomCheckbox
                  name={"garden"}
                  title={"Сад"}
                  checked={checkboxState.garden}
                  onChange={() => onCheckboxChange("garden")}
                />
                <CustomCheckbox
                  name={"elevator"}
                  title={"Лифт"}
                  checked={checkboxState.elevator}
                  onChange={() => onCheckboxChange("elevator")}
                />
                <CustomCheckbox
                  name={"open_area"}
                  title={"Открытая территория"}
                  checked={checkboxState.open_area}
                  onChange={() => onCheckboxChange("open_area")}
                />
                <CustomCheckbox
                  name={"close_area"}
                  title={"Закрытая территория"}
                  checked={checkboxState.close_area}
                  onChange={() => onCheckboxChange("close_area")}
                />
                <CustomCheckbox
                  name={"fenced_yard"}
                  title={"Забор огорожен"}
                  checked={checkboxState.fenced_yard}
                  onChange={() => onCheckboxChange("fenced_yard")}
                />
                <CustomCheckbox
                  name={"playground"}
                  title={"Детская площадка"}
                  checked={checkboxState.playground}
                  onChange={() => onCheckboxChange("playground")}
                />
                <CustomCheckbox
                  name={"insulated"}
                  title={"Утеплен"}
                  checked={checkboxState.insulated}
                  onChange={() => onCheckboxChange("insulated")}
                />
                <CustomCheckbox
                  name={"cross_layout"}
                  title={"Сквозная планировка"}
                  checked={checkboxState.cross_layout}
                  onChange={() => onCheckboxChange("cross_layout")}
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex md:flex-col md:items-center gap-1 h-[150px] md:h-[430px]">
              <div
                className="w-[170px] md:w-[230px] h-[70px] bg-[#262626] flex items-center justify-evenly cursor-pointer"
                onClick={() => inputRef.current?.click()}
              >
                {images.length >= 8 ? (
                  <p className="text-[8px] md:text-xs text-center">Достигнуто максимальное количество фото</p>
                ) : (
                  <>
                    <img src="/svg/upload.svg" alt="upload" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                    <div>
                      <p className="text-[8px] md:text-xs">Добавить фото</p>
                      <input type="file" className="hidden" ref={inputRef} onChange={handleFileChange} />
                    </div>
                  </>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-[6px]">
                {images.map((image, i) => (
                  <div key={i} className="w-[120px] h-[80px] overflow-auto">
                    <img
                      className="border border-red-700 w-full h-full object-cover"
                      src={URL.createObjectURL(image)}
                      alt={`House Image ${i}`}
                    />
                  </div>
                ))}
              </div>
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

              <button
                type="submit"
                // disabled={isLoading}
                className={`bg-red-600 rounded-full py-1 px-3 md:py-2 md:px-4 flex items-center gap-3 text-[10px] md:text-sm ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <CircularProgress size={16} color="inherit" />
                ) : (
                  <>
                    <AddIcon />
                    Добавить
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </ModalUI>
  );
};

export default PenModal;
