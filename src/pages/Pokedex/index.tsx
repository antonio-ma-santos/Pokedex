import { ListPokemon } from "../../components/ListPokemon";
import { ScrollButton } from "../../components/ScrollButton";
import { Pokeball } from "../../components/Pokeball";

import { Container } from "./styles";

import { usePokedex } from "../../hooks/usePokedex"; 
import { useState } from "react";
import { PokemonInfoModal } from "../../components/PokemonInfoModal";
import { useModalContext, ModalProvider } from "../../hooks/useModalContext";

export function Pokedex() {
  const { pokedex, pokemonsFiltered, loading } = usePokedex();
  const { isModalOpen, setIsModalOpen } = useModalContext();

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  if (loading) {
    return <Pokeball />;
  }
  
  return (
    <ModalProvider>
      <Container>
        <ListPokemon 
          pokemons={ pokemonsFiltered.length > 1 ? pokemonsFiltered : pokedex }
          activedFilter={pokemonsFiltered.length > 1}
        /> 

        { pokedex.length === 0 && <h1>Sua pokédex está vázia...</h1> }

        <PokemonInfoModal 
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />

        <ScrollButton />
      </Container>
    </ModalProvider>
  );
}