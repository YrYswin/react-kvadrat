import { PriceVariableState } from "../../../utils/dataTypes";

export interface FilterSliceState {
  page?: number;
  filterType?: string;
  price: PriceVariableState;
  typeHouse: "Все" | "Дома" | "Квартиры" | "Комерческое недвижиомть" | "Участки";
  comfort: ComfortState;
}

interface ComfortState {
  pool: boolean;
  gym: boolean;
  garage: boolean;
  parking: boolean;
  garden: boolean;
  fireplace: boolean;
  elevator: boolean;
  clubhouse: boolean;
  laundry: boolean;
  area: boolean;
}
