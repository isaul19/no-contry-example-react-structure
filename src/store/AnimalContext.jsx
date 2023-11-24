import { createContext, useContext } from "react";
import { useAnimal } from "../hooks/useAnimal";

// Se crea un contexto
const AnimalContext = createContext({});

// Se brinda datos al contexto
export const AnimalProvider = ({ children }) => {
  const { animalInfo } = useAnimal();

  return <AnimalContext.Provider value={{ animalInfo }}>{children}</AnimalContext.Provider>;
};

// hook para usar los datos del contexto
export const useAnimalContext = () => {
  const context = useContext(AnimalContext);

  if (!context) throw new Error("context not found");

  return context;
};
