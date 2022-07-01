import styled from "styled-components";

export const Container = styled.form`
  max-width: 400px;
  margin: 20px auto;

  h1 {
    color: #444;
    font-size: 1.8rem;
    text-align: center;
  }

  div {
    display: flex;
    margin-top: 10px;
    height: 40px;

    input {
      width: 90%;
      height: 100%;
      padding: 0 10px;
      border: 0;
      outline: none;
      border: 0;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      background-color: #444;
      font-size: 1.2rem;
      color: #fff;

      &::placeholder {
        color: #bbb;
        opacity: 0.5;
      }

      &:focus {
        outline: auto #aaa;
      }
    }

    button {
      width: 10%;
      height: 100%;
      border: 0;
      outline: none;
      background-color: #444;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      transition: all .3s;

      &:hover {
        cursor: pointer;
        background-color: #555;
      }

      svg {
        color: #fff;
        font-size: 18px;
      }
    }
  }
`;