import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ManagerTopBar from "./ManagerTopBar";
import Data from "./Data";

const Manager = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOME_URL}/api/admins`)
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          setReports(data.result);
        } else {
          console.error("Failed to fetch data");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Container = styled.div`
    margin-left:3%;
  `
let num = 1;
  return (
    <>
      <ManagerTopBar />
      <Container>
      {reports.map((report) => (
    <Data key={report.reportId} report={report} num={num++}/>
      ))}
      </Container>
    </>
  );
};

export default Manager;
