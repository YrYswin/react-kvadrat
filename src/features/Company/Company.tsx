import React from "react";
import Container from "../../shared/helpers/Container";

const Company: React.FC = () => {
  return (
    <div className="text-[22px] text-white">
      <div className=" h-[47px] flex justify-between mt-[74px]">
        <div className="w-screen h-[20px] border-b border-gray-400"></div>
        <div className="text-white w-[455px] h-[47px] text-center font-medium text-[22px] uppercase">О компании</div>
        <div className="w-full h-[20px] border-b border-gray-400"></div>
      </div>
      <Container>
        <div className="mt-[65px]">
          Агенство недвижимости Квадратный Метр Ваш помощник в сфере недвижимости! Мы работаем в сфере недвижимости и строим
          компанию нового типа – сочетаем инновации, ответственность и человеческое отношение к каждому клиенту. Компания
          инвестирует в обучение, автоматизацию процессов, исследования и качество услуг. Мы постоянно развиваемся для того, чтобы
          делать клиентов счастливыми, а сотрудников и партнеров — успешными. Кыймылсыз мулк Агенттиги Квадратный Метр мулк
          сферасында сиздин эн чоон жардамчыныз! Биз кыймылсыз-мулк сферасында кучтуу компания курууга кызыктарбыз жаны инновация,
          жоопкерчилик жана жакшы мамиле ар бир кардаарга .Компания окуп онугуусуно салымын дайыма кошуп турат.Биз дайыма осуп
          турабыз,себеби биз учун кардаардын ыраазы болушу ото маанилуу,жана кызматкерлердин ийгилиги биринчи оорунда. Kvadrat 2
          kg Найди свой уют!
        </div>
        <p className="mt-5">Наши услуги включают:</p>
        <ul className="list-none">
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Продажа и аренда жилой недвижимости: Квартиры, дома, элитные апартаменты на любой вкус и бюджет
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Коммерческая недвижимость: Офисы, торговые площади, склады и производственные помещения
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Инвестиции в недвижимость: Консультации по выгодным инвестиционным проектам, сопровождение сделок
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Юридическое сопровождение: Профессиональная помощь в оформлении документов, поддержка на всех этапах сделки.
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
        </ul>
        <p className="mt-5">Почему выбирают нас:</p>
        <ul className="list-none">
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Индивидуальный подход: Мы учитываем все ваши пожелания и требования, чтобы предложить оптимальные решения
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Надежность и прозрачность: Все наши сделки проходят с соблюдением законодательства и максимальной прозрачностью
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Широкая база объектов: Мы располагаем обширной базой объектов недвижимости, что позволяет удовлетворить самые
            разнообразные запросы
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
          <li className="relative" style={{ paddingLeft: "20px" }}>
            Профессионализм: Наши специалисты – это эксперты с глубокими знаниями рынка и готовностью помочь в любой ситуации.
            <span className="absolute left-0" style={{ color: "white" }}>
              •
            </span>
          </li>
        </ul>
        <p className="mt-5">Свяжитесь с нами сегодня и откройте для себя новые возможности с "Бишкек Недвижимость"!</p>

        <div className="mt-6">
          <p>Телефон: +996 XXX XXX XXX</p>
          <p>Email: info@bishkekrealestate.kg</p>
          <p>Адрес: г. Бишкек, ул. Ленина, д. 123</p>
        </div>

        <div className="mt-7">
          <p>С уважением,</p>
          <p>Команда "Бишкек Недвижимост"</p>
        </div>

        <p className="mt-[117px]">Поделиться своим выбором с друзьями в соц.сетях</p>
        <div className="w-full h-[32px] border-b border-gray-400"></div>
      </Container>
    </div>
  );
};

export default Company;
