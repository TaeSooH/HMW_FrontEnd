import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import SharedSet from "../../components/SharedSet/SharedSet";
import "./Share.css";

interface IProp {
  name: string;
}
interface ISharedSet {
  id: number;
  title: string;
  word_length: number;
  owner: string;
}

const Share = (props: IProp) => {
  const [sharedSets, setSharedSet] = useState([]);
  useEffect(() => {
    axios
      .get("https://helpingmemo.ga/wordSet/getSharedWordSet")
      .then((res) => {
        setSharedSet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <Header username={props.name} />
        <div className="Share_container">
          <div className="fl_box">
            {sharedSets.map((data: ISharedSet, index: number) => (
              <SharedSet
                id={data.id}
                title={data.title}
                word_length={data.word_length}
                owner={data.owner}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
