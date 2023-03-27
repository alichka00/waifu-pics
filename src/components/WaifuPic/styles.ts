import styled from "styled-components";
import { motion } from "framer-motion";

interface I_ImageProps {
  src: string;
}

export const PicWrapper = styled.div`
  column-count: 4;
  column-gap: 5px;

  @media (max-width: 769px) {
    column-count: 3;
  }

  @media (max-width: 426px) {
    column-count: 2;
  }

  @media (max-width: 376px) {
    column-count: 1;
  }
`;

export const Pic = styled(motion.img)<I_ImageProps>`
  width: 100%;
  height: 100%;
  user-select: none;
`;
