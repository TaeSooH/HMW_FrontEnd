import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./SharedSet.css";
import { user } from ".././states";

interface ISharedSet {
  id: number;
  title: string;
  word_length: number;
  owner: string;
}

const SharedSet = ({ id, title, word_length, owner }: ISharedSet) => {
  const [userName, setUserName] = useRecoilState(user);
  const download = () => {
    if (userName === owner) {
      alert("본인이 공유한 세트입니다.");
    } else {
      const form = { owner: userName };
      console.log(userName);
      axios
        .post(
          `https://helpingmemo.ga/wordSet/downloadSharedWordSet/${id}?owner=${userName}`
        )
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          alert("다운로드 실패");
        });
    }
  };
  return (
    <>
      <div className="ShareSet_container">
        <div className="row_box">
          <Link to={`/share/sharedSetWord/${id}/`}>
            <div className="set_box1">
              <div className="main_box1">
                <p>세트이름: {title}</p>
                <span>단어 개수: {word_length}개</span>
              </div>
              <div className="bottom_box"></div>
            </div>
          </Link>
          <div className="right_set_box">
            <p>세트이름 : {title}</p>
            <span>유저이름 : {owner}</span>
          </div>
        </div>
        <button className="down" onClick={download}>
          세트 다운로드
        </button>
      </div>
    </>
  );
};

export default SharedSet;
