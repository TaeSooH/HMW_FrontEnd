import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"

export default function Header(){
    return(
        <header>
                <Link to="/" style={{ textDecoration: 'none' }} className="logo">
                <p>HMW</p>
                </Link>
        </header>
    );
}