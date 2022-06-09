import { Card } from '../Card';

import { statsProps, typeProps, abilitiesProps, spritesProps } from '../../App';

import { Container } from './styles';

type pokemonInfo = {
  id: string;
  name: string;
  sprites: spritesProps;
  abilities: abilitiesProps[];
  types: typeProps[];
  stats: statsProps[];
}

type pokemonsProps = {
  pokemons: pokemonInfo[];
}

export function ListPokemon({ pokemons }: pokemonsProps) {

  return (
    <>
      <Container>
        {
          pokemons.map((pokemon: pokemonInfo) => (
            <Card 
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprites={pokemon.sprites}
              abilities={pokemon.abilities}
              types={pokemon.types}
              stats={pokemon.stats}
            />
          ))
        }
      </Container>
    </>
  );
}