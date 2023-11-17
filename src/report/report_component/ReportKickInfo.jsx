import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SsingLogo from "../../main/main_img/Ssing_Logo.png";
import BeamLogo from "../../main/main_img/Beam_Logo.png";
import DeerLogo from "../../main/main_img/Deer_Logo.png";
import SwingLogo from "../../main/main_img/Swing_Logo.png";
import GcooLogo from "../../main/main_img/Gcooter_Logo.png";
import KickLogo from "../../main/main_img/Kick_Logo.png";

const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
`;


const Logo = styled.img`
    height: 2rem;
`;

const SelectionBar = styled.div`
    background-color: #80808080;
    width: 0.1px;
    height: 70%;
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

const getBrandLogo = (brandId) => {
    const brandLogos = {
      1: SsingLogo,
      2: BeamLogo,
      3: DeerLogo,
      4: GcooLogo,
      5: KickLogo,
      6: SwingLogo,
    };
    return brandLogos[brandId];
  };

const ReportKickInfo = () => {
 
    return (
        <InfoContainer>
            <Logo src={SsingLogo}></Logo>
            <SelectionBar></SelectionBar>
            <SerialBox>
                <SerialNumber>일련번호</SerialNumber>
                <SerialCode>ZZZZZZ</SerialCode>
            </SerialBox>
        </InfoContainer>
    );
};

export default ReportKickInfo;