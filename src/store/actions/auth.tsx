import axios from "axios";

import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";

export function auth(
  email: string,
  password: string,
  isLogin: boolean
): (dispatch) => Promise<void> {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDRhzVD6i2gcWbwYacYeUzB19zXood7wLE";

    if (isLogin) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDRhzVD6i2gcWbwYacYeUzB19zXood7wLE";
    }

    const response = await axios.post(url, authData);
    const data = response.data;

    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", JSON.stringify(expirationDate));

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
}

export function autoLogout(time: any): (dispatch) => void {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout(): { type: string } {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  return {
    type: AUTH_LOGOUT,
  };
}

export function autoLogin(): (dispatch) => void {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(
        JSON.parse(
          localStorage.getItem("expirationDate") || new Date().toString()
        )
      );
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}

export function authSuccess(token: string): { type: string; token: string } {
  return {
    type: AUTH_SUCCESS,
    token,
  };
}
