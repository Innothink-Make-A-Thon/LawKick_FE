import React, { useState, useEffect } from "react";
import styled from "styled-components";
import All from "./All";
import Use from "./Use";
import Save from "./Save";



const History = () => {
    const [active, setActive] = useState("All");

const MiddleBar = styled.div`
  display: flex;
  width: 100vw;
  height: 8vh;
  justify-content: space-evenly;
  top: 3rem;
  transition: background-color 0.3s ease;
`;

const AllBtn = styled.button`
  width: 25vw;
  height: 8vh;
  cursor: pointer;
  background: transparent;
  color: #191919;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid #191919" : "none"};
  font-size: 1rem;
  font-weight: bold;
`;

const SaveBtn = styled.button`
  width: 25vw;
  height: 8vh;
  cursor: pointer;
  background: transparent;
  color: #191919;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid #191919" : "none"};
  font-size: 1rem;
  font-weight: bold;
`;

const UseBtn = styled.button`
  width: 25vw;
  height: 8vh;
  cursor: pointer;
  background: transparent;
  color: #191919;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid #191919" : "none"};
  font-size: 1rem;
  font-weight: bold;
`;

  return (
    <>
        <MiddleBar>
        <AllBtn
          isActive={active === "All"}
          onClick={() => setActive("All")}
        >
          전체
        </AllBtn>
        <SaveBtn isActive={active === "Save"} onClick={() => setActive("Save")}>
          적립
        </SaveBtn>
        <UseBtn isActive={active === "Use"} onClick={() => setActive("Use")}>
          사용
        </UseBtn>
      </MiddleBar>
      {active === "All" && <All />}
      {active === "Save" && <Save />}
      {active === "Use" && <Use />}
    </>
  );
};


export default History;
