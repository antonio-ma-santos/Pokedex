import { Container, Footer, Status } from './styles';

import { pokemonProps } from '../../App';

import pokeball from '../../assets/Pokeball.svg';
import { imgType } from '../../styles/theme';

function leadingZero(number: string | number, size = 4) {
  let numberWithZeros = String(number);

  while ((size - numberWithZeros.length) > 0) {
    numberWithZeros = '0' + numberWithZeros;
  }

  return numberWithZeros;
}

export function Card({ name, id, abilities, types, sprites, stats }: pokemonProps) {

  const statsNames = {
    hp: 'hp',
    attack: 'attack',
    defense: 'defense',
    speed: 'speed',
  }
  
  const statsFiltered = stats.filter((stat) => {
    if (stat.stat.name === statsNames[stat.stat.name]) {
      return stat.stat.name;
    }
  });
  
  return (
    <Container types={types}>
      <header>
        <header>
          {/* <p>{ name.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()) }</p> */}
          {/* <p>{ name.replace(name[0], letter => letter.toUpperCase())}</p> */}
          {/* <p>{ name[0].toUpperCase() + name.slice(1)}</p> */}
          <p>{name}</p>
          <p>#{ leadingZero(id) }</p>
        </header>

        <ul>
          {types.map(({type}, index) => (
            <li key={index}>
              <img src={imgType[type.name]} alt={type.name} />
              {type.name}
            </li>
          ))}
        </ul>

        <div>
          <img src={pokeball} alt={"pokebola"} />
          <div>
            <img src={sprites.other.dream_world.front_default} alt={name} />
          </div>
        </div>
      </header>

      <Footer>
        <Status types={types}>
          {statsFiltered.map((stat, index) => (
            <>
              <p>{stat.stat.name}</p>
              <span>{stat.base_stat}</span>
              <div key={index}>
                <div style={{ width: `${stat.base_stat}%` }} />
              </div>
            </>
          ))}
        </Status>
      </Footer>
    </Container>
  );
}