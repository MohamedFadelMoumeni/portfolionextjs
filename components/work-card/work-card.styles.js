import styled from "styled-components"

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
align-items:center;
justify-content:space-between;
height: 400px;
padding: 1rem;
@media (max-width: 778px){
   flex-direction: column;
   height: auto;
}
`;

export const ImageContainer = styled.div`
width: 50%;
align-self:stretch;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
@media (max-width: 778px){
    width: 100%;
}
`;

export const Content = styled.div`
flex:1;
align-self:stretch;
display: flex;
flex-direction: column;
justify-content:center;
padding-left: 3rem;
@media (max-width: 778px){
    width: 100%;
}
`;

export const Brand = styled.h1`
font-size: 3.4rem;
@media (max-width: 778px){
    width: 100%;
}
`;

export const Description = styled.p`
margin-top: 2rem;
font-size: 2rem;
@media (max-width: 778px){
    width: 100%;
}
`;