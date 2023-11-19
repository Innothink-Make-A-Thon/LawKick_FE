import React from "react";
import styled from "styled-components";

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
    justify-content: center;
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
    margin: 5px;

`
const Contents = () => {
  return (
    <>
    <Title>신고 내용 요약</Title>
    <RealContents>어쩌구저쩌구저어넝어ㅜㅇ아아이이ㅣㅣㅣ아아우ㅏㅇ</RealContents>
    </>
  );
};

export default Contents;
