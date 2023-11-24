import { AnimalProvider } from "./store/AnimalContext";
import { AnimalPage } from "./pages/AnimalPage";

export const App = () => {
  return (
    <AnimalProvider>
      <AnimalPage />
    </AnimalProvider>
  );
};
