import {HeaderContainer, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component";
import Image from "next/image"

const Header = () => {
    return (
        <HeaderContainer>
           <Logo>Mohamed Fadel Moumeni.</Logo>
            <Navigation />

        </HeaderContainer>
    )
}
export default Header;