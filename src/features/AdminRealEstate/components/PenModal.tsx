import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import SelectAutoWidth from "./SelectAutoWidth";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ModalUI from "../../../shared/helpers/ModalUI";
import { getHouseById, postHouse, patchHouse } from "../store/action";
import { itemClear, selectHouses } from "../store/slice";
import CustomCheckbox from "./CheckboxUI";
import { PostHouseState } from "../store/types";

const PenModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { houseId } = useParams();
  const isEditing = !!houseId;

  const cancel = () => {
    navigate("/admin/real-estate");
    dispatch(itemClear());
  };

  React.useEffect(() => {
    dispatch(itemClear());
    if (isEditing) {
      dispatch(getHouseById(Number(houseId)));
    }
  }, [houseId, dispatch, isEditing]);

  const { item } = useSelector(selectHouses);
  const { register, handleSubmit, reset } = useForm<PostHouseState>({
    defaultValues:
      isEditing && item
        ? {
            title: item.title,
            price: item.price,
            category: item.category,
            description: item.description,
            city: item.city,
            pool: item.pool,
            gym: item.gym,
            garage: item.garage,
            parking: item.parking,
            garden: item.garden,
            fireplace: item.fireplace,
            area: item.area,
            elevator: item.elevator,
            clubhouse: item.clubhouse,
            bedrooms: item.bedrooms,
            rooms: item.rooms,
            garage_how_many: item.garage_how_many,
            kitchen: item.kitchen,
            image: item.image,
            square_footage: item.square_footage,
            bathroom: item.bathroom,
            laundry: item.laundry,
          }
        : {},
  });
  const [selectedImage, setSelectedImage] = React.useState<string | ArrayBuffer | null>(null);
  const [image, setImage] = React.useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const [checkboxState, setCheckboxState] = React.useState({
    pool: item?.pool || false,
    gym: item?.gym || false,
    garage: item?.garage || false,
    parking: item?.parking || false,
    garden: item?.garden || false,
    fireplace: item?.fireplace || false,
    elevator: item?.elevator || false,
    clubhouse: item?.clubhouse || false,
    laundry: item?.laundry || false,
    area: item?.area || false,
  });

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

  React.useEffect(() => {
    if (item) {
      const formattedItem: PostHouseState = {
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        city: item.city,
        pool: item.pool,
        gym: item.gym,
        garage: item.garage,
        parking: item.parking,
        garden: item.garden,
        fireplace: item.fireplace,
        area: item.area,
        elevator: item.elevator,
        clubhouse: item.clubhouse,
        bedrooms: item.bedrooms,
        rooms: item.rooms,
        garage_how_many: item.garage_how_many,
        kitchen: item.kitchen,
        image: item.image,
        square_footage: item.square_footage,
        bathroom: item.bathroom,
        laundry: item.laundry,
      };
      reset(formattedItem);
    }
  }, [item, reset]);

  return (
    <ModalUI borderColor={isEditing ? "#00008b" : "green"}>
      <form onSubmit={handleSubmit(onSubmit)} className="text-white relative pt-1">
        <div className="w-[750px] h-[50px] rounded-lg bg-[#C8180C] max-500:w-full flex items-center px-5 absolute left-1/2 transform -translate-x-1/2">
          <p className="text-2xl">Создать новую карточку для недвижимости</p>
        </div>

        <div className="bg-[#131313] text-white rounded-md p-1 md:py-4 mt-5 md:mt-16 flex items-center gap-5">
          <label className="ml-2 cursor-pointer w-full flex items-center">
            <img
              src={item?.image || typeof selectedImage === "string" ? String(selectedImage) : "/svg/upload.svg"}
              alt="img"
              className="w-[30px] h-[30px] mr-2"
            />
            <p className="text-xs">Добавить фото</p>
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <div className="flex justify-evenly gap-2 mt-2 md:mt-4">
          <div className="relative">
            <textarea
              className="w-[170px] md:w-[290px] h-[50px] md:h-[80px] resize-none bg-[#131313] text-[10px] md:text-[20px] text-white rounded-md pl-5 placeholder-[#B3B3B3] border border-gray-600 md:border-2 md:border-gray-600"
              placeholder="Добавить заголовок..."
              {...register("title")}
            />
          </div>
          <div className="flex flex-col md:gap-1 mt-0 w-[190px] md:w-[300px]">
            <input
              type="number"
              className="w-full h-[20px] md:h-[35px] bg-[#131313] text-white text-[10px] md:text-[15px] rounded-md p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
              placeholder="Площадь (м2)"
              {...register("square_footage")}
            />
            <div className="relative mt-1 md:mt-2">
              <input
                type="number"
                className="w-full h-[20px] md:h-[35px] bg-[#131313] text-white text-[10px] md:text-[15px] rounded-md p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
                placeholder="Цена"
                {...register("price")}
              />
            </div>
          </div>
        </div>

        <h4>Информация для детальной страницы</h4>
        <div className="flex mt-4">
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Комнаты</p>
              <img className="ml-2" width={16} src="/svg/Rooms.svg" alt="Rooms" />
            </div>
            <SelectAutoWidth count={5} register={register} name="rooms" defaultValue={item?.rooms} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Ванна</p>
              <img className="ml-2" width={16} src="/svg/Baths.svg" alt="bathroom" />
            </div>
            <SelectAutoWidth count={5} register={register} name="bathroom" defaultValue={item?.bathroom} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Спальня</p>
              <img className="ml-2" width={16} src="/svg/Bedroom.svg" alt="Bedroom" />
            </div>
            <SelectAutoWidth count={5} register={register} name="bedrooms" defaultValue={item?.bedrooms} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Кухня</p>
              <img className="ml-2" width={16} src="/svg/kitchen.svg" alt="kitchen" />
            </div>
            <SelectAutoWidth count={5} register={register} name="kitchen" defaultValue={item?.kitchen} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Гараж</p>
              <img className="ml-2" width={16} src="/svg/Garage.svg" alt="garage_how_many" />
            </div>
            <SelectAutoWidth count={5} register={register} name="garage_how_many" defaultValue={item?.garage_how_many} />
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-[6px] my-2">
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
              title={"Тренажерный зал"}
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
            />
            <CustomCheckbox
              name={"pool"}
              title={"Бассейн"}
              checked={checkboxState.pool}
              onChange={() => onCheckboxChange("pool")}
            />
          </div>
        </div>

        <div className="flex justify-end m-3 gap-2">
          <button onClick={cancel} type="button" className="bg-gray-700 rounded-full py-2 px-4 flex items-start gap-3 text-sm">
            <CloseIcon />
            Отмена
          </button>

          <button type="submit" className="bg-red-600 rounded-full py-2 px-4 flex items-start gap-3 text-sm">
            <AddIcon />
            Добавить
          </button>
        </div>
      </form>
    </ModalUI>
  );
};

export default PenModal;
