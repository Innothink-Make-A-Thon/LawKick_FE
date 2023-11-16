import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import SirenIcon from "../main_img/Siren_Icon.png";
import SubmitBtn from "../../components/Submitbtn";
import MainKickInfo from "./MainKickInfo";

const BottomKickBox = styled.div`
    background-color: white;
    border-radius: 20px 20px 0rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25vh;
    width: 100vw;
    z-index: 100;
`;


//맞다 위에 siren icon 추가!

const MainKickBox = () => {

    return (
        <>
            <BottomKickBox>
                <MainKickInfo></MainKickInfo>
                <SubmitBtn isYellow={true} buttonText="촬영하기" ></SubmitBtn>
            </BottomKickBox>
        </>
    );
};

export default MainKickBox;