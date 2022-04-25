import {NavContainer} from "./navigation.styles"
import NavItem from "../nav-item/nav-item.component";

const Navigation = () => {
    return (
        <NavContainer>
            <NavItem numLink="1">Home</NavItem>
            <NavItem numLink="1">About</NavItem>
            <NavItem numLink="1">Work</NavItem>
            <NavItem numLink="1">Testimonials</NavItem>
            <NavItem numLink="1">Contact</NavItem>
        </NavContainer>


    )
}

export default Navigation;