import React, { useState } from "react";
import Header from "../components/Header";
import WordSet from "../components/WordSet";
import Popup from "reactjs-popup";
import "../styles/MemoSet.css"
import { IoAddOutline } from "react-icons/io5"

export default function MemoSet(){
    const [names, setNames] = useState([]);
    const [listName, setListName] = useState("");
    const nameList = names.map((name) => (<WordSet name={name}/>))
    return(
        <div className="container">
            <Header />
            
            <div className="memoSet_box">
                {nameList}
                <Popup 
                    trigger={
                        <div className="add_memoSet">
                            <IoAddOutline size='150' />
                        </div>
                    }
                >
                    <div className="popup_input">
                        <p>단어장의 이름을 입력해주세요.</p>
                        <input value={listName} onChange={(e) => {setListName(e.target.value)}} type='text' />
                        <div 
                            onKeyPress={(props) => {
                                if(props.key === 'Enter')setNames([listName, ...names])
                            }}
                            onClick={() => {
                                setNames([listName, ...names])
                                setListName("")
                            }}
                        >
                            Enter
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
    )
}