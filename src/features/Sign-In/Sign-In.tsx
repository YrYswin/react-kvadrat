import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { adminLogin } from "./store/action";
import { loginState } from "./store/types";
import { getUserLS } from "../../utils";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, register } = useForm<loginState>();

  useEffect(() => {
    const user = getUserLS();
    if (user) {
      navigate("/admin");
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<loginState> = (values) => {
    dispatch(adminLogin({ data: values, navigate }));
  };

  return (
    <div className="pt-[10vw] sm:pt-[100px] px-[5vw]">
      <h1 className="text-xl sm:text-2xl font-semibold text-center mb-5 sm:mb-[20px] text-white">ВОЙТИ</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto bg-[#1A1A1A] border flex flex-col gap-3 md:gap-7 py-4 px-4 md:py-[83px] md:px-[64px] rounded-md w-[65%] md:w-[40%]"
      >
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-[12px] md:text-[16px]">Имя пользователя*</label>
          <input
            type="username"
            {...register("username")}
            className="bg-white rounded-md pl-[24px] py-[5px] md:py-[15px] placeholder:text-[10px] md:placeholder:text-[16px]"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-[12px] md:text-[16px]">Введите пароль*</label>
          <input
            type="password"
            {...register("password")}
            className="bg-white rounded-md pl-[24px] py-[5px] md:py-[15px] placeholder:text-[10px] md:placeholder:text-[16px]"
            placeholder="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <input className="cursor-pointer" type="checkbox" />
          <span className="flex gap-1 text-white ">
            <p className="text-gray-500 text-[10px] md:text-[17px]">Я согласен с </p> <p className="text-[10px] md:text-[17px]">Условиями предоставления услуг</p>
          </span>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-red-600 rounded-full hover:bg-red-700 align-center py-[8px] md:py-[15px] mt-[15px] md:mt-[19px]"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
