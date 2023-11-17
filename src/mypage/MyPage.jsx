import React from "react";
import styled from "styled-components";
import MyTopBar from './MyTopBar';
import Energy from "./Energy";
import History from "./History";


const MyPage = () => {


  return (
    <>
        <MyTopBar/>
        <Energy/>
        <History/>

    </>
  );
};

export default MyPage;
