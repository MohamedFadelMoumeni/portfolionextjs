import styled from "styled-components"

const Button = ({children, center}) => {
    return (
        <Container>
            {children}
        </Container>

    )

}

export default Button;

 const Container = styled.button`
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