import styled from "styled-components";

import { lighten } from 'polished';

export const Container = styled.footer`
  background-color: #222;
  width: 100%;
  height: 11rem;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 1rem;
      margin-right: 1rem;
      color: var(--shape);
      font-size: 1rem;
    }
    
    button {
      font-size: 1.3rem;
      color: var(--shape);
      background: var(--red);
      border: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      
      display: flex;
      justify-content: center;
      align-items: center;
  
      & + button {
        margin-left: 5rem;
      }
  
      transition: transform 0.4s;
  
      &:hover {
        transform: scale(1.07);
      }

      &:disabled {
        color: ${lighten(0.3, '#F71616')};
        cursor: not-allowed;
        transform: none;
      }
    }

    @media (max-width: 600px) {
      span {
        font-size: 0.8rem;
      }
    }
  }

  > button {
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 1.5rem;
    background-color: var(--red);
    color: var(--shape);

    position: absolute;
    bottom: 1rem;
    right: 2rem;

    transition: transform 0.4s;

    &:hover {
      transform: scale(1.1); 
    }

    > img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  div:last-child {
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      
      & + a {
        margin-top: 10px;
      }

      p{
        font-size: 1rem;
        color: var(--shape);

        span {
          font-size: 1.1rem;
          color: yellow;
          margin-left: 10px;
        }
      }
    }
  }
`;