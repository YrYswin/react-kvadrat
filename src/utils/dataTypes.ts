export interface serviceState {
  id: number;
  image: string;
  description: string;
}

export interface testimonialsState {
  id: number;
  name: string;
  username: string;
  text: string;
  img: string;
}

export interface PriceVariableState {
  id: number;
  label: string;
  min: number | null;
  max: number | null;
}
