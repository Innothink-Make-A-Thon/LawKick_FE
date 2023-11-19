import React from "react";
import styled from "styled-components";
import EmptyImage from "../report/report_image/Empty_Image.png";
import SsingLogo from "./LogoImg/Ssing_Logo.png"
import BeamLogo from "./LogoImg/Beam_Logo.png";
import DeerLogo from "./LogoImg/Deer_Logo.png";
import SwingLogo from "./LogoImg/Swing_Logo.png";
import GcooLogo from "./LogoImg/Gcoo_Logo.png";
import KickLogo from "./LogoImg/Kick_Logo.png";

    const Num = styled.div`
        display: flex;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: flex-start;
        flex-shrink: 0;
        border-radius: 6px;
        background: var(--main-red, #FF5934);
        color: #FFF;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `
    const Name = styled.div`
        color: #1D1D1E;
        margin-left: 15px;
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px; /* 112.5% */
    `

    const NNContainer = styled.div`
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-left: auto;
        margin-right: 20px;
    `;
    
    const SvgContainer = styled.div`
        margin-top: 20px;
    `;

const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: space-evenly;
    margin-bottom: 10vh;
    align-items: center;
    margin-top: -6.25rem;
    position: absoultue;
`;

const Logo = styled.img`
    height: 2rem;
    margin-right: -100px;
`;

const SelectionBar = styled.div`
background-color: #80808080;
width: 0.1px;
height: 70%;
margin: 0 2rem 0 2rem;
`;

const SerialBox = styled.div`
margin-right:100px;

`;

const SerialNumber = styled.p`
font-family: Noto Sans KR;
`;

const SerialCode = styled.p`
font-family: Noto Sans KR;
font-weight: bold;
`;

const DataContainer = styled.div`
    //position: absolute;
    z-index: 100;
`
const Title = styled.div`
    color: #1D1D1E;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 112.5% */
`
const RealContents = styled.div`
    display: flex;
    width: 345px;
    height: 194px;
    padding: 0px 16px;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    color: #000;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:10px;

`

const DefaultImage = styled.img`
    width: 80%;
    margin-bottom: 30px;
    margin-top:-40px;
`;

const getBrandLogo = (brandName) => {
    const brandLogos = {
      "SINGSING": SsingLogo,
      "BEAM": BeamLogo,
      "DEER":DeerLogo,
      "GCOO":GcooLogo,
      "KICKGOING":KickLogo,
      "SWING":SwingLogo,
    };
    return brandLogos[brandName];
  };


const Data = ({ report, num }) => {

  return (
    <>
    <NNContainer>
    <Num>{num}</Num>
    <Name>kimInha의 신고 데이터</Name>
    </NNContainer>

    <DataContainer>
    <SvgContainer>
    <svg xmlns="http://www.w3.org/2000/svg" width="345" height="102" viewBox="0 0 345 102" fill="none">
        <path d="M0 19C0 14.5817 3.58172 11 8 11H337C341.418 11 345 14.5817 345 19V94C345 98.4183 341.418 102 337 102H8C3.58172 102 0 98.4183 0 94V19Z" fill="#FFD8CF"/>
        <path d="M282.127 2.54866L273.145 12.1963C271.766 13.6769 271 15.6247 271 17.6476V31C271 35.4183 274.582 39 279 39H337C341.418 39 345 35.4183 345 31V8C345 3.58172 341.418 0 337 0H287.982C285.761 0 283.64 0.92321 282.127 2.54866Z" fill="#FFD8CF"/>
    </svg>
    </SvgContainer>

    <InfoContainer>
    <Logo src={getBrandLogo(report.kickboardType)}></Logo>
            <SelectionBar></SelectionBar>
            <SerialBox>
                <SerialNumber>일련번호</SerialNumber>
                <SerialCode>{report.serialNumber}</SerialCode>
            </SerialBox>
    </InfoContainer>
        <DefaultImage src={report.imageUrl || EmptyImage} />
        <Title>신고 내용 요약</Title>
        <RealContents>{report.content}</RealContents>
      </DataContainer>
    </>
  );
};

export default Data;
