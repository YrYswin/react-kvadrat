import React from "react";
import { styled } from "@mui/material";

interface Props {
  onClickPrev: (e: any) => void;
  onClickNext: (e: any) => void;
  dateTitle: string;
  width: number;
}

const FilterDate: React.FC<Props> = ({ onClickPrev, onClickNext, dateTitle, width }) => {
  return (
    <CalendarTitle width={width}>
      <PrevBtn onClick={() => onClickPrev(1)}>
        <img src="/svg/SelectIcon.svg" alt="prev" />
      </PrevBtn>
      <div className="mt-1 md:mt-0">{dateTitle}</div>
      <NextBtn onClick={() => onClickNext(1)}>
        <img src="/svg/SelectIcon.svg" alt="next" />
      </NextBtn>
    </CalendarTitle>
  );
};

export default FilterDate;

const CalendarTitle = styled("div")<{ width: number }>(({ width }) => ({
  width: `${width}cqw`,
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  margin: "10px 20px",
  color: "white",
  button: {
    backgroundColor: "#1d1d1d",
  },
}));
const PrevBtn = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transform: "rotate(180deg)",
  borderRadius: "100%",
  width: "25px",
  height: "25px",
  transition: "all .1s",
  ":hover": {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgb(150,150,150,.5)",
  },
  ":active": {
    boxShadow: "inset 0 0 4px rgb(150,150,150,.5)",
  },
});
const NextBtn = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "100%",
  width: "25px",
  height: "25px",
  transition: "all .1s",
  ":hover": {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgb(150,150,150,.5)",
  },
  ":active": {
    boxShadow: "inset 0 0 4px rgb(150,150,150,.5)",
  },
});
