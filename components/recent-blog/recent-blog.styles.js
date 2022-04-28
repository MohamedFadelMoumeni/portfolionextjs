import styled from "styled-components";
export const RecentBlogContainer = styled.div`
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

export const GridBlog  = styled.div`
width: 100%;
margin-top: 2rem;
display: grid;
column-gap: 2rem;
row-gap: 1.5rem;
margin-bottom: 2rem;
@media (max-width: 640px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 640px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media  (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
}
`;