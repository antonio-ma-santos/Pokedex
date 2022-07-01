
export type pokemonPerPageProps = {
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

export type listRequestProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: pokemonPerPageProps[];
}

export type pokemon = {
  pokemon: {
    url: string;
  }
}

export type pokemonRequest = {
  pokemon: pokemon[];
}