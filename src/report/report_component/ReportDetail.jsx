import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReportSubmit from "./ReportSubmit";
import axios from "axios";

const DetailContainer = styled.div`
    width: auto;
    padding: 0vw 6vw 6vw 6vw;

`;

const DetailSelectContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;


const Title = styled.p`
    font-size: larger;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 8%;
`;

const LittleTitle = styled.p`
    color: gray;
    margin-top: 0;
    margin-bottom: 5%;
`;

const IllegalBtn = styled.button`
    background: ${({ isSelected }) => (isSelected ? '#FFF4D4' : '#ffffff')};
    border: ${({isSelected}) => (isSelected ? '1px #FDC727 solid' : '1px #D9D9D9 solid')};
    padding: 2% 12%;
    border-radius: 8px;
`;

const DetailInput = styled.textarea`
    width: 95%;
    height: 15vh;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 8px;
    padding: 0.5rem;
    resize: none;
    margin-bottom: 13vh;
    ::placeholder{
        color: gray;
    }
`;

const ReportDetail = (props) => {

    const [noHelmet, setNoHelmet] = useState(false);
    const [twoPeople, setTwoPeople] = useState(false);
    const [detailText, setDetailText] = useState();
    const [isYellow, setIsYellow] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    let reportNumber = 1;//임시

    const ClickHelmetBtn = () => {
        // console.log(noHelmet);
        let temp = !noHelmet;
        setNoHelmet(temp);
        console.log(temp);
    };

    const ClickTwoBtn = () => {
        let temp = !twoPeople;
        setTwoPeople(temp);
        console.log(temp);
    };

    const insertDetail = (e) => {
        console.log(e.target.value);
        setDetailText(e.target.value);
    };

    let swagger = `http://13.209.203.240:8080/`;
    let local = `http://172.20.10.2:8080/`;

    const submitAxios = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_HOME_URL}/api/report/${reportNumber}/submit`,
                {
                    "serialNumber": "string",
                    "kickboardType": "SINGSING",
                    "latitude": 0,
                    "longitude": 0,
                    "content": detailText,
                    "helmet": noHelmet,
                    "multiPerson": twoPeople
                  }
            );
            console.log(response);
            props.propTrigger();

        } catch (error) {
            console.log("전송 실패", error);
        }
    };

    const submitReport = () => {
        if(noHelmet||twoPeople||detailText){
            submitAxios();
        }
        else{
            //스낵바
            console.log('denied!');
            alert('신고 내용을 입력해 주세요!');
        }
    };

    useEffect(()=>{
        if(noHelmet||twoPeople||detailText){
            setIsYellow(true);
        }
        else{
            setIsYellow(false);
        }
    },[noHelmet, twoPeople, detailText]);
 
    return (
        <>
        <DetailContainer>
            <Title>신고 상황 선택</Title>
            <LittleTitle>다중 선택 가능</LittleTitle>
            <DetailSelectContainer>
                <IllegalBtn isSelected={noHelmet} onClick={ClickHelmetBtn}>헬맷 미착용</IllegalBtn>
                <IllegalBtn isSelected={twoPeople} onClick={ClickTwoBtn}>2인 이상 탑승</IllegalBtn>
            </DetailSelectContainer>
            <Title>상세 설명</Title>
            <LittleTitle>이 칸만 적어도 신고가 가능해요!</LittleTitle>
            <DetailInput 
            placeholder="(예: 12시 쯤 교복을 입은 학생 2명이 타는 걸 발견)"
            onChange={insertDetail}
            value={detailText}
            ></DetailInput>
        </DetailContainer>
        <ReportSubmit propFunction={submitReport} isYellow={isYellow}></ReportSubmit>
        </>
    );
};

export default ReportDetail;