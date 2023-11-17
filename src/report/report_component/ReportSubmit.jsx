import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import SubmitBtn from "../../components/Submitbtn";

const BottomKickBox = styled.div`
    background-color: white;
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13vh;
    width: 100%;
    z-index: 100;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`; 

//맞다 위에 siren icon 추가!

const ReportSubmit = () => {

    return (
        <>
            <BottomKickBox>
                <SubmitBtn isYellow={false} buttonText="신고 접수하기" ></SubmitBtn>
            </BottomKickBox>
        </>
    );
};

export default ReportSubmit;