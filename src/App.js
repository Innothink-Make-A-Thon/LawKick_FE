import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Signup from "./signup/SignUp"
import Signin1 from "./signin/SignIn"
import Signin2 from "./signin/SignIn2"
import Brand1 from "./brand/brand1"
import Brand2 from "./brand/brand2"
import Brand3 from "./brand/brand3"
import Main from "./welcome/Main"
import Tutorial from "./welcome/Tutorial";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/personal/signin" element={<Signin1 />} />
          <Route path="/company/signin" element={<Signin2 />} />
          <Route path="/company/brand1" element={<Brand1 />} />
          <Route path="/company/brand2" element={<Brand2 />} />
          <Route path="/company/brand3" element={<Brand3 />} />
          <Route path="/welcome" element={<Main />} />
          <Route path="/welcome/tutorial" element={<Tutorial />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
