import React from "react";
import TgSVG from "../../shared/assets/tg.svg";
import { Link } from "react-router-dom";
import { contact } from "../../utils/data";

const Contacts: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Link to={contact.whatsapp}>
        <button className="px-3 py-1.5 md:px-8 md:py-3 text-xs md:text-base text-white bg-red-700 rounded-full hover:bg-red-600">
          Получить консультацию от риэлтора
        </button>
      </Link>
      <div className="md:flex items-center gap-4 px-10 py-3 text-white bg-red-600 rounded-full hidden">
        <Link to={contact.telegram}>
          <img src={TgSVG} alt="telegram" className="w-10 h-10" />
        </Link>
        <Link to={contact.whatsapp}>
          <img src="/svg/whatsap2.svg" alt="whatsapp" className="cursor-pointer w-5 md:w-9 h-5 md:h-9" />
        </Link>
        <Link to={contact.instagram}>
          <img src="/svg/insta.svg" alt="instagram" className="cursor-pointer w-5 md:w-9 h-5 md:h-9" />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
