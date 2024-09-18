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
  gym: boolean;
  area: boolean;
  garage: boolean;
  parking: boolean;
  garden: boolean;
  fireplace: boolean;
  pool: boolean;
  elevator: boolean;
  clubhouse: boolean;
  laundry: boolean;
  image: string;
  images: HouseImage[];
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
  pool: boolean;
  gym: boolean;
  garage: boolean;
  parking: boolean;
  garden: boolean;
  fireplace: boolean;
  area: boolean;
  elevator: boolean;
  clubhouse: boolean;
  bedrooms: number;
  rooms: number;
  garage_how_many: number;
  kitchen: number;
  image: File | null | string;
  square_footage: number;
  bathroom: number;
  laundry: boolean;
}
