import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledSubmitBtn = styled.button`
  position: fixed;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  min-width: 88px;
  max-width: 400px;
  height: 5%;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  background: ${({ isYellow }) => (isYellow ? "var(--main-yellow, #FDC727)" : "#DADADA")};
  color: black;
  border: none;
`;

const TextStyle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const getBrand = (brandId) => {
    const brandLogos = {
      1: "SINGSING",
      2: "GCOO",
      3: "DEER",
      4: "GCOO",
      5: "KICKGOING",
      6: "SWING",
    };
    return brandLogos[brandId];
  };

const SubmitBtn = ({ isYellow, buttonText, handleImageUpload, KickInfo }) => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    
    if (!file) {
        console.error("No image selected");
        return;
      }
  
      const formData = new FormData();
      formData.append("image", file);
  
      try {
        const response = await fetch(`${process.env.REACT_APP_HOME_URL}/api/report`, {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
        console.log("Server response:", data);
        const reportID = data.result.reportId;

        try {
            const addResponse = await axios.post(`${process.env.REACT_APP_HOME_URL}/api/report/${reportID}`,{
                "kickboardType" : getBrand(KickInfo.brandId),
                "serialNumber" : KickInfo.kickId,
            })
        } catch (error) {
            console.log('전송 실패!');
        }

        navigate(`/report/${reportID}`);
      } catch (error) {
        console.error("Error sending image:", error);
      }
  };

  return (
    <StyledSubmitBtn isYellow={isYellow} onClick={handleClick}>
      <TextStyle>{buttonText}</TextStyle>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </StyledSubmitBtn>
  );
};

export default SubmitBtn;
