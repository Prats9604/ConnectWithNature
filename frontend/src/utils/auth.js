import cookie from "js-cookie";
import axios from "axios";

export const setCookie = (key, value) => {
  cookie.set(key, value, { expires: 1 });
};

export const removeCookie = (key) => {
  cookie.remove(key);
};

export const getCookie = (key) => {
  return cookie.get(key);
};

export const setAuthentication = (token) => {
  console.log("token set");
  setCookie("token", token);
};

export const logOut = () => {
  removeCookie("token");
  location.reload();
};

export const isLogin = async () => {
  const token = getCookie("token");

  if (token) {
    const res = await axios.post("http://localhost:5000/api/auth/requireauth", {
      token: token,
    });
    return res.data;
  }
  return false;
};
