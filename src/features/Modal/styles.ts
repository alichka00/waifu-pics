import { motion } from "framer-motion";
import styled from "styled-components";

interface I_ImageProps {
  src: string;
}

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / 65%);
`;

export const ModalContent = styled.div`
  max-width: 350px;
  margin: 24px;

  @media (min-width: 1400px) {
    max-width: 500px;
  }
`;

export const Image = styled(motion.img)<I_ImageProps>`
  user-select: none;
  width: 100%;
  max-height: 500px;

  @media (min-width: 1400px) {
    max-height: 100%;
  }
`;
