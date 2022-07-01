import { Container } from './styles';

import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

type pagesProps = {
  next: string | null;
  previous: string | null;
}

type footerProps = {
  next: () => void;
  prev: () => void;
  count: number;
  pages: pagesProps;
  pageNumber: number;
  cardsPerPage: number;
}

export function Footer({ next, prev, count, pages, pageNumber, cardsPerPage }: footerProps) {

  return (
   <Container>
     <div>
       <button 
         type="button" 
         onClick={() => prev()}
         disabled={pages.previous === null}
       >
         <FiArrowLeft />
       </button>

       <span>página {pageNumber} / {(count / cardsPerPage).toFixed(0)}</span>

       <button 
         type="button" 
         onClick={() => next()}
         disabled={pages.next === null}   
       >
         <FiArrowRight />
       </button>
     </div>
     <div>
        <a href="https://www.linkedin.com/in/antônio-marcelino/" target="_blank">
          <p>Developed by<span>Antônio Marcelino</span></p>
        </a>
        <a href="https://pokeapi.co/" target="_blank">
          <p>Developed using<span>PokéApi</span></p>
        </a>
     </div>
   </Container> 
  );
}