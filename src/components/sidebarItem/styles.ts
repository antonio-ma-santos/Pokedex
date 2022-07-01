import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #222;
  padding: 10px;
  margin: 0 15px 20px;
  font-size: 1rem;
  color: #fff;
  border-radius: 5px;
  transition: background-color .3s;
  
  > svg {
    margin-right: 10px;
  }
  
  &:hover {
    cursor: pointer;
    background-color: #111;
  }
`;