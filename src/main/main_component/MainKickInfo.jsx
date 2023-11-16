import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import SsingLogo from "../main_img/Ssing_Logo.png";

const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    margin-bottom: 15%;
    align-items: center;
`;

const BrandLogo = styled.img`
    height: 2rem;
`;

const SelectionBar = styled.div`
    background-color: #80808080;
    width: 0.1px;
    height: 15vw;
    margin: 0 2rem 0 2rem;
`;

const SerialBox = styled.div`
    
`;

const SerialNumber = styled.p`
    font-family: Noto Sans KR;
`;

const SerialCode = styled.p`
    font-family: Noto Sans KR;
    font-weight: bold;
`;

const MainKickInfo = (props) => {

    console.log(props);

    return (
        <InfoContainer>
            <BrandLogo src={SsingLogo}></BrandLogo>
            <SelectionBar></SelectionBar>
            <SerialBox>
                <SerialNumber>일련번호</SerialNumber>
                <SerialCode>{props.KickInfo.kickId}</SerialCode>
            </SerialBox>
        </InfoContainer>
    );
};

export default MainKickInfo;