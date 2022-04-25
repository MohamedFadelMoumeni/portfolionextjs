import styled from "styled-components"

export const HeroContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items:center;
justify-content:space-between;
height: 90vh;
position: relative;
@media (max-width: 778px){
    padding-top: 4rem;
    flex-direction: column;
    height: auto;
}
`;

export const Content = styled.div`
width: 50%;
@media (max-width: 778px){
    width: 100%;
}
`;
export const Title =styled.h1`
font-weight: bold;
font-size: 4.3rem;
width: 80%;
line-height: 45px;
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
@media (max-width: 778px){
    width: 100%;
}
`;
export const Headline = styled.p`
font-size: 1.7rem;
width: 80%;
margin-top: 1.5rem;
@media (max-width: 778px){
    width: 100%;
}
`;

export const HeroImg = styled.div`
align-self:stretch;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
width: 50%;
img{
    transform: rotate(5deg);
}
@media (max-width: 778px){
    width: 100%;
}
`;

export const Button = styled.button`
padding: 1.5rem 3rem;
background: #3be8b0;
font-weight: medium;
border: 0;
margin-top: 1.5rem;
font-size: 1.5rem;
cursor: pointer;
font-family: 'Jost', sans-serif;
letter-spacing: 2px;
-webkit-box-shadow: 0px 0px 24px -2px rgba(59,232,176,0.36); 
box-shadow: 0px 0px 24px -2px rgba(59,232,176,0.36);
transition: all .9s;
&:hover{
    transform: scale(1.1) rotate(2deg);

}
`;

export const Icons = styled.div`
width: 30%;
margin-top: 3rem;
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
@media (max-width: 400px){
    width: 100%;
}

`;