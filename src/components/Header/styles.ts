import styled from 'styled-components';

export const Container = styled.header`
  background: #222;
  width: 100%;
  height: 6rem;
  position: relative;
`;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;
    height: 70px;

    @media (max-width: 460px){
      width: 60px;
      height: 60px;
    }
  }

  h1 {
    margin-left: 1rem;
    color: var(--shape);

    span {
      color: yellow;
    }
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 25px;
  right: 30px;

  @media (max-width: 460px){
    display: none;
  }

  span {
    font-size: 1rem;
    color: var(--shape);
    margin-bottom: 8px;
    font-weight: bold;
  }

  > div {
    display: flex;
    width: 5rem;
    height: 1.8rem;
    line-height: 3;
    background: #5c6664;
    border-radius: 0.3rem;

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      border: 0;
      background: #555; 

      flex: 1;
      padding: 0 0.5rem;
      color: #fff;
      cursor: pointer;
      border: 1px solid #888;
      font-size: 1rem;
      border-radius: 0.5rem;
      text-align: center;
    }
  }
`;