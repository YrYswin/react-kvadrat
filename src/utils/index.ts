import { loginState } from "../features/Sign-In/store/types";

export const getUserLS = () => {
  const user = localStorage.getItem("quadrat_admin");
  return user ? JSON.parse(user) : null;
};

export const setUserLS = (user: loginState) => {
  localStorage.setItem("quadrat_admin", JSON.stringify(user));
};

export const deleteUserLS = () => {
  localStorage.removeItem("quadrat_admin");
};
