import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background: #fff;
box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
border-radius: 1rem;
cursor: pointer;
`;

export const Details = styled.div`
width: 100%;
padding: 1.4rem;

`;

export const Title = styled.h1`
font-size: 1.7rem;
font-weight: bold;
margin-bottom: 1rem;
`;
export const Description = styled.p`
font-size: 1.5rem;
`;
export const Readmore = styled.button`
margin: 1rem 0;
position: relative;
color: #3be8b0;
font-weight: bold;
border: 0;
background: transparent;
cursor: pointer;
&::after{
    content:"";
    height: 2px;
    width: 90%;
    position: absolute;
    bottom:-5px;
    left: 5px;
    right: 5px;
    background: #3be8b0;
    transition: all .4s;
}
&:hover{
    &::after{
        height: 100%;
        bottom:0;
        opacity: 0;
}
`;