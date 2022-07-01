import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { useModalContext } from "../../hooks/useModalContext";

interface PokemonInfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PokemonInfoModal({ isOpen, onRequestClose }: PokemonInfoModalProps) {
  
  const { pokemonData } = useModalContext();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FaTimes />
      </button>

      <div>
        <h1>
          {pokemonData.name}
        </h1>
      </div>
    </Modal>
  );
}