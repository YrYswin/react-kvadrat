import React from "react";
import { ScrollContext } from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { contact } from "../../utils/data";

interface Props {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}

const style = "w-full pl-[20px] py-[12px] cursor-pointer hover:bg-[#292929] hover:text-white group";
const hr = "h-px rounded-full ml-[20px] bg-gray-200 border-0 dark:bg-gray-400 transition-opacity group-hover:hidden";
const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const scrollToSection = React.useContext(ScrollContext);
  const navigate = useNavigate();

  const handleScroll = (section: string) => {
    navigate("/");
    setIsOpen(false);
    setTimeout(() => {
      if (scrollToSection) {
        scrollToSection(section);
      } else {
        console.warn("scrollToSection is not defined");
      }
    }, 100);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black bg-opacity-50 z-[99] h-full mt-[65px]">
      <div className="w-[219px] h-[380px] bg-red-700 text-md text-white absolute rounded-l-b-md rounded-bl-3xl right-0 py-[19px]  z-[100]">
        <div className="flex flex-col">
          <Link to="/">
            <p onClick={() => setIsOpen(!isOpen)} className={style}>
              Главная
            </p>
          </Link>
          <hr className={`${hr}`} />
          <p onClick={() => handleScroll("products")} className={style}>
            Купить недвижимость
          </p>
          <hr className={`${hr}`} />
          <p onClick={() => handleScroll("uslugi")} className={style}>
            Услуги
          </p>
          <hr className={`${hr}`} />
          <Link to="/AboutCompany">
            <p onClick={() => setIsOpen(!isOpen)} className={style}>
              О компании
            </p>
          </Link>
          <hr className={`${hr}`} />
          <p onClick={() => handleScroll("faq")} className={style}>
            FAQ
          </p>
          <hr className={`${hr}`} />
        </div>
        <div className="flex gap-1 pl-[20px] my-[10px]">
          <Link to={contact.whatsapp}>
            <img src="/svg/modal-whatsapp.svg" alt="WhatsApp" />
          </Link>
          <Link to={contact.instagram}>
            <img src="/svg/modal-instagram.svg" alt="Instagram" />
          </Link>
          <Link to={contact.telegram}>
            <img src="/svg/modal-telega.svg" alt="Telegram" />
          </Link>
        </div>
        <Link to={contact.whatsapp} className="grid place-items-center">
          <button className="w-[80%] text-center py-[10px] bg-[#262626] hover:bg-[#262636] text-white rounded-full">
            СВЯЗАТЬСЯ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
