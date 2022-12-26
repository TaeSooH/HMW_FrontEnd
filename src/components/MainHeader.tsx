import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainHeader.css"

export default function MainHeader(){
    return(
        <header className="mainheader">
                <Link to="/">
                <p className="mainlogo">HMW - Helping Memorize Words</p>
                </Link>
        </header>
    );
}