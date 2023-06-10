// import BaseApi from "@/api";
import Vue from "vue";
import axios from "axios";

fetch("https://ipinfo.io/json?token=70abcff895bbc8")
  .then((response) => response.json())
  .then((jsonResponse) =>
    localStorage.setItem("country", jsonResponse.country)
  );

const baseURL = process.env.BASE_API_URL || "https://tahit-back.zoom-app.kz/";

// Aplication
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// const token = Vue.cookie.get("token");

// if (token) {
//   headers["Authorization"] = `Token ${token}`;
// }

const instance = axios.create({
  baseURL,
  headers,
});

instance.interceptors.request.use(
  (config) => {
    if (Vue.cookie.get("token")) {
      const token = Vue.cookie.get("token");
      const lang = Vue.cookie.get("lang");
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Accept-Language": lang,
      };
    } else {
      const lang = Vue.cookie.get("lang");
      config.headers = {
        Accept: "application/json",
        "Accept-Language": lang,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { instance };
