import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { GlobalStyles } from "@mui/material";
import { statisticsState } from "../store/types";
import CircularProgress from "@mui/material/CircularProgress";

const globalStyles = (
  <GlobalStyles
    styles={{
      ".MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
        fill: "rgba(255, 255, 255, 1) !important", // Применяем белый цвет текста
      },
      ".MuiChartsAxis-root .MuiChartsAxis-axisLabel": {
        fill: "rgba(255, 255, 255, 1) !important", // Применяем белый цвет меток оси
      },
      ".css-wn5hww-MuiLineElement-root": {
        stroke: "red !important",
      },
      ".css-1la267r-MuiAreaElement-root": {
        fill: "rgb(100,60,150,.1) !important",
      },
    }}
  />
);

interface Props {
  items: statisticsState[];
  isLoading: boolean;
}

const Metrics: React.FC<Props> = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[250px]">
        <CircularProgress color="primary" />
      </div>
    );
  }

  const dateArray = items.map((x) => x.date);
  const itemArray = items.map((x) => x.visits_count);

  return (
    <>
      {globalStyles}
      <LineChart
        xAxis={[{ scaleType: "point", data: dateArray }]}
        series={[
          {
            curve: "linear",
            data: itemArray,
            area: true,
            showMark: true,
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        height={250}
      />
    </>
  );
};

export default Metrics;
