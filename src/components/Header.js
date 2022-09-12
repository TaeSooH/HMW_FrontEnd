import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"

export default function Header({username}){
    function logout(){
        localStorage.removeItem('token');
        window.location.replace("/");
    }
    return(
        <header>
                <Link to="/" style={{ textDecoration: 'none' }} className="logo">
                <p>HMW</p>
                </Link>
                <div className="user" onClick={logout}>{username}(로그아웃)</div>
        </header>
    );
}