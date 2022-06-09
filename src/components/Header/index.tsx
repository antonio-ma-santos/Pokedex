
import logoImg from '../../assets/pokerball-04.png';

import { Container, Content, ContainerSelect } from './styles';

type headerProps = {
  cardsPerPage: (value: number) => void;
}

export function Header({ cardsPerPage }: headerProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Pokebola" />
        <h1>Poké<span>Dex</span></h1>
      </Content>
      
      <ContainerSelect>
        <span>Cards por página</span>
        <div>
          <select name="cards" defaultValue="20" onChange={(e) => cardsPerPage(Number(e.target.value))}>
            <option value="10">10</option>
            <option value="20" >20</option>
            <option value="50">50</option>
          </select>
        </div>
      </ContainerSelect>
    </Container>
  );
}