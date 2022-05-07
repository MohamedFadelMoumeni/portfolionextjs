import styled, {keyframes} from "styled-components";


const moveInRIght = keyframes`
0%{
    transform: translateX(-100px);
    overflow: hidden;
    opacity: 0;
}
80%{
    transform: translateX(0px) ;
    opacity: 1;
    transform: rotate(-180deg);
   
}
100%{
    transform: rotate(-360deg);
   
}
`;

export const Container = styled.div`
display: block;
position: relative;
.menu-logo{
animation : ${moveInRIght} 1s ;
cursor: pointer;


}
@media (min-width: 700px){
    display: none;
}
.icon-togger{
    color: ${props => props.theme.colors.primary};
}


`;

const moveInTop = keyframes`
0%{
    transform: translateY(100px);
    opacity: 0;
}
100%{
    transform: translateY(0);
    opacity: 1;  
}
`;

export const MenuMobile = styled.div`
position: absolute;
right: 0;
left: 0;
top: 11%;
padding-bottom: 1rem;
background: #fff;
z-index: 2;
animation : ${moveInTop} .7s ease-in;
${props => !props.open ? "display: none" : "display: flex" };
flex-direction: column;
align-items:center;
font-weight:bold;


.toggler-mobile{
    width: 80%;
    border: 0;
    padding: 1rem 0;
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

const show = keyframes`
0%{
    opacity: 0;
    transform: translate(-50px);
}
100%{
    opacity: 1;
    transform: translate(0);
}
`;

export const NavItem = styled.div`
width: 100%;
padding: 1.6rem 0;
font-size: 1.4rem;
text-align:center;
cursor: pointer;
animation : ${show} 1s ease-in;
`;