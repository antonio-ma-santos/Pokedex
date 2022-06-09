import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  place-items: center;
  padding: 3rem 5rem;
  padding-top: 5rem;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`; 