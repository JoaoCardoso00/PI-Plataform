import axios from "axios";

export const api = axios.create({
  baseURL: "https://pi.omnicesupa.com/api/",
});
