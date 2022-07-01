import styled from "styled-components";

import { darken, transparentize } from "polished";

import { backgroundType } from "../../styles/theme";
import { typeProps } from "../../types";

interface RadioBoxProps {
  isActive: boolean;
  activeColor: typeProps['type']['name'];
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 2rem;
  border: 1px solid;
  border-color: ${(props) => props.isActive ? backgroundType[props.activeColor] : '#d7d7d7'};
  border-radius: 0.25rem;

  text-transform: capitalize;
  text-align: center;
  font-size: 1rem;
  color: #fff;

  background-color: ${(props) => props.isActive ? transparentize(0.2, backgroundType[props.activeColor]) : 'transparent'};

  transition: border-color .3s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
    cursor: pointer;
  }
`;