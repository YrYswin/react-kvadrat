export interface HouseSliceState {
  items: HouseState[];
  item: HouseStateById | null;
  count: number;
  status: Status;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export interface HouseState {
  id: number;
  title: string;
  square_footage: number;
  price: number;
  image: string;
  images: HouseImage[];
}

export interface HouseStateById {
  id: number;
  title: string;
  price: number;
  square_footage: number;
  category: string;
  description: string;
  created_at: Date;
  city: string;
  bedrooms: number;
  rooms: number;
  garage_how_many: number;
  kitchen: number;
  bathroom: number;
  image: string;
  images: HouseImage[];
  garden: boolean;
  elevator: boolean;
  close_area: boolean;
  open_area: boolean;
  fenced_yard: boolean;
  playground: boolean;
  insulated: boolean;
  cross_layout: boolean;
}

export interface HouseImage {
  id: number;
  image: string;
  house: number;
}

export interface HouseImageState {
  image: File;
  house: number;
}

export interface PostHouseState {
  title: string;
  price: number;
  category: string;
  description: string;
  city: string;
  garden: boolean;
  elevator: boolean;
  close_area: boolean;
  open_area: boolean;
  fenced_yard: boolean;
  playground: boolean;
  insulated: boolean;
  cross_layout: boolean;
  bedrooms: number;
  rooms: number;
  garage_how_many: number;
  kitchen: number;
  image: File | null | string;
  square_footage: number;
  bathroom: number;
}
