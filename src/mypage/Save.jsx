import React from "react";
import styled from "styled-components";

const Save = () => {
    
const Title = styled.div`
    color: #191919;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
    margin-top: 10px;
    margin-left: 30px;
`;
const Date = styled.div`
    color: #8F8F8F;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 180% */
    margin-top: 10px;
    margin-left: 30px;
`;

const Container = styled.div`
    padding:10px
`

const Energy = styled.div`
color: #EAAF00;
text-align: right;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
width: 59.079px;
margin-left: auto;
margin-top: -30px;
`;

  return (
    <>
    <Container>
        <Title>[신고] 인하대학교 정문 2인 탑승 신고 보상</Title>
        <Date>2023-08-07</Date>
        <Energy>+30E</Energy>
        </Container>
        <Container>
        <Title>[신고] 인하대학교 후문 헬멧 미착용 신고 보상</Title>
        <Date>2023-09-17</Date>
        <Energy>+20E</Energy>
        </Container>
        <Container>
        <Title>[신고] 인하대학교역 3번 출구 2인 탑승 신고 보상</Title>
        <Date>2023-10-11</Date>
        <Energy>+20E</Energy>
        </Container>
        <Container>
        <Title>[신고] 인하대학교 6호관 불법주차 신고 보상</Title>
        <Date>2023-10-19</Date>
        <Energy>+30E</Energy>
        </Container>
        <Container>
        <Title>[신고] 인하대학교 정문 2인 탑승 신고 보상</Title>
        <Date>2023-11-17</Date>
        <Energy>+20E</Energy>
        </Container>
    </>
  );
};


export default Save;
