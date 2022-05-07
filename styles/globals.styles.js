import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

body {
background: ${props => props.theme.colors.bodyBg};
background-image : ${props => props.theme.colors.bodyBgImg}
}


`;