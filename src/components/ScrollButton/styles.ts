import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  right: 15px;
  bottom: 190px;
  z-index: 1;
  background-color: var(--red);
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: background-color 0.3s;
  animation: scrollTop 0.3s alternate ease infinite;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--shape);
  }

  &:hover {
    background-color: ${() => darken(0.15, '#F71616')};
  }

  @keyframes scrollTop {
    from {
      transform: translateY(2px);
    }
    to {
      transform: translateY(-2px);
    }
  }
`;