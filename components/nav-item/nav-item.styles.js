import styled from "styled-components"

export const NavItemContainer = styled.span`
margin-left: 3rem;
color:${props => props.theme.colors.primary};
cursor: pointer;
position: relative;
font-size: 1.5rem;
font-weight: 550;
transition: all .4s;
&:hover{
    transform: translateY(-.3rem);
}

`;