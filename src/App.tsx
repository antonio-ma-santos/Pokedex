import { useState } from "react";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";

import { RoutesApp } from "../routes";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { PokedexProvider } from "./hooks/usePokedex";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export default function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  
  return (
    <BrowserRouter>
      <PokedexProvider>
        <Header setIsShowSidebar={setIsShowSidebar} />
        <RoutesApp />
        { isShowSidebar && <SideBar active={setIsShowSidebar} /> }
        <GlobalStyle />
      </PokedexProvider>
    </BrowserRouter>
  );
 }