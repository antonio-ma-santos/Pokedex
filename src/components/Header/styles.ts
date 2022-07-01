import styled from 'styled-components';

export const Container = styled.header`
  /* width: 100%;
  height: 100px;
  position: relative;
  background: #222;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    width: 26px;
    height: 26px;
    color: #999;

    position: absolute;
    top: 34px;
    left: 12px;

    transition: color .3s;
    
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }

  p {
    color: #fff;
    font-size: 1.2rem;

    span {
      color: #999;
      font: 1rem;
    }
  } */

  width: 100%;
  height: 100px;
  background: #222;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  > svg {
    width: 26px;
    height: 26px;
    color: #999;

    transition: color .3s;
    
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  max-width: 300px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  img {
    width: 60px;
    height: 60px;

    @media (max-width: 460px){
      width: 50px;
      height: 50px;
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

export const PokedexIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  
  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  span {
    color: #bbb;
    font: 1rem;
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