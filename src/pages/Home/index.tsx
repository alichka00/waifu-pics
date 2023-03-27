import * as S from "./styles";
import { useGetWaifuQuery } from "store/waifuApi";
import { WaifuPic } from "components/WaifuPic";
import { useSearchParams } from "react-router-dom";
import { searchParamsToObject } from "utils/searchParams";
import { ChangeEvent } from "react";
import { SelectField } from "components/SelectField";
import { Types } from "components/Types";
import { RxReload } from "react-icons/rx";
import { Modal } from "features/Modal";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParamsToObject(searchParams);
  const params = {
    type: searchParams.get("type") || "sfw",
    category: searchParams.get("category") || "waifu",
  };
  const apiData = {
    type: params.type,
    category: params.category,
  };
  const { data, isError, isLoading } = useGetWaifuQuery(apiData);

  const onChangeCategorySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      ...currentParams,
      category: e.target.value,
    });
  };

  const onChangeType = (type: string) => {
    setSearchParams({
      ...currentParams,
      type: type,
    });
  };

  const categorySfwList = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "hug",
    "awoo",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
  ];
  const categoryNsfwList = ["waifu", "neko", "trap", "blowjob"];
  const typeList = ["sfw", "nsfw"];

  function onReloadPage() {
    window.location.reload();
  }

  return (
    <S.Container>
      <S.FilterWrap>
        <S.WrapperSelects>
          <Types
            types={typeList}
            valueType={params.type}
            onChangeType={onChangeType}
          />
        </S.WrapperSelects>
        <SelectField
          defaultValue="Category"
          options={params.type === "sfw" ? categorySfwList : categoryNsfwList}
          value={params.category}
          onChange={onChangeCategorySelect}
        />
      </S.FilterWrap>
      <S.ReloadButton onClick={onReloadPage}>
        <RxReload
          size={20}
          style={{ verticalAlign: "middle", color: "#fff" }}
        />
      </S.ReloadButton>

      {isError ? (
        <S.Error>Sorry, but nothing was found</S.Error>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <WaifuPic waifu={data?.files || []} />
      ) : null}
      <Modal />
    </S.Container>
  );
};
