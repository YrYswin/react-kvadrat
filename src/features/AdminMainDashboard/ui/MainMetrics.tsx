import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import { getMetrics } from "../store/action";
import { Card, GlobalStyles } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Metrics from "./Metrics";
import FilterDate from "./FIlterDate";
import { selectMetrics } from "../store/slice";
import { MetricState } from "../store/types";

const globalStyles = (
  <GlobalStyles
    styles={{
      "@keyframes rotate": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      "& .css-1mhcdve-MuiPieArc-root": {
        stroke: "black !important",
      },
    }}
  />
);

const MainMetrics: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(getMonday(new Date()));
  const { analytics, statistics } = useSelector(selectMetrics) as MetricState;

  const monday = currentWeekStart;
  const sunday = React.useMemo(() => {
    const endOfWeek = new Date(monday);
    endOfWeek.setDate(monday.getDate() + 6);
    return endOfWeek;
  }, [monday]);

  useEffect(() => {
    dispatch(getMetrics({ monday, sunday }));
  }, [dispatch, currentWeekStart, monday, sunday]);

  function getMonday(date: Date): Date {
    date = new Date(date);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  }

  function updateWeek(offset: number): void {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() + offset);
    setCurrentWeekStart(newWeekStart);
  }

  const graphics = [
    {
      value: analytics?.new_visitors_percentage || 0,
      name: "Новые посетители",
      color: "#dc2626",
      tw: "text-red-600",
    },
    {
      value: analytics?.returning_visitors_percentage || 0,
      name: "Повторные посетители",
      color: "blue",
      tw: "text-blue-600",
    },
  ];

  const getExistingData = (arr: typeof graphics) => {
    return arr.filter((item) => item.value > 0);
  };

  return (
    <div className={`h-auto my-10 bg-[#222224] text-white w-[100%]`}>
      {globalStyles}
      <Card className="!bg-[#222224] !shadow-none">
        <div className="text-[10px] md:text-[15px] w-[338px] md:w-[400px] mx-auto">
          <FilterDate
            width={27}
            onClickNext={() => updateWeek(7)}
            onClickPrev={() => updateWeek(-7)}
            dateTitle={`${formatDate(monday)} - ${formatDate(sunday)}`}
          />
        </div>
        <Metrics items={statistics} />
      </Card>

      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-10 py-5 gap-5">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="bg-[#1d1d1d] text-center px-8 py-4">
            <p>Посещения</p>
            <span>{analytics?.total_visits}</span>
          </div>
          <div className="bg-[#1d1d1d] text-center px-8 py-4">
            <p>Просмотр страницы</p>
            <span>{analytics?.total_page_views}</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 bg-[#1d1d1d] p-4 w-full lg:w-auto">
          <div className="flex flex-col gap-5">
            <h1>Тип посетителей</h1>
            <ul className="flex flex-col">
              {graphics.map((obj, i) => (
                <li key={i} className={`${obj.tw} flex justify-between w-full lg:w-36`}>
                  <p>{obj.name}:</p> <span>{obj.value}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <PieChart
              series={[
                {
                  data: getExistingData(graphics),
                  innerRadius: 20,
                  outerRadius: 70,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 67,
                  cy: 67,
                },
              ]}
              {...size}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMetrics;

const size = {
  width: 143,
  height: 143,
};
