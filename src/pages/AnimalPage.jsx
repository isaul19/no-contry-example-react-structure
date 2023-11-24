import { AnimalCard } from "../components/AnimalCard";
import { useAnimalContext } from "../store/AnimalContext";

export const AnimalPage = () => {
  const { animalInfo } = useAnimalContext();

  return (
    <>
      <main className="animal-page">
        <h1>Información del animal</h1>
        <AnimalCard {...animalInfo} />
      </main>

      <footer>
        <p>
          power by{" "}
          <a href="https://dog.ceo/dog-api" target="_blank" rel="noreferrer">
            dog creo api
          </a>
        </p>
      </footer>
    </>
  );
};
