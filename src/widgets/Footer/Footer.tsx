import { Link } from "react-router-dom";
import Container from "../../shared/helpers/Container";

const Footer = () => {
  return (
    <div className="bg-[#111111] h-full  md:pt-20 md:mt-20 mt-3 pt-6 ">
      <Container>
        <div className="flex flex-col justify-between gap-5 mb-0 text-white md:flex-row">
          <div className="block sm:hidden md:block mb-5">
            <img src="/svg/Footer.svg" alt="" />
            <p className="pt-5">Наши социальные сети</p>
            <div className="flex gap-3 pt-5">
            <Link to="https://www.instagram.com/tunduk.312?igsh=MXYzdjd1M2d6OHc4ZQ%3D%3D&utm_source=qr">
              <img src="/svg/ivertor.svg" alt="" />
            </Link>
            <Link to="https://wa.me/996708242906">
              <img src="/svg/wvertor.svg" alt="" />
            </Link>
            <Link to="https://web.telegram.org/a/">
              <img src="/svg/tvertor.svg" alt="" />
            </Link>
            </div>
          </div>
          <Link to={"/watch"} onClick={() => window.scrollTo(0, 0)}>
            <div className="flex gap-[64px] mb-5">
              <div className="leading-10">
                <p>Квартиры</p>
                <p>Офис продаж</p>
                <p>Ипотека</p>
                <p>Инвестиции</p>
              </div>
              <div className="leading-10">
                <p>Застройщики</p>
                <p>Акции</p>
                <p>Контакты</p>
                <p>Жилые комплексы</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-between mb-8">
            <div className="hidden sm:block md:hidden">
              <img src="/svg/Footer.svg" alt="" />
              <p className="pt-5">Наши социальные сети</p>
              <div className="flex gap-3 pt-5">
                <Link to="https://www.instagram.com/tunduk.312?igsh=MXYzdjd1M2d6OHc4ZQ%3D%3D&utm_source=qr">
                  <img src="/svg/ivertor.svg" alt="" />    
                </Link>
                <Link to="https://wa.me/996708242906">
                  <img src="/svg/wvertor.svg" alt="" />
                </Link>
                <Link to="https://web.telegram.org/a/">
                  <img src="/svg/tvertor.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="leading-10 ">
              <p>Контакты</p>
              <div className="flex gap-3 text-center">
                <img src="/svg/tel.svg" alt="" />
                <p>0708242906</p>
              </div>

              <div className="flex gap-3">
                <img src="/svg/gmail.svg" alt="" />
                <p>kvadrat_kg@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <img src="/svg/vertor.svg" alt="" />
                <p>г.Бишкек </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
