import styled from "styled-components";
import { darken } from "polished";

import { typeProps } from '../../App';

import { backgroundType } from '../../styles/theme';
import { colorType } from "../../styles/theme";

type cardProps = {
  types: typeProps[];
}

export const Container = styled.div<cardProps>`
  width: 20rem;
  height: 25rem;
  border-radius: 1rem;
  background: ${({ types }) => backgroundType[types[0].type.name]};
  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 460px){
    width: 15rem;
    height: 20rem;
  }

  > header {
    width: 100%;
    height: 12.5rem;
    
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;

      p {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: capitalize;

        &:last-child {
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
    }

    @media (max-width: 460px){
      > header p {
        font-size: 1.3rem;

        &:last-child {
          font-size: 1.1rem;
        }
      }
    }

    ul {
      list-style: none;
      display: flex;

      li {  
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 1.5rem;
        margin-top: -0.6rem;
        padding: 0.10rem 0.3rem;
        border-radius: 0.3rem;
        color: var(--shape);
        background: ${({ types }) => colorType[types[0].type.name]};
        font-weight: 500;

        text-transform: capitalize;

        & + li {
          margin-left: 0.5rem;
          background: ${({ types }) => types.length > 1 ? colorType[types[1].type.name] : colorType[types[0].type.name]};
        }

        img {
          width: 1rem;
          height: 1rem;
          margin-right: 4px;
        }

        @media (max-width: 460px){
          font-size: 0.8rem;

          img {
            width: 0.6rem;
            height: 0.6rem;
          }  
        }
      }
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      position: relative;
      
      > img {
        height: 14rem;
        width: 14rem;
        opacity: 0.8;
      }

      div {
        position: absolute;
        top: 0;

        img {
          height: 11rem;
          width: 11rem;
        }
      }

      @media (max-width: 460px){
        > img {
          height: 12rem;
          width: 12rem;
        }

        div img {
          height: 9rem;
          width: 9rem;
        }
      }
    }
  }

  transition: all 0.4s;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 0 5px 8px ${({ types }) => darken(0.10, backgroundType[types[0].type.name])};
  }
`;

export const Footer = styled.footer`
  height: 12.5rem;
  background: var(--shape);
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  box-shadow: 0 -1px 1px #222, inset 0 1px 1px #222;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 460px){
    height: 7.5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: none;
  }
`;

export const Status = styled.section<cardProps>`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  align-items: center;

  > p {
    font-size: 1rem;
    font-weight: bold;
  }

  > span {
    font-size: 0.9rem;
    font-weight: 500;
    text-align: end;
  }

  > div {
    background: ${({ types }) => backgroundType[types[0].type.name]};
    height: 1rem;
    width: 8rem;
    padding: 0.2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    div {
      background: #eee;
      height: 0.5rem;
      border-radius: 0.3rem;
    }
  }

  @media (max-width: 460px){
    margin-top: 1rem;
    margin-left: 1.9rem;
    margin-right: 1.9rem;
    grid-gap: 0.3rem;

    p {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.9rem;
    }

    > div {
      height: 0.8rem;
      width: 5rem;

      div {
        height: 0.3rem;
      }
    }
  }
`;