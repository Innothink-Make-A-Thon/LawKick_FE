import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeadBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0px 0px #00000024;
`;

const TextStyle = styled.p`
    font-weight: bold;
`;

const ReportTopBar = () => {
 
    return (
        <HeadBox>
            <TextStyle>신고 접수</TextStyle>
        </HeadBox>
    );
};

export default ReportTopBar;