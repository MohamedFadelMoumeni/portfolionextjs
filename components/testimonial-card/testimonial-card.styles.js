import styled from "styled-components";

export const Container = styled.div`
height: 300px;
background: white;
width: 90%;
margin: auto;
-webkit-box-shadow: 0px 0px 8px 0px rgba(59,232,176,0.28); 
box-shadow: 0px 0px 8px 0px rgba(59,232,176,0.28);
margin: 1rem 0;
border-radius: 10px;
padding: 1.5rem 1rem;
display: flex;
flex-direction: column;
align-items:center;

p{
    font-size: 2rem;
    text-align:center;
}
span{
    margin-top: 5rem;
    font-size: 1.6rem;
    font-weight: bold;
}
`;