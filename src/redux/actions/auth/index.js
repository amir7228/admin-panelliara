import useJwt from "@src/auth/jwt/useJwt";
import axios from "axios";
import { getUserData } from "../../../utility/Utils";
// ** Handle User Login

export const handleLogin = (data) => {
  return (dispatch) => {
    localStorage.setItem("userData", JSON.stringify(data));
    dispatch({ type: "LOGIN", data });

    axios.interceptors.request.use(function (config) {
      const token = `Breare ${useJwt.getToken()}`;
      config.headers.Authorization = token;
      return config;
    });
    // ** Add to user to localStorage
  };
};

// ** Handle User Logout
export const handleLogout = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("userData");
      dispatch({ type: "LOGOUT", data });
      await useJwt.logout(`${getUserData().role}/`, "");
    } catch (error) {
      console.log(error?.response);
    }

    // ** Remove user from localStorage
  };
};
