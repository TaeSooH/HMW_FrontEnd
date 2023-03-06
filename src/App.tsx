import axios from "axios";
import React, { useEffect, useState } from "react";
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
          // path="/memoset/wordlist/memorize/:setId"
          path="/memorize"
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
      </Routes>
    </>
  );
}

export default App;
