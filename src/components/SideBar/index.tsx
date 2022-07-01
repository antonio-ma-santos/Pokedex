 import { Link } from "react-router-dom";
 
 import { SidebarItem } from "../sidebarItem";
 import { FilterItem } from "../FilterItem";
 import { usePokedex } from "../../hooks/usePokedex";
 
 import { Container, Content, ContentFilter } from "./styles";
 
 import { FaTimes, FaHome } from "react-icons/fa";
 import { MdFavorite, MdFilterListAlt } from "react-icons/md";
 import { AiOutlineClear } from "react-icons/ai";

 import { typesArray } from "../../styles/theme";
 import { typeProps } from "../../types";

 type sideBarProps = {
   active: (value: boolean) => void;
 }

 type typeBackground = typeProps['type']['name'];

 export function SideBar({ active }: sideBarProps) {
 
   const { clearPokemonsFiltered } =  usePokedex();

   window.onclick = (event) => {
     if (event.x > 300) {
       active(false);
     }
   }
 
   return (
     <Container>
       <FaTimes onClick={() => active(false)}/>

       <Content>
         <Link to="/">
           <SidebarItem Icon={FaHome} text="Home"/>
         </Link>
         <Link to="/pokedex">
           <SidebarItem Icon={MdFavorite} text="Pokédex"/>
         </Link>
       </Content>

       <ContentFilter>
         <header>
           <div>
             <MdFilterListAlt />
             <span>Filtro</span>
           </div>

           <button onClick={clearPokemonsFiltered}>
             <AiOutlineClear />
             Limpar
           </button>
         </header>

         <div>
           { 
             typesArray.map((type) => <FilterItem type={type as typeBackground} />)
           }
         </div>
       </ContentFilter>
     </Container>
   );
 }