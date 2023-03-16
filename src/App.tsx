import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { createGlobalStyle } from "styled-components";
import { user } from "./components/states";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Memorize from "./pages/Memorize";
import MemoSet from "./pages/MemoSet/index";
import SignUp from "./pages/Register/index";
import Search from "./pages/Search";
import Share from "./pages/Share";
import SharedSetWord from "./pages/SharedSetWord";
import Spelling from "./pages/Spelling";
import WordList from "./pages/WordList";
import MyClass from "./pages/MyClass";
import InClass from "./pages/InClass";
import ClassWordList from "./pages/ClassWordList";
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useRecoilState(user);
  const logOut = () => {
    axios
      .get("/api/auth/logout")
      .then((res) => {
        setUserName("");
        window.location.replace("/");
      })
      .catch((err) => console.log(err));
  };
  const authCheck = () => {
    axios
      .get("/api/auth/getUser") // 토큰으로 서버에 인증 요청
      .then((res) => {
        console.log(res.data);
        setUserName(res.data.username);
      })
      .catch(() => {
        logOut();
      });
  };
  useEffect(() => {
    authCheck();
    setLoading(false);
  }, []);
  if (loading) return <div>. . .</div>;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main name={userName} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/search" element={<Search name={userName} />} />
        <Route path="/memoset" element={<MemoSet name={userName} />} />
        <Route
          path="/memoset/wordlist/:setId"
          element={<WordList name={userName} />}
        />
        <Route
          path="/memoset/wordlist/memorize/:setId"
          // path="/memorize"
          element={<Memorize />}
        />
        <Route
          path="/memoset/wordlist/spelling/:setId"
          element={<Spelling />}
        />
        <Route path="/share" element={<Share name={userName} />} />
        <Route
          path="/share/sharedSetWord/:setId"
          element={<SharedSetWord name={userName} />}
        />
        <Route path="/myclass" element={<MyClass username={userName} />} />
        <Route
          path="/myclass/inclass/:classId"
          element={<InClass name={userName} />}
        />
        <Route
          path="/myclass/inclass/wordList/:setId"
          element={<ClassWordList name={userName} />}
        />
      </Routes>
    </>
  );
}

export default App;
