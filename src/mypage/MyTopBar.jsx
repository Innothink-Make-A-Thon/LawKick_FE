import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faMagnifyingGlass, faGear);

const TopBarBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7vh;
  width: 100vw;
  z-index: 2;
  border-bottom: 1px solid #D9D9D9;
`;


const TopBarBackBtn = styled.div`
  font-size: 1.5rem;
  position: absolute;
  left: 1.5rem;
`;

const TopBarTitleBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #1D1D1E;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 100% */
  cursor: pointer;
`;

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPage = location.pathname === "/main";

  function moveToBack() {
    navigate(-1);
  }

  function moveToMain() {
    navigate(`/welcome`);
  }

  return (
    <>
      <TopBarBox>
        <TopBarBackBtn onClick={moveToBack}>
          {!isMainPage && (
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#1D1D1E" }} />
          )}
        </TopBarBackBtn>

        <TopBarTitleBox onClick={moveToMain}>
          마이페이지
        </TopBarTitleBox>
      </TopBarBox>
    </>
  );
};

export default TopBar;
