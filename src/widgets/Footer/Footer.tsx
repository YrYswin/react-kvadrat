import { Link } from "react-router-dom";
import Container from "../../shared/helpers/Container";
import { contact } from "../../utils/data";

const Footer = () => {
  return (
    <div className="bg-[#111111] h-full  md:pt-20 md:mt-20 mt-3 pt-6 ">
      <Container>
        <div className="flex flex-col justify-between gap-5 mb-0 text-white md:flex-row">
          <div className="block sm:hidden md:block mb-5">
            <img src="/svg/Footer.svg" alt="" />
            <p className="pt-5">Наши социальные сети</p>
            <div className="flex gap-3 pt-5">
              <Link to={contact.instagram}>
                <img src="/svg/ivertor.svg" alt="" />
              </Link>
              <Link to={contact.whatsapp}>
                <img src="/svg/wvertor.svg" alt="" />
              </Link>
              <Link to={contact.telegram}>
                <img src="/svg/tvertor.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="hidden sm:block md:hidden">
              <img src="/svg/Footer.svg" alt="" />
              <p className="pt-5">Наши социальные сети</p>
              <div className="flex gap-3 pt-5">
                <Link to={contact.instagram}>
                  <img src="/svg/ivertor.svg" alt="" />
                </Link>
                <Link to={contact.whatsapp}>
                  <img src="/svg/wvertor.svg" alt="" />
                </Link>
                <Link to={contact.telegram}>
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
                <p>kvadrat.kg312@mail.ru</p>
              </div>

              <div className="flex gap-3">
                <img src="/svg/vertor.svg" alt="" />
                <p>г.Бишкек Темирязева 97</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
