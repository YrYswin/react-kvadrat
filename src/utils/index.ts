import { loginState } from "../features/Sign-In/store/types";

class TokenService {
  static setUserLS(user: loginState) {
    localStorage.setItem("quadrat_admin", JSON.stringify(user));
  }

  static getUserLS(): loginState | null {
    const user = localStorage.getItem("quadrat_admin");
    if (user) {
      try {
        return JSON.parse(user) as loginState;
      } catch (error) {
        console.error("Error parsing user from localStorage", error);
        return null;
      }
    }
    return null;
  }

  static deleteUserLS() {
    localStorage.removeItem("quadrat_admin");
  }

  static hasUserLS(): boolean {
    return !!this.getUserLS();
  }
}

export default TokenService;
