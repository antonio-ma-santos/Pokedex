import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ListPokemon } from "./components/ListPokemon";

import { api } from './services/api';

import { GlobalStyle } from "./styles/global";
import { ScrollButton } from "./components/ScrollButton";
import { Pokeball } from "./components/Pokeball";

type pokemonPerPageProps = {
  name: string;
  url: string;
}

export type statsProps = {
  base_stat: number;
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'speed',
  }
}

export type typeProps = {
  type: {
    name: 'normal' | 'grass' | 'poison' | 'fire' | 'flying' | 'bug' | 'ground' | 'fairy' | 
          'fighting' | 'ice' | 'psychic' | 'electric' | 'electric' | 'steel' | 'ghost' | 
          'rock'  |'dragon' | 'dark' | 'water';
  }
}

export type abilitiesProps = {
  ability: {
    name: string;
  }
}

export type spritesProps = {
  other: {
    dream_world: {
      front_default: string;
    },
    home: {
      front_default: string;
    }
  }
}

export type pokemonProps = {
  id: string;
  name: string;
  sprites: spritesProps;
  abilities: abilitiesProps[];
  types: typeProps[];
  stats: statsProps[];
}

type listRequestProps = {
  next: string | null;
  previous: string | null;
  results: pokemonPerPageProps[];
}

type pagesProps = Omit<listRequestProps, 'results'>;

export default function App() {
   const [loading, setLoading] = useState(true);
   const [pokemons, setPokemons] = useState<pokemonProps[]>([]);
   const [pages, setPages] = useState<pagesProps>({} as pagesProps);
   const [pageNumber, setPageNumber] = useState(1);
   const [cardsPerPage, setCardsPerPage] = useState(20);

   async function getListPokemons(url: string) {

     try {
       const response = await api.get<listRequestProps>(url);
      
       setPages(response.data);
  
       const listResponse = response.data.results;
  
       const arrayPromises = listResponse.map((item) => api.get<pokemonProps>(item.url));
  
       const promiseResolved = await Promise.all(arrayPromises);
  
       const listPokemons: pokemonProps[] = [];
  
       promiseResolved.map((item) => listPokemons.push(item.data));
  
       setPokemons(listPokemons);    
     } catch (error) {
       console.log(error);
     }
   }

   function scrollToUp() {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }

   async function next() {
     if (pages.next === null) {
       return;
     }
     setLoading(true);

     setPageNumber((prev) => prev + 1);

     await getListPokemons(pages.next);

     scrollToUp();
     
     setLoading(false);
   }

   async function previous() {
     if (pages.previous === null) {
        return;
     }
     setLoading(true);

     setPageNumber((prev) => prev - 1);

     await getListPokemons(pages.previous);

     scrollToUp();
     
     setLoading(false);
   }

   useEffect(() => {

     setPageNumber(1);

     getListPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${cardsPerPage}`);

     setLoading(false);

   }, [cardsPerPage]);  

   return (
     <>
      <Header 
        cardsPerPage={setCardsPerPage}
      />
      {
        loading 
          ? 
          <Pokeball /> 
          :
          <>
            <ListPokemon pokemons={pokemons} />
            <Footer 
              prev={previous}
              next={next}
              pages={pages}
              pageNumber={pageNumber}
              cardsPerPage={cardsPerPage}
            /> 
          </>
      }
      <ScrollButton />
      <GlobalStyle />
     </>
   );
 }