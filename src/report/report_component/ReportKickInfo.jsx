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
    margin-bottom: 3%;
    margin-top: 3%;
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
    width: 20%;
`;

const SerialNumber = styled.p`
    font-family: Noto Sans KR;
    width: auto;
    margin-top: 10%;
    margin-bottom: 5%;
`;

const SerialCode = styled.p`
    font-family: Noto Sans KR;
    font-weight: bold;
`;

const InsertSerialCode = styled.input`
    border: white;
    margin-bottom: 5%;
    font-weight: bold;
    width: 100%;
`;

const getBrandLogo = (brandName) => {
    const brandLogos = {
      "SINGSING" : SsingLogo,
      "BEAM" : BeamLogo,
      "DEER" : DeerLogo,
      "GCOO" : GcooLogo,
      "KICKGOING" : KickLogo,
      "SWING" : SwingLogo,
    };
    return brandLogos[brandName];
  };

const ReportKickInfo = ({onChange}) => {
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
    },[reportID]);

    const handleSerialChange = (e) => {
        const newValue = e.target.value;
        setSerial(newValue);
        console.log(e.target.value);
        onChange(newValue);
    };

    // const handleBrandChange = (selectedOption) => {
    //     // Handle the selected brand here
    //     console.log(selectedOption);
    //     setBrand(getBrandLogo(selectedOption));
    //   };

    const handleBrandChange = (selectedOption) => {
        setSelectedBrand(selectedOption);
        onChange(selectedOption.value);
      };
 
    return (
        <>
        <InfoContainer>
            <Logo src={brand ? brand : Logo_main}></Logo>
            <SelectionBar></SelectionBar>
            <SerialBox>
                <SerialNumber>일련번호</SerialNumber>
                <InsertSerialCode 
                type="text" 
                defaultValue={serial ? serial : '인식 불가'} 
                value={serial} 
                onChange={handleSerialChange}
                ></InsertSerialCode>
            </SerialBox>
        </InfoContainer>
        </>
    );
};

export default ReportKickInfo;