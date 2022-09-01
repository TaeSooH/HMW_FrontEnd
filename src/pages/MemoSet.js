import React, { useState } from "react"
import Header from "../components/Header"
import WordSet from "../components/WordSet"
import { useForm } from "react-hook-form"
import Popup from "reactjs-popup";
import "../styles/MemoSet.css"
import { IoAddOutline } from "react-icons/io5"

export default function MemoSet() {
    const [names, setNames] = useState([])
    const [listName, setListName] = useState("");
    const nameList = names.map((name, idx) => (<WordSet key={idx} index={idx} name={name} />))
    const [data, setData] = useState();
    const [modalOpened, setModalOpened] = useState(false);
    // const { listName, handleSubmit } = useForm();
    return (
        <div className="container">
            <Header />
            <div className="memoSet_box">
                {nameList}
                <Popup
                    open={modalOpened}
                >
                    <div className="popup_input">
                        <p>단어장의 이름을 입력해주세요.</p>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (listName) {
                                setNames([listName, ...names])
                                setListName("")
                                setModalOpened(false)
                            } else {
                                alert('이름이 입력되지 않았습니다.')
                            }
                        }}>
                            <input className="setNameInput" value={listName} onChange={(e) => { setListName(e.target.value) }} type='text' />
                            <input
                                className="pop_submit"
                                type={"submit"}
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
    )
}