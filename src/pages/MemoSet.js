import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import WordSet from "../components/WordSet"
import Popup from "reactjs-popup";
import "../styles/MemoSet.css"
import { IoAddOutline } from "react-icons/io5"
import { Link, useHref, useLocation } from "react-router-dom";
import axios from "axios";

export default function MemoSet({name}) {
    const [names, setNames] = useState([])
    const [listName, setListName] = useState("");
    const nameList = names.map((data, idx) => (<WordSet key={idx} index={idx} name={data.title} id={data.id} />))
    const [data, setData] = useState();
    const [modalOpened, setModalOpened] = useState(false);
    useEffect(() => {
        const isLogged = localStorage.getItem("isLogged");
        console.log(name);
        if(isLogged === 'true'){
        async function GetWordSet(){
            await axios.get(`http://127.0.0.1:8080/wordSet/getWordSet?owner=${name}`)
            .then(response =>{
                console.log(response.data);
                setNames(response.data);
            })
        }
        GetWordSet();
        }
        else{
            alert("로그인이 필요한 작업입니다.")
            window.location.href("/");
        }
    }, [name]);
    async function setWordSet(e){
        e.preventDefault();
        if (listName) {
            const form = new FormData();
            form.append('title', listName);
            form.append('owner', name)
            await axios.post("http://127.0.0.1:8080/wordSet/setWordSet", form)
            .then(response =>{
                setListName("");
                setModalOpened(false);
                window.location.replace("/memoset");
            })
            .catch(error => {
                alert(error);
            });
            async function GetWordSet(){
                await axios.get(`http://127.0.0.1:8080/wordSet/getWordSet?owner=${name}`)
                .then(response =>{
                    console.log(response.data);
                    setNames(response.data);
                })
            }
            GetWordSet();
        } else {
            alert('이름이 입력되지 않았습니다.')
        }
        
    }
    return (
        <div className="memoset_container">
            <Header username={name} />
            {names.length < 1 ? <div className="noset"> 아직 세트가 없습니다 . . .</div>:<div className="memoSet_box">
                {nameList}
                
            </div>}
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
                        <form 
                        onSubmit={setWordSet}
                        >
                            <input className="setNameInput" value={listName} onChange={(e) => { setListName(e.target.value) }} type='text' />
                            <input
                                className="pop_submit"
                                type="submit"
                                value="enter"
                            />
                        </form>
                    </div>
                </Popup>
            <div className="add_memoSet" onClick={() => {setModalOpened(true)}}>
                    추가하기
            </div>
        </div>
    );
}