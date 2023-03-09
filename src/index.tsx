import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(
ReactDOM.render(
  <CookiesProvider>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </CookiesProvider>,
  document.getElementById("root")
);

reportWebVitals(console.log);
