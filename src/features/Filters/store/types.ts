import { PriceVariableState } from "../../../utils/dataTypes";

export interface FilterSliceState {
  page?: number;
  filterType?: string;
  price: PriceVariableState;
  typeHouse: "Все" | "Дома" | "Квартиры" | "Комерческое недвижиомть" | "Участки";
  place: string;
  comfort: ComfortState;
}

interface ComfortState {
  garden: boolean;
  elevator: boolean;
  close_area: boolean;
  open_area: boolean;
  fenced_yard: boolean;
  playground: boolean;
  insulated: boolean;
  cross_layout: boolean;
}
