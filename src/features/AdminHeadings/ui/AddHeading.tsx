import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import { selectHeadings, selectIsLoading } from "../store/selectors";
import { getHeadingById, postHeading, patchHeading } from "../store/action";
import { SubmitHandler, useForm } from "react-hook-form";
import ModalUI from "../../../shared/helpers/ModalUI";
import CancelIcon from "@mui/icons-material/Cancel";
import { headingClear } from "../store/slice";
import { PostHouseState } from "../../AdminRealEstate/store/types";

const AddHeading: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { headingId } = useParams();
  const { item } = useSelector(selectHeadings);
  const isLoading = useSelector(selectIsLoading);
  const isEditing = !!headingId;

  const { handleSubmit, register, reset } = useForm<PostHouseState>({
    defaultValues: { title: "", image: "" },
  });

  React.useEffect(() => {
    if (headingId) {
      dispatch(getHeadingById(Number(headingId)));
    }
  }, [dispatch, headingId]);

  React.useEffect(() => {
    if (item) {
      reset({
        title: item.title || "",
        image: item.image || "",
      });
    }
  }, [item, reset]);

  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const [image, setImage] = React.useState<File | null>(null);

  const onSubmit: SubmitHandler<PostHouseState> = async (value) => {
    if (isEditing) {
      console.log("click");
      dispatch(patchHeading({ data: { ...value, image, id: Number(headingId) }, navigate }));
    } else {
      if (!image) return;
      dispatch(postHeading({ data: { title: value.title, image }, navigate }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const cancel = () => {
    navigate("/admin/headings");
    if (isEditing) {
      dispatch(headingClear());
    }
  };

  const formats = ["IMG", "JPG", "PNG"];

  return (
    <ModalUI bgColor="#222224" borderColor={isEditing ? "blue" : "lime"}>
  <h2 className="text-[14px] sm:text-[18px] md:text-[24px] font-semibold text-white text-center mb-4">
    {isEditing ? "Редактировать обзор активности" : "Добавить обзор активности"}
  </h2>
  <CancelIcon
    onClick={cancel}
    className="text-red-600 absolute top-3 right-3 cursor-pointer hover:scale-110 duration-150"
    sx={{ width: { sm: 45, md: 50 }, height: { sm: 45, md: 50 } }}
  />
  <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 pt-8 lg:pt-12 bg-[#222224] text-white w-full h-full max-h-[calc(100vh-100px)] overflow-auto p-4">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row justify-between w-full lg:w-auto">
      <div className="flex flex-col gap-5 lg:gap-8 w-full lg:w-auto">
        <div className="flex flex-col gap-2 lg:gap-[11px]">
          <textarea
            className="w-full lg:w-[444px] h-[70px] lg:h-[150px] resize-none bg-[#131313] text-lg md:text-2xl text-white rounded-[5px] p-3"
            placeholder="Добавить заголовок ..."
            {...register("title")}
          />
        </div>
        <div className="w-full lg:w-[444px] h-[140px] md:h-[200px] bg-[#131313] p-3 md:p-5 flex flex-col gap-3 lg:gap-[17px] rounded-[5px] overflow-auto">
          <div className="h-[40px] md:h-[46px] bg-[#C8180C] rounded-[28px] flex justify-center items-center">
            <button className="text-[13px] md:text-[15px] font-semibold w-full">
              <label htmlFor="image-upload" className="cursor-pointer">
                Загрузите изображение
              </label>
              <input id="image-upload" type="file" className="hidden" onChange={handleImageChange} ref={inputFileRef} />
            </button>
          </div>
          <p className="text-[13px] md:text-[15px] font-semibold">Допустимые форматы:</p>
          <div className="flex gap-2 md:gap-3">
            {formats.map((obj, i) => (
              <span key={i} className="bg-slate-500 px-2 md:px-3 lg:px-5 py-1 rounded-xl">
                {obj}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[444px] h-[50px] md:h-[56px] bg-[#C8180C] rounded-[47px] flex justify-center items-center">
          <button className="text-[13px] md:text-[15px] lg:text-[18px] font-semibold w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Загрузка..." : isEditing ? "Сохранить изменения" : "Сохранить и опубликовать"}
          </button>
        </div>
      </div>
    </form>
    <div className="w-full lg:w-[680px] h-[200px] md:h-[300px] lg:h-[400px] bg-[#131313] flex justify-center items-center border border-indigo-800 overflow-hidden p-14">
  {image ? (
    <img
      src={URL.createObjectURL(image)}
      alt="Uploaded"
      className="object-contain max-w-full max-h-full cursor-pointer"
      onClick={() => inputFileRef.current?.click()}
    />
  ) : item?.image ? (
    <img
      src={item.image}
      alt="Uploaded"
      className="object-contain max-w-full max-h-full cursor-pointer"
      onClick={() => inputFileRef.current?.click()}
    />
  ) : (
    <img src="/svg/upload.svg" alt="Upload" className="cursor-pointer" onClick={() => inputFileRef.current?.click()} />
  )}
</div>

  </div>
</ModalUI>


  );
};

export default AddHeading;
