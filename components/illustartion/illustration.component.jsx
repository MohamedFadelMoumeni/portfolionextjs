import styled from "styled-components"
import Image from "next/image"
import { keyframes } from "styled-components";

const Illustration = () => {
    return (
        <Container>
       
        </Container>
    )
}

export default Illustration;


const scalling = keyframes`
0%{
    transform: scale(1);
}
40%{
    transform: scale(1.1);
}
60%{
    transform: scale(1.05);
}
80%{
    transform: scale(1.1);
}
100%{
    transform: scale(1);
}
`
const Container = styled.div`
position: absolute;
right: 7%;
top: 20%;
z-index: 0;
width: 30px;
height: 30px;
background: #3be8b0;
border-radius: 50%;
animation : ${scalling} 1s infinite;
`;

