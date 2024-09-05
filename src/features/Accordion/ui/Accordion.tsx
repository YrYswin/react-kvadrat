import { useState } from "react";
import Container from "../../../shared/helpers/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    console.log(_event);
    setExpanded(isExpanded ? panel : "");
  };

  const backgroundColor = "rgba(38, 38, 38, 1)";
  const icon = (isExpanded: boolean) => <span style={{ color: "white" }}>{isExpanded ? "-" : "+"}</span>;

  const accordionDetailsStyles = {
    backgroundColor,
    color: "white",
    p: 2, // padding
    fontSize: { xs: "11px", sm: "13px", md: "15px" }, // шрифт для разных размеров экрана
  };

  const accordionSummaryStyles = {
    backgroundColor,
    color: 'white',
    fontSize: { xs: "13px", sm: "15px", md: "17px" }, // шрифт для разных размеров экрана
  }

  return (
    <Container>
      <div className="w-full m-auto mt-20" style={{ backgroundColor, padding: "16px", borderRadius: "8px" }}>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ color: "white" }}
            expandIcon={icon(expanded === "panel1")}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Что такое Агенство недвижимости?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          АН это команда которая поможет вам продать или найти хорошую недвижимость
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel2")}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Можно ли вам довериться?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          Да,безусловно вы не пожалеете.Мы очень отвественны и уже более 4х лет помогаем нашим клиентам.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel3")}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Хочу продать дом(квартиру,участок) ваши действия?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
            LБыстро выйдем на связь , Поедем и оценим по рынку вашу недвижимость. Быстро выставим на продажу и реклама будет очень хорошей. Далее покажем и продадим вашу недвижимость.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel4")}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Хочу купить недвижимость. Вы мне поможете?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          Конечно,мы предостовляем варианты наших продавцов по хорошей цене, их вы можете посмотреть на нашем сайте. А также вы можете обратится к менеджерам нашей компании которые подберут вам идеальный вариант.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel5")}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            А где гарантии что вы поможете мне?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          За нас говорит статистика. Мы делаем всё возможное чтобы продать вашу недвижимость.А также по статистике 80% всех наших клиентов остаются довольными при условии что обьект был грамотно оценен и нам дали возможность показывать этот обьект клиентам.

          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel5")}
            aria-controls="panel5-content"
            id="panel5-header"
          >
           Я не разбираюсь в документах как мне быть. И как оберечь себя от долгостроя и обмана?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
            Мы спецы в этой сфере у нас есть юристы а также мы превосходно разбираемся в документах.А также мы обережем вас от мошенников и злоупотреляблящий застройщиков.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ color: "white" }}
            expandIcon={icon(expanded === "panel6")}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            Я хочу купить недвижимость в ипотеку вы поможете мне?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          Сначала вам нужно получить одобрение на ипотеку от банка либо ГИК.Потом вы обращаетесь к нам и мы подберем вам хороший вариант.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ color: "white" }}
            expandIcon={icon(expanded === "panel7")}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            Что такое Агенство недвижимости?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          АН это команда которая поможет вам продать или найти хорошую недвижимость
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ color: "white" }}
            expandIcon={icon(expanded === "panel8")}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            Что это такое Риэлторский договор и почему я должен это свами заключать?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          Договор это залог нашего сотрудничество.Где мы обязуемся продать вашу недвижимость а также берем расходы на себя (реклама,транспорт,самое ценное время) .А вы навстречу обязуетесь не продовать обьект сами. Иначе мы потеряем время деньги и желание.Но если мы не продадим обьект в указанное время мы в любом случье возьмём все расходы на себя.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            sx={accordionSummaryStyles}
            style={{ color: "white" }}
            expandIcon={icon(expanded === "panel9")}
            aria-controls="panel9-content"
            id="panel9-header"
          >
            Почему Агенство недвижимости Kvadrat Kg нам нужен?
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles} style={{ backgroundColor, color: "white" }}>
          Друзья ,Мы считаем что каждой сфере есть профи , и эти самые профи в сфере недвижимости это мы.С нами вы будете экономить деньги,время,и самое главное нервы.
Kvadrat Kg ваш лучший помощник сфере недвижимости
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}

