import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { adminLogin } from "./store/action";
import { loginState } from "./store/types";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm<loginState>();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<loginState> = (values) => {
    setIsLoading(true); 
    dispatch(adminLogin({ data: values, navigate }))
      .finally(() => setIsLoading(false)); 
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
          <div className="relative bg-white">
            <input
              type={showPassword ? "text" : "password"} 
              {...register("password")}
              className="bg-white w-[100%] rounded-md pl-[24px] py-[5px] md:py-[15px] placeholder:text-[10px] md:placeholder:text-[16px] pr-10" 
              placeholder="password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2" 
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} 
            </button>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full text-white rounded-full align-center py-[8px] md:py-[15px] mt-[15px] md:mt-[19px] ${isLoading ? "bg-gray-500" : "bg-red-600 hover:bg-red-700"}`}
          disabled={isLoading} 
        >
          {isLoading ? "Загрузка..." : "Войти"} 
        </button>
      </form>
    </div>
  );
};

export default SignIn;
