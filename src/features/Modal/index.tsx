import * as S from "./styles";
import { useAppSelector, useAppDispatch } from "store";
import { closeModal } from "store/modal";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const selectedWaifu = useAppSelector(
    (state) => state.modalSlice.selectedWaifu
  );
  if (!selectedWaifu) {
    return <></>;
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <S.ModalOverlay onClick={handleCloseModal}>
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Image layoutId={`card-${selectedWaifu}`} src={selectedWaifu} />
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
