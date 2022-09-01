import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function MemoSet(){
    const location = useLocation();
    const username = location.state?.username;
    return(
        <div className="container">
        <Header username={username} />
        <div>암기</div>
        </div>
    )
}