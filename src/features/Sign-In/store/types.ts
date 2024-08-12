export interface loginState {
  username: string;
  password: string;
}

export interface loginSliceState {
  users: loginState | null;
  status: Status;
}

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
