import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PointImg from "../main_img/Point_Img.png";

const MainPointDiv = styled.div`
    display: flex;
    width: 90px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
    //background-color: #FFF4D4;
    border-radius: 8px;
    cursor: pointer; 
    justify-content: center;
    align-items: center;
    margin-right:5px;
    margin-top: 5px;
`;

const MainPointImg = styled.img`
    width: 29.951px;
    height: 29.951px;
    margin-right: 5px;
`;

const MainPointScore = styled.p`
    font-weight: bold;
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`;

const MainPoint = () => {
    const navigate = useNavigate();

    const handleMainPointDivClick = () => {
        navigate('/mypage');
    };

    return (
        <MainPointDiv onClick={handleMainPointDivClick}>
            <MainPointImg src={PointImg} alt="Point Image" />
            <MainPointScore>30E</MainPointScore>
        </MainPointDiv>
    );
};

export default MainPoint;
