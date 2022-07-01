import { useState, useEffect } from "react";

import { ScrollButton } from "../../components/ScrollButton";
import { ListPokemon } from "../../components/ListPokemon";
import { Pokeball } from "../../components/Pokeball";
import { Search } from "../../components/Search";
import { Footer } from "../../components/Footer";

import { Container } from "./styles";

import { api } from "../../services/api";
import { listRequestProps, pokemonProps } from "../../types";

import pokemonNotFoundImg from "../../assets/pikachu-1.png";

type pagesProps = Omit<listRequestProps, 'results'>;

export function Home() {

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<pokemonProps[]>([]);
  const [pages, setPages] = useState<pagesProps>({} as pagesProps);
  const [pageNumber, setPageNumber] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [errorSearch, setErrorSearch] = useState(false);

  async function getListPokemons(url: string) {

    try {
      const response = await api.get<listRequestProps>(url);
    
      setPages(response.data);

      const listResponse = response.data.results;

      const promiseResolved = await Promise.all(
        listResponse.map((item) => api.get<pokemonProps>(item.url))
      );

      setPokemons(promiseResolved.map((item) => item.data));    

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
    setErrorSearch(false);

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
    setErrorSearch(false);

    setPageNumber((prev) => prev - 1);

    await getListPokemons(pages.previous);

    scrollToUp();
    setLoading(false);
  }

  useEffect(() => {

    setPageNumber(1);

    getListPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${cardsPerPage}`);

    setLoading(false);
    setErrorSearch(false);

  }, [cardsPerPage]);  

  if (loading) {
    return <Pokeball />;
  }

  return (
    <Container>
      <Search 
        setLoading={setLoading}
        setPokemon={setPokemons} 
        setErrorSearch={setErrorSearch}  
      />

      { errorSearch && (
          <section>
            <h1>Pokémon não encontrado!</h1>
            <img src={pokemonNotFoundImg} alt="pokemon não encontrado." />
          </section>
      )}

      <ListPokemon pokemons={pokemons} />

      <Footer 
        count={pages.count}
        prev={previous}
        next={next}
        pages={pages}
        pageNumber={pageNumber}
        cardsPerPage={cardsPerPage}
      /> 

      <ScrollButton />
    </Container>
  );
}