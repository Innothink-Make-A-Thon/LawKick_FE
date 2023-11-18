import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReportTopBar from "./report_component/ReportTopBar";
import ReportKickInfo from "./report_component/ReportKickInfo";
import ReportImage from "./report_component/ReportImage";
import ReportDetail from "./report_component/ReportDetail";
import Logoimg from "../main/main_img/Siren_Icon.png";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Adjust the transparency here */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: none;
  padding: 20px;
  border: none;
  box-shadow: none;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const LogoImage = styled.img`
  width: 44.277px;
  height: 72.003px;
  flex-shrink: 0;
  margin: 20px;
`;

const ReportPage = () => {
      const location = useLocation();
    const selectedImage = location.state?.selectedImage;

    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const submitAccept = () =>{
        setIsVisible(true);
        setTimeout(()=>{
            setIsVisible(false);
            navigate("/main");
        },3000);
    };

    return (
        <>
            <ReportTopBar></ReportTopBar>
            <ReportKickInfo></ReportKickInfo>
            <ReportImage selectedImage={selectedImage}></ReportImage>
            <ReportDetail propTrigger={submitAccept}></ReportDetail>
            {isVisible && (
        <ModalOverlay>
          <CenterContainer>
            <LogoImage src={Logoimg} alt="Logo" />
            <ModalContent>
              신고가 접수되었습니다!
            </ModalContent>
          </CenterContainer>
        </ModalOverlay>
      )}
        </>
    );
};

export default ReportPage;
