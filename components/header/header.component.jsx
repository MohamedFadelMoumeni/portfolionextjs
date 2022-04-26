import {HeaderContainer, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component";
import HeaderMobile from "../header-mobile/header-mobile.component";

const Header = () => {
    return (
        <HeaderContainer>
           <Logo>Mohamed Fadel Moumeni.</Logo>
            <Navigation />
            <HeaderMobile />

        </HeaderContainer>
    )
}
export default Header;