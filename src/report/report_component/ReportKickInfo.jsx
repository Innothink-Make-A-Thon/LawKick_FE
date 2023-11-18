import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SsingLogo from "../../main/main_img/Ssing_Logo.png";
import BeamLogo from "../../main/main_img/Beam_Logo.png";
import DeerLogo from "../../main/main_img/Deer_Logo.png";
import SwingLogo from "../../main/main_img/Swing_Logo.png";
import GcooLogo from "../../main/main_img/Gcooter_Logo.png";
import KickLogo from "../../main/main_img/Kick_Logo.png";
import Logo_main from "../../logo/y.png"
import axios from "axios";
import { useParams } from "react-router-dom";

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

const getBrandLogo = (brandName) => {
    const brandLogos = {
      "SINGSING": SsingLogo,
      "GCOO": BeamLogo,
      "DEER": DeerLogo,
      "GCOO": GcooLogo,
      "KICKGOING": KickLogo,
      "SWING": SwingLogo,
    };
    return brandLogos[brandName];
  };

const ReportKickInfo = () => {
    const { reportID } = useParams();

    const [serial, setSerial] = useState();
    const [brand, setBrand] = useState();

    useEffect(()=>{
        const getReportInfo = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_HOME_URL}/api/report/${reportID}`
                );
                console.log(response);
                console.log(response.data.result);
                setSerial(response.data.result.serialNumber);
                setBrand(getBrandLogo(response.data.result.kickboardType));
            } catch (error) {
                console.log("error fetching data:", error);
            }
        };
        getReportInfo();
    },[]);
 
    return (
        <>
        <InfoContainer>
            <Logo src={brand ? brand : Logo_main}></Logo>
            <SelectionBar></SelectionBar>
            <SerialBox>
                <SerialNumber>일련번호</SerialNumber>
                <SerialCode>{serial ? serial : '인식 불가'}</SerialCode>
            </SerialBox>
        </InfoContainer>
        </>
    );
};

export default ReportKickInfo;