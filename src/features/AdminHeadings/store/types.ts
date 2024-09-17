export interface PostHeadingState {
  title: string;
  image: File;
}

export interface HeadingState {
  id: number;
  title: string;
  image: string;
}

export interface HeadingSliceState {
  items: HeadingState[] | null;
  count: number;
  item: HeadingState | null;
  isLoading: boolean;
  error: null | "Error";
}

export interface PatchHeadingState {
  id: number;
  title: string;
  image: File | null;
}
