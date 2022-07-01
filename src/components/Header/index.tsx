import logoImg from '../../assets/pokerball-04.png';
import { FaBars } from "react-icons/fa";

import { Container, Content, ContainerSelect, PokedexIcon } from './styles';
import { Link } from "react-router-dom";

import svgIcon from "../../assets/pokeball-icon.svg";
import { usePokedex } from "../../hooks/usePokedex";

type headerProps = {
  // cardsPerPage: (value: number) => void;
  setIsShowSidebar: (value: boolean) => void;
}

export function Header({ setIsShowSidebar }: headerProps) {
  const { pokedex } = usePokedex();

  const pokedexSize = pokedex.length;

  return (
    <Container>
      <FaBars onClick={() => setIsShowSidebar(true)}/>

      <Content>
        <Link to="/">
          <img src={logoImg} alt="Pokebola" />
        </Link>
        <Link to="/pokedex">
          <h1>Poké<span>Dex</span></h1>
        </Link>
      </Content>

      <PokedexIcon>
        <img src={svgIcon} alt="icon" />
        <span>
          { pokedexSize > 1 ? `${pokedexSize} cards` : `${pokedexSize} card` }
        </span>
      </PokedexIcon>

      {/* <ContainerSelect>
        <span>Cards por página</span>
        <div>
          <select name="cards" defaultValue="20" onChange={(e) => cardsPerPage(Number(e.target.value))}>
            <option value="10">10</option>
            <option value="20" >20</option>
            <option value="50">50</option>
          </select>
        </div>
      </ContainerSelect> */}

      {/* { isShowSidebar && <SideBar active={setIsShowSidebar} /> } */}
    </Container>
  );
}