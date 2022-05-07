import styled from "styled-components"

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
padding: 4rem 0;
color: ${props => props.theme.colors.primary};
`;

export const Title = styled.h1`
font-size: 4rem;
margin-bottom: 2rem;
font-weight: bold;
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
export const Description = styled.p`
width: 60%;
text-align:center;
font-size: 1.5rem;
margin: 1rem auto;
@media (max-width: 778px){
    width: 100%;
}
`;