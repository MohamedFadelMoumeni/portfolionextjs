import {HeaderContainer, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component";
import Image from "next/image"

const Header = () => {
    return (
        <HeaderContainer>
           <Image src="/assets/logo.svg" width="300px" height="100px"/>
            <Navigation />

        </HeaderContainer>
    )
}
export default Header;