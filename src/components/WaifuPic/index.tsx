import { useCallback, useState } from "react";
import { useAppDispatch } from "store";
import { openModal } from "store/modal";
import * as S from "./styles";

interface I_WaifuProps {
  waifu: [];
}

export const WaifuPic = (waifu: I_WaifuProps) => {
  const dispatch = useAppDispatch();
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleOpenModal = (item: string) => {
    dispatch(openModal(item));
    forceUpdate();
  };
  return (
    <S.PicWrapper>
      {waifu.waifu.map((item) => (
        <div key={item}>
          <S.Pic
            whileHover={{
              scale: 1.025,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => handleOpenModal(item)}
            layoutId={`card-${item}`}
            src={item}
          />
        </div>
      ))}
    </S.PicWrapper>
  );
};
