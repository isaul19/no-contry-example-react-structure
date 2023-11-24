import { useState, useEffect } from "react";
import { getAnimalInfo } from "../services/animalService";

export const useAnimal = () => {
  const [animalInfo, setAnimalInfo] = useState({});

  const fetchAnimal = async () => {
    const data = await getAnimalInfo();
    setAnimalInfo(data);
  };

  useEffect(() => {
    fetchAnimal();
  }, []);

  return { animalInfo };
};
