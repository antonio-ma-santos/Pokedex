import { useState } from "react";

import { FiArrowUp } from "react-icons/fi";

import { Button } from "./styles";

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    
    if (scrolled > 300) {
      setIsVisible(true);
    }else if (scrolled <= 300){
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", toggleVisible);

  return (
    isVisible ? (
      <Button>
        <FiArrowUp onClick={scrollToTop} />
      </Button>
    ) : 
    <></>
  );
}