import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "./components/states";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Memorize from "./pages/Memorize/Memorize";
import MemoSet from "./pages/MemoSet/MemoSet";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import Share from "./pages/Share/Share";
import SharedSetWord from "./pages/SharedSetWord";
import Spelling from "./pages/Spelling/Spelling";
import WordList from "./pages/WordList/WordList";

function App() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useRecoilState(user);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      console.log(localStorage.getItem("token"));
      async function checkLogged() {
        const token = localStorage.getItem("token");
        await axios
          .get("https://helpingmemo.ga/user/getUser", {
            params: {
              token: token,
            },
          })
          .then((response) => {
            setUserName(response.data.name);
            localStorage.setItem("isLogged", JSON.stringify(true));
          })
          .catch((error) => {
            localStorage.setItem("isLogged", JSON.stringify(false));
            localStorage.removeItem("token");
          });
      }
      checkLogged();
    } else {
      localStorage.setItem("isLogged", JSON.stringify(false));
    }
    setLoading(false);
  }, []);
  if (loading) return <div>. . .</div>;
  return (
    <Routes>
      <Route path="/" element={<Main name={userName} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search name={userName} />} />
      <Route path="/memoset" element={<MemoSet name={userName} />} />
      <Route
        path="/memoset/wordlist/:setId"
        element={<WordList name={userName} />}
      />
      <Route path="/memoset/wordlist/memorize/:setId" element={<Memorize />} />
      <Route path="/memoset/wordlist/spelling/:setId" element={<Spelling />} />
      <Route path="/share" element={<Share name={userName} />} />
      <Route
        path="/share/sharedSetWord/:setId"
        element={<SharedSetWord name={userName} />}
      />
    </Routes>
  );
}

export default App;
