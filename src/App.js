import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import Signup from "./signup/SignUp"
import Signin1 from "./signin/SignIn"
import Signin2 from "./signin/SignIn2"
import Brand1 from "./brand/brand1"
import Brand2 from "./brand/brand2"
import Brand3 from "./brand/brand3"
import Main from "./welcome/Main"
import Tutorial from "./welcome/Tutorial";
import MainPage from "./main/mainPage";
import ReportPage from "./report/reportPage";
import MyPage from "./mypage/MyPage";
import SelectPage from "./select/selectPage";
import NotFoundPage from "./notfound/notFoundPage";
import Manager from "./manager/Manager";

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
          <Route path="/" element={<Main />} />
          <Route path="/welcome/tutorial" element={<Tutorial />} />
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/report/:reportID" element={<ReportPage/>} />
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/admin/select" element={<SelectPage/>}/>
          <Route path="/manager" element={<Manager/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
