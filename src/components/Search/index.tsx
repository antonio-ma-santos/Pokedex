import { useState } from "react";
import { Container } from "./styles";

import { FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import { pokemonProps } from "../../types";

type inputProps = {
  setPokemon: (pokemon: pokemonProps[]) => void;
  setErrorSearch: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}

export function Search({ setPokemon, setErrorSearch, setLoading }: inputProps) {
  const [inputValue, setInputValue] = useState('');
  
  async function getPokemon(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) { 
    event.preventDefault();
    setInputValue('');
    setLoading(true);

    try {
      if (inputValue) {
        const response = await api.get<pokemonProps>(inputValue.toLowerCase());
        
        setPokemon([response.data]);
        setErrorSearch(false);
      }
    } catch (error) {
      setPokemon([]);
      setErrorSearch(true);
    }
    setLoading(false);
  }

  return (
    <Container>
      <h1>Capture o seu pokémon!</h1>
      <div>
        <input 
          type="text" 
          value={inputValue}
          placeholder="Digite o nome ou um número..." 
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          onClick={(event) => getPokemon(event)}
        >
          <FiSearch />
        </button>
      </div>
    </Container>
  );
}