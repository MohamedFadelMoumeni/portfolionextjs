import styled from "styled-components"

export const AboutContainer = styled.div`
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
export const Content = styled.div`
width: 100%;
margin: 4rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 778px){
    flex-direction: column;
}
`;

export const LeftSide = styled.div`
width: 50%;
font-size: 2rem;
line-height: 35px;
padding-top: 2rem;
@media (max-width: 778px){
    width: 100%;
}
`;

export const RightSide = styled.div`
align-self: stretch;
width: 50%;
display: flex;
flex-direction: row;
align-items:center;
justify-content: flex-end;
@media (max-width: 778px){
    width: 100%;
    justify-content:center;
}

`;

export const ImageContainer = styled.div`
box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .5);
`;