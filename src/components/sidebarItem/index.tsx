import { IconType } from "react-icons";

import { Container } from "./styles";

type sidebarItemProps = {
  Icon: IconType;
  text: string;
}

export function SidebarItem({ Icon, text }: sidebarItemProps) {
  return (
    <Container>
      <Icon />
      { text }
    </Container>
  );
}