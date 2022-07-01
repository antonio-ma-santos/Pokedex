import { RadioBox } from "./styles";

import { typeProps } from "../../types";
import { usePokedex } from "../../hooks/usePokedex";

interface radioBoxProps {
  type: typeProps['type']['name'];
  // activeType: typeProps['type']['name'];
  // setType: (type: typeProps['type']['name']) => void;
}

export function FilterItem({ type }: radioBoxProps) {

  const { getPokemonPerType, activeColor, setActiveColor } = usePokedex();

  function handleSelectType() {
    getPokemonPerType(type);
    setActiveColor(type);
  }

  return (
    <RadioBox
      type="button"
      onClick={handleSelectType}
      isActive={type === activeColor}
      activeColor={activeColor}
    >
      { type }
    </RadioBox>
  );
}