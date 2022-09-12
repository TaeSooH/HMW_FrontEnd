import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import MemoSet from './pages/MemoSet';
import Register from './pages/Register';
import Search from './pages/Search';
import WordList from './pages/WordList';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() =>{
    if(localStorage.getItem('token') != null){
      async function checkLogged(){
        const token = localStorage.getItem("token");
        await axios.get("http://127.0.0.1:8080/user/getUser", {params: {
            "token": token
        }})
        .then(response => {
          setUserName(response.data.name);
          setIsLogged(true);
          localStorage.setItem("isLogged", true);
        })
        .catch(error => {
          console.log(error);
          setIsLogged(false); 
          console.log(isLogged);
          localStorage.setItem("isLogged", false);
          localStorage.removeItem("token");
        });
      };
      checkLogged();
    }
    else{
      setIsLogged(false);
    }
  }, []); 
  return (
    <Routes>
      <Route exact path='/' element={ isLogged ? <Main name={userName} /> : <Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/search' element={<Search name={userName} />} />
      <Route exact path='/memoset' element={<MemoSet name={userName} />} />
      <Route exact path='/memoset/wordlist' element={<WordList name={userName} />} />
    </Routes>
  );
}

export default App;
