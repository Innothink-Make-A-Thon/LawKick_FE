import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import CameraButton from "../main_img/Camera_Button.png";
import GalleryButton from "../main_img/Gallery_Button.png";

const BottomBarBox = styled.div`
    background-color: #FDC727;
    border-radius: 20px 20px 0rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13.5vh;
    width: 100vw;
    z-index: 100;
`;

const BottomBarNewsBtn = styled.div`
    cursor: pointer;
`;

const BtnImg = styled.img`
    width: 3.5rem;
    height: 3.5rem;
`

const BtnImg2 = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;

const MainBottomBar = () => {

    return (
        <>
            <BottomBarBox>
                <BottomBarNewsBtn onClick={()=>console.log('갤러리 이동..')}>
                    <BtnImg2 src={GalleryButton}/>
                </BottomBarNewsBtn>

                <BottomBarNewsBtn onClick={()=>console.log('갤러리 이동..')}>
                    <BtnImg src={CameraButton}/>
                </BottomBarNewsBtn>
            </BottomBarBox>
        </>
    );
};

export default MainBottomBar;