import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-pi-plataform.herokuapp.com/v1",
});
