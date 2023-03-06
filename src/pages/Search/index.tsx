import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";

interface IProp {
  name: string;
}

export default function Search(props: IProp) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<AxiosResponse>();
  const [ser_text, setText] = useState("");
  const [prText, setPrText] = useState("");
  const [example, setExample] = useState("");
  const [mean, setMean] = useState("");
  const searchWord = () => {
    setIsLoading(true);
    axios
      .get("https://192.168.10.74/search?word=" + ser_text)
      .then((res) => {
        setSearchData(res);
        if (searchData?.data[0] !== undefined) {
          searchData.data[0] = searchData?.data[0].replace(
            /\(Edu times\)/g,
            ""
          );
          searchData.data[0] = searchData?.data[0].replace(
            /\(Kids Edu times\)/g,
            ""
          );
          searchData.data[0] = searchData?.data[0].replace(/\n/g, "<br/>");
        }
        if (searchData?.data[1] !== undefined)
          searchData.data[1] = searchData?.data[1].replace(/\n/g, "<br/>");
        setPrText(ser_text);
        setText("");
        setMean(searchData?.data[1]);
        setExample(searchData?.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("잘못된 단어");
        setIsLoading(false);
        setPrText("");
        setMean("");
        setExample("");
        setText("");
      });
    // const response = await axios
    //   .get("https://helpingmemo.ga/search?word=" + ser_text)
    //   .catch((err) => {
    //     alert("잘못된 단어");
    //     setIsLoading(false);
    //     setPrText("");
    //     setMean("");
    //     setExample("");
    //     setText("");
    //   });
    // response.data[0] = response.data[0].replace(/\(Edu times\)/g, "");
    // response.data[0] = response.data[0].replace(/\(Kids Edu times\)/g, "");
    // response.data[0] = response.data[0].replace(/\n/g, "<br/>");
    // response.data[1] = response.data[1].replace(/\n/g, "<br/>");
    // setPrText(ser_text);
    // setText("");
    // setMean(response.data[1]);
    // setExample(response.data[0]);
    // setIsLoading(false);
  };
  function enter(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      searchWord();
    }
  }
  return (
    <S.Container>
      <Header username={props.name} />
      <Link to="/">
        <S.BackBtn src="back.png" alt="사진이 없음" />
      </Link>
      <S.SerLabel>
        <S.SerTitle>사전 검색</S.SerTitle>
        <S.SerBar>
          <S.SerInput
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={ser_text}
            type={"text"}
            placeholder="search..."
            onKeyDown={enter}
          />
          <S.SerBtn onClick={searchWord} src="search.png" alt="사진이 없음" />
        </S.SerBar>
      </S.SerLabel>
      <S.WordMean>
        {isLoading ? (
          <S.Loading>로딩중 ...</S.Loading>
        ) : (
          <>
            {prText === "" ? (
              <></>
            ) : (
              <>
                <S.InputValueBox>
                  <S.InputValue>{prText}</S.InputValue>
                </S.InputValueBox>
                <S.SerResult>
                  <S.Mean dangerouslySetInnerHTML={{ __html: mean }}></S.Mean>
                  <S.Example
                    dangerouslySetInnerHTML={{ __html: example }}
                  ></S.Example>
                </S.SerResult>
              </>
            )}
          </>
        )}
      </S.WordMean>
    </S.Container>
  );
}
