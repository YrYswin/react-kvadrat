import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { adminLogin } from "./store/action";
import { loginState } from "./store/types";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, register } = useForm<loginState>();

  const onSubmit: SubmitHandler<loginState> = (values) => {
    dispatch(adminLogin({ data: values, navigate }));
  };

  return (
    <div className="pt-[100px]">
      <h1 className="text-2xl font-semibold text-center mb-[20px] text-white">ВОЙТИ</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto bg-[#1A1A1A] border flex flex-col gap-7 py-[83px] px-[64px] rounded-md w-[40%]"
      >
        <div className="flex flex-col gap-1">
          <label className="text-gray-500">Имя пользователя*</label>
          <input
            type="username"
            {...register("username")}
            className="bg-white rounded-md pl-[24px] py-[15px]"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-500">Введите пароль*</label>
          <input
            type="password"
            {...register("password")}
            className="bg-white rounded-md pl-[24px] py-[15px]"
            placeholder="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <input className="cursor-pointer" type="checkbox" />
          <span className="flex gap-1 text-white lg:text-[16px] sm:text-[10px]">
            <p className="text-gray-500">Я согласен с </p> <p>Условиями предоставления услуг</p>
          </span>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-red-600 rounded-full hover:bg-red-700 align-center py-[15px] mt-[19px]"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
