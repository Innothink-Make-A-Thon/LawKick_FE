import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EmptyImage from "../report_image/Empty_Image.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const DefaultImage = styled.img`
    width: 90%;
    margin-left: 5%;
    margin-bottom: 10px;
`;

const ReportImage = () => {

    const {reportID} = useParams();
    const [imageUrl, setImageUrl] = useState();

    useEffect(()=>{
        const getReportInfo = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_HOME_URL}/api/report/${reportID}`
                );
                console.log(response);
                console.log(response.data.result);
                setImageUrl(response.data.result.imageUrl);
            } catch (error) {
                console.log("error fetching data:", error);
            }
        };
        getReportInfo();
    },[]);
 
    return (
        <>
        <DefaultImage src={imageUrl}></DefaultImage>
        </>
    );
};

export default ReportImage;