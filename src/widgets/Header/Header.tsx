import React from "react";
import Container from "../../shared/helpers/Container";
import { Link, useNavigate } from "react-router-dom";
import { ScrollContext } from "../Layout/Layout";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const scrollToSection = React.useContext(ScrollContext);

  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleScroll = (section: string) => {
    navigate("/");
    setTimeout(() => {
      if (scrollToSection) {
        scrollToSection(section);
      } else {
        console.warn("scrollToSection is not defined");
      }
    }, 100);
  };

  return (
    <div className="bg-[#C8180C] w-full">
      <Container>
        <div className="py-[1.5vh] flex items-center justify-between ">
          <Link to={"/"}>
            <img src="/svg/logo.svg" alt="logo" />
          </Link>
          <img className="visible cursor-pointer md:hidden" src="/svg/burger.svg" onClick={() => setIsOpen(!isOpen)} alt="menu" />
          <div className="items-center justify-between hidden text-white md:flex gap-7 text-md">
            <Link to="/">Главная</Link>
            <p className="cursor-pointer" onClick={() => handleScroll("products")}>
              Купить недвижимость
            </p>
            <p className="cursor-pointer" onClick={() => handleScroll("uslugi")}>
              Услуги
            </p>
            <Link to="/AboutCompany">О компании</Link>
            <p className="cursor-pointer" onClick={() => handleScroll("faq")}>
              FAQ
            </p>
          </div>
        </div>
        {isOpen && (
          <div ref={modalRef}>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
