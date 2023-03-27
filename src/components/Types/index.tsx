import * as S from "./styles";

interface I_TypeProps {
  onChangeType: (type: string) => void;
  valueType: string;
  types: string[];
}

export const Types = ({ onChangeType, valueType, types }: I_TypeProps) => {
  const onClickType = (type: string) => {
    onChangeType(type);
  };

  return (
    <>
      {types.map((type, idx) => (
        <S.Type
          isActive={valueType === type}
          key={idx}
          onClick={() => onClickType(type)}
        >
          <b>{type}</b>
        </S.Type>
      ))}
    </>
  );
};
