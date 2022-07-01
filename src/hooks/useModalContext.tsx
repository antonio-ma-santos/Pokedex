import { createContext, useContext, useState, ReactNode } from "react";
import { pokemonProps } from "../types";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextData {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  pokemonData: pokemonProps;
  setPokemonData: (pokemon: pokemonProps) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState<pokemonProps>({} as pokemonProps);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, pokemonData, setPokemonData }}>
      { children }
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  return context;
}