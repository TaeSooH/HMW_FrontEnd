import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import WordSet from "../components/WordSet"
import Popup from "reactjs-popup";
import "../styles/MemoSet.css"
import { IoAddOutline } from "react-icons/io5"
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function MemoSet() {
    const location = useLocation();
    const username = location.state?.username;
    const [names, setNames] = useState([])
    const [listName, setListName] = useState("");
    const nameList = names.slice(0).reverse().map((data, idx) => (<WordSet key={idx} index={idx} name={data.title} id={data.id} />))
    const [data, setData] = useState();
    const [modalOpened, setModalOpened] = useState(false);
    useEffect(() => {
        const isLogged = localStorage.getItem("isLogged");
        if(isLogged === 'true'){
        async function GetWordSet(){
            await axios.get(`http://127.0.0.1:8080/wordSet/getWordSet?owner=${username}`)
            .then(response =>{
                console.log(response.data);
                setNames(response.data);
            })
        }
        GetWordSet();
        }
        else{
            window.location.replace("/");
        }
    }, []);
    async function setWordSet(e){
        e.preventDefault();
        if (listName) {
            const form = new FormData();
            form.append('title', listName);
            form.append('owner', username)
            await axios.post("http://127.0.0.1:8080/wordSet/setWordSet", form)
            .then(response =>{
                alert(response.data);
                setListName("");
                setModalOpened(false);
                window.location.replace("/memoset");
            })
            .catch(error => {
                alert(error);
            });
        } else {
            alert('이름이 입력되지 않았습니다.')
        }
        
    }
    return (
        <div className="container">
            <Header username={username} />
            <div className="memoSet_box">
                {nameList}
                <Popup
                    open={modalOpened}
                    onClose={()=>{
                        setModalOpened(false);
                        setListName("");
                    }
                    }
                >
                    <div className="popup_input">
                        <p>단어장의 이름을 입력해주세요.</p>
                        <form onSubmit={setWordSet}>
                            <input className="setNameInput" value={listName} onChange={(e) => { setListName(e.target.value) }} type='text' />
                            <input
                                className="pop_submit"
                                type="submit"
                                value="enter"
                            />
                        </form>
                    </div>
                </Popup>
                <div className="add_memoSet" onClick={() => setModalOpened(true)}>
                    <IoAddOutline size='150' />
                </div>
            </div>
        </div>
    );
}