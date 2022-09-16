import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Main.css"

export default function Main({name}){
    console.log(name);
    return(
        <div className="container">
            <Header username={name} />
            <div className="section1">
                <div className="left_sec">
                <div className="sec1_title">
                    영어 단어 암기를 편하게!
                </div>
                <div className="sec1_content">
                    쉽고,<br/>빠르게,<br/>영어 단어 성적 올리자!
                </div>
                </div>
            </div>
            <div className="section2">
                <div className="sec2_title">
                    단어 세트를 편하게 등록해보세요
                </div>
                <Link to="/memoset" state={{username: name}} className="sec2_goSet" >
                        바로가기
                </Link>
                <div className="sec2_content">
                    <img src="/addSet.png"/>
                </div>
            </div>
            <div className="section3">
                <div className="sec3_title">
                    단어를 등록하고, 등록한 단어를 암기해보세요
                </div>
                <div className="sec3_content">
                    <div className="reg_content">
                        <div className="reg_title">
                            단어 등록
                        </div>
                        <img src="/reg.png" />
                    </div>
                    <div className="memo_content">
                        <div className="memo_title">
                            단어 암기
                        </div>
                        <img src="/memo.png" />
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="sec4_title">
                    모르는 단어는 검색해보기!
                </div>
                <Link to="/search" state={{username: name}} className="sec4_goSearch">
                    바로가기
                </Link>
                <div className="sec4_content">
                    <img src="/search_content.png"  />
                </div>
            </div>
        </div>
    );
}