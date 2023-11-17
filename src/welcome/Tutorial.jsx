import styled from "styled-components";
import Img from "./TutorialImg.svg";
import Footer from "../components/Footer";

const Image = styled.img`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
`;


function Tutorial() {
    return (
        <div>
            <Image src={Img} alt="Tutorial" />
            <Footer/>
        </div>
    );
}

export default Tutorial;
