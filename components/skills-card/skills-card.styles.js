import styled from "styled-components"

export const Container = styled.div`
padding: 1rem;
height: 100px;
background: #fff;
position: relative;
cursor: pointer;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
&::before{
    transition: all 1s;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 4px;
    background: rgba(59, 232, 176, .7);
    content: "";
}
&:hover{
    &::before{
        height: 100%;
    }
}
`;