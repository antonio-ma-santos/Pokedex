
import pokeball from '../../assets/pokerball-04.png';

import { Container } from "./styles";

export function Pokeball() {
 
  return (
    <Container>
      <img src={pokeball} alt="pokeball" />
    </Container>
  );
}