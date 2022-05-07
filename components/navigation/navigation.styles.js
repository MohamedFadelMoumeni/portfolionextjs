import styled from "styled-components"

export const NavContainer = styled.div`
display: flex;
flex-direction: row;
align-items:center;
@media (max-width: 778px){
    display: none;
}
.toggler{
    padding: .5rem 2rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    border-radius: 10px;
    margin-left: 2rem;
    cursor: pointer;
    font-family: 'Jost', sans-serif;
    &::after {
       ${props => props.theme.colors.primary == "#000"  ?
    `
    content :  " black"
    `
    :
    `
    content :  " white"
    `
    

};
    }
}
`;