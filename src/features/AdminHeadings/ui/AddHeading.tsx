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
      <h2 className="text-[18px] text-white md:text-[32px] font-semibold">
        {isEditing ? "Редактировать обзор активности" : "Добавить обзор активности"}
      </h2>
      <CancelIcon
        onClick={cancel}
        className="text-red-600 absolute top-3 right-3 cursor-pointer hover:scale-110 duration-150"
        sx={{ width: 50, height: 50 }}
      />
      <div className="flex flex-col-reverse text-white h-auto w-[100%] lg:flex-row justify-between pt-12 bg-[#222224] gap-5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="flex flex-col gap-[11px]">
              <textarea
                className="w-full lg:w-[444px] h-full resize-none bg-[#131313] text-2xl text-white rounded-[5px] p-3"
                placeholder="Добавить заголовок ..."
                {...register("title")}
              />
            </div>
            <div className="w-full lg:w-[444px] h-[176px] bg-[#131313] p-5 flex flex-col gap-[17px] rounded-[5px]">
              <div className="h-[46px] bg-[#C8180C] rounded-[28px] flex justify-center items-center">
                <button className="text-[15px] md:text-[18px] font-semibold w-full">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    Загрузите изображение
                  </label>
                  <input id="image-upload" type="file" className="hidden" onChange={handleImageChange} ref={inputFileRef} />
                </button>
              </div>
              <p className="text-[15px] font-semibold">Допустимые форматы:</p>
              <div className="flex gap-3">
                {formats.map((obj, i) => (
                  <span key={i} className="bg-slate-500 px-3 lg:px-5 lg:py-1 rounded-xl">
                    {obj}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[444px] h-[56px] bg-[#C8180C] rounded-[47px] flex justify-center items-center p-30">
              <button className="text-[15px] md:text-[18px] font-semibold w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Загрузка..." : isEditing ? "Сохранить изменения" : "Сохранить и опубликовать"}
              </button>
            </div>
          </div>
        </form>
        <div className="w-full lg:w-[680px] h-[200px] lg:h-[400px] bg-[#131313] flex justify-center items-center border border-indigo-800 mt-0 lg:mt-1">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="object-contain h-full"
              onClick={() => inputFileRef.current?.click()}
            />
          ) : item?.image ? (
            <img
              src={item.image}
              alt="Uploaded"
              className="object-contain h-full"
              onClick={() => inputFileRef.current?.click()}
            />
          ) : (
            <img src="/svg/upload.svg" alt="Upload" onClick={() => inputFileRef.current?.click()} />
          )}
        </div>
      </div>
    </ModalUI>
  );
};

export default AddHeading;
