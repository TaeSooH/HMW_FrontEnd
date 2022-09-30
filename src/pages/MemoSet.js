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
    const nameList = names.map((data, idx) => (<WordSet key={idx} index={idx} name={data.title} id={data.id} length={data.word_length} />))
    const [isLoading, setIsLoading] = useState(true);
    const [modalOpened, setModalOpened] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        console.log(name);
        if(localStorage.getItem("isLogged") === 'true'){
        setIsLogged(true);
        async function GetWordSet(){
            await axios.get(`hhttps://helpingmemo.ga/wordSet/getWordSet?owner=${name}`)
            .then(response =>{
                console.log(response.data);
                const wordSets = response.data;
                setNames(response.data);
            })
            setIsLoading(false);
        }
        GetWordSet();
        }
        else{
            alert("로그인이 필요한 작업입니다.")
            window.location.replace("/login");
        }
        
    }, [name]);
    async function setWordSet(e){
        e.preventDefault();
        if (listName) {
            const form = new FormData();
            form.append('title', listName);
            form.append('owner', name)
            await axios.post("https://helpingmemo.ga/wordSet/setWordSet", form)
            .then(response =>{
                setListName("");
                setModalOpened(false);
                window.location.replace("/memoset");
            })
            .catch(error => {
                alert(error);
            });
            async function GetWordSet(){
                await axios.get(`https://helpingmemo.ga/getWordSet?owner=${name}`)
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
    if(isLoading || !isLogged) return <div>...</div>
    return (
        <>
        <div className="memoset_container">
            <Header username={name} />
            {names.length < 1 ? <div className="noset"> 아직 세트가 없습니다 . . .</div>
            :<div className={names.length <= 6 ? "memoSet_box" : "long_memoSet_box"} >
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
                새로 만들기
            </div>
        </div>
        </>);
}