import { createContext, useState, ReactNode, useEffect, useContext } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from "../services/api";
import { pokemonProps, pokemonRequest, typeProps } from "../types";

type PokedexProviderProps = {
  children: ReactNode;
}

type PokedexContextData = {
  pokedex: pokemonProps[];
  pokemonsFiltered: pokemonProps[];
  loading: boolean;
  activeColor: typeProps['type']['name'];
  handleAction: (pokemonId: string) => void;
  setPokedex: (pokedex: pokemonProps[]) => void;
  getPokemonPerType: (type: string) => Promise<void>;
  setActiveColor: (value: typeProps['type']['name']) => void;
  clearPokemonsFiltered: () => void;
}

const PokedexContext = createContext<PokedexContextData>({} as PokedexContextData);

export function PokedexProvider({ children }: PokedexProviderProps) {

  const [pokedex, setPokedex] = useState<pokemonProps[]>([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<pokemonProps[]>([]);
  const [loading, setLoading] = useState(false);

  const [activeColor, setActiveColor] = useState<typeProps['type']['name']>('' as typeProps['type']['name']);

  useEffect(() => {
    const storagedPokedex = localStorage.getItem("pokedex");

    if (storagedPokedex) {
      setPokedex(JSON.parse(storagedPokedex));
    } else {
      localStorage.setItem("pokedex", JSON.stringify([]));
    }
  }, []);

  async function AddPokemon(pokemonId: string) {
    try {
      const response = await api.get<pokemonProps>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

      const pokemon = response.data;

      setPokedex(prev => [...prev, pokemon]);

      localStorage.setItem("pokedex", JSON.stringify(pokedex));

      toast.success("Pokémon capturado com sucesso!");

    } catch (error) {
      toast.error('Erro na captura do pokémon.');
    }
  }

  async function RemovePokemon(pokemonId: string) {
    // try {
    //   const pokemonExists = pokedex.find((pokemon) => pokemon.id === pokemonId);

    //   if (pokemonExists) {
    //     const newPokedex = pokedex.filter((pokemon) => pokemon.id !== pokemonId);
        
    //     setPokedex(newPokedex);
        
    //     localStorage.setItem("@pokedex", JSON.stringify(newPokedex));
    //   } else {
    //     throw Error();
    //   }
      
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      const newPokedex = pokedex.filter((pokemon) => pokemon.id !== pokemonId);
      
      setPokedex(newPokedex);
      
      localStorage.setItem("pokedex", JSON.stringify(newPokedex));

      toast.info("Pokémon solto com sucesso!");

    } catch (error) {
      toast.error('Erro ao soltar do pokémon.');
    }
  }

  function handleAction(pokemonId: string) {
    try {
      const pokemonExists = pokedex.some((pokemon) => pokemon.id === pokemonId);

      pokemonExists ? RemovePokemon(pokemonId) : AddPokemon(pokemonId);
      
    } catch (error) {
      console.log(error);
    }
  }

  async function getPokemonPerType(type: string) {
    try {
      setLoading(prev => !prev);

      const response = await api.get<pokemonRequest>(`https://pokeapi.co/api/v2/type/${type}`);
      
      const listResponse = response.data.pokemon;

      const promiseResolved = await Promise.all(listResponse.map(({ pokemon }) => api.get<pokemonProps>(pokemon.url)));
      
      const listPokemons = promiseResolved.map((item) => item.data);
      
      setPokemonsFiltered(listPokemons);

      setLoading(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  function clearPokemonsFiltered() {
    setPokemonsFiltered([]);
    setActiveColor('' as typeProps['type']['name']);
  }
  
  return (
    <PokedexContext.Provider value={{ 
      pokedex, 
      pokemonsFiltered, 
      loading, 
      activeColor,
      handleAction, 
      setPokedex, 
      getPokemonPerType,
      setActiveColor,
      clearPokemonsFiltered 
    }}>
      { children }
      <ToastContainer autoClose={3000} />
    </PokedexContext.Provider>
  );
}

export function usePokedex() {
  const contex = useContext(PokedexContext);

  return contex;
}