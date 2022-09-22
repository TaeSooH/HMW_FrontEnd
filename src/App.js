import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Memorize from './pages/Memorize';
import MemorizeTest from './pages/MemorizeTest';
import MemoSet from './pages/MemoSet';
import Register from './pages/Register';
import Search from './pages/Search';
import WordList from './pages/WordList';

function App() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() =>{
    if(localStorage.getItem('token') != null){
      console.log(localStorage.getItem('token'));
      async function checkLogged(){
        const token = localStorage.getItem("token");
        await axios.get("http://127.0.0.1:8080/user/getUser", {params: {
            "token": token
        }})
        .then(response => {
          setUserName(response.data.name);
          localStorage.setItem("isLogged", true);
        })
        .catch(error => {
          localStorage.setItem("isLogged", false);
          localStorage.removeItem("token");
        });
      };
      checkLogged();
    }
    else{
      localStorage.setItem("isLogged", false);
    }
    setLoading(false);
  }, []); 
  if(loading) return <div>. . .</div>
  return (
    <Routes>
      <Route exact path='/' element={<Main name={userName} />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/search' element={<Search name={userName} />} />
      <Route exact path='/memoset' element={<MemoSet name={userName} />} />
      <Route exact path='/memoset/wordlist' element={<WordList name={userName} />} />
      <Route exact path='/memoset/wordlist/memorize' element={<Memorize/>} />
    </Routes>
  );
}

export default App;
