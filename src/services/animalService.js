import { beerApi } from "./api";

export const getAnimalInfo = async () => {
  // Simulación de una solicitud a una API
  try {
    const { data } = await beerApi.get("/breeds/image/random");

    return {
      name: "Perro Random",
      image: data.message,
      description: "Es un perro obtenido aleartoriamente",
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};
