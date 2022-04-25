import styled from "styled-components"

export const TestimonialsContainer = styled.div`
width: 100%;
padding-top: 7rem;



`;
export const Title = styled.h1`
font-size: 4rem;
font-weight: bold;
letter-spacing: 2px;
position: relative;
&::before{
    content: "";
    padding-right: 20px;
   
    outline: solid #3be8b0;
    position: absolute;
    top: -20px;
    left: 0;
    height: 1rem;
    margin-bottom: 1rem;
    background: #3be8b0;

}
`;
export const Directory = styled.div`
width: 100%;
margin: 4rem 0;
`;