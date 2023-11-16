import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import SirenIcon from "../main_img/Siren_Icon.png";
import SubmitBtn from "../../components/Submitbtn";
import MainKickInfo from "./MainKickInfo";

const BottomKickBox = styled.div`
    background-color: white;
    border-radius: 20px 20px 0rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: ${props => (props.isVisible ? "0" : "-28vh")};
    left: 0;
    right: 0;
    height: 28vh;
    width: 100vw;
    z-index: 100;
    transition: bottom 0.1s ease-in-out;
`;

//맞다 위에 siren icon 추가!

const MainKickBox = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        setIsVisible(props.isVisible);
    },[]);

    return (
        <>
            <BottomKickBox isVisible={isVisible}>
                <MainKickInfo KickInfo={props.KickInfo}></MainKickInfo>
                <SubmitBtn isYellow={true} buttonText="촬영하기" ></SubmitBtn>
            </BottomKickBox>
        </>
    );
};

export default MainKickBox;