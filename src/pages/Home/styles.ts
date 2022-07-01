import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    
    h1 {
      font-size: 1.8rem;
    }
    
    img {
      width: 300px;
      height: 300px;
      margin-top: 20px;
    }
  }
`;