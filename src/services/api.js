import axios from "axios";

export const beerApi = axios.create({
  baseURL: import.meta.env.VITE_BEERS_BACKEND_URL ?? "https://dog.ceo/api",
});
