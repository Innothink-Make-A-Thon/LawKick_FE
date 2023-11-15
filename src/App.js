import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Signup from "./signup/SignUp"
import Signin1 from "./signin/SignIn"
import Signin2 from "./signin/SignIn2"
import Brand1 from "./brand/brand1"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/personal/signin" element={<Signin1 />} />
          <Route path="/company/signin" element={<Signin2 />} />
          <Route path="/company/brand1" element={<Brand1 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
