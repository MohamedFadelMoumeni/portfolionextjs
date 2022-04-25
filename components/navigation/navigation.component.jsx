import {NavContainer} from "./navigation.styles"
import NavItem from "../nav-item/nav-item.component";
import {Link} from "react-scroll"

const Navigation = () => {
    return (
        <NavContainer>
            <Link to="home">
            <NavItem numLink="1">Home</NavItem>
            </Link>
            <Link to="work" smooth={true}>
            <NavItem numLink="1">Work</NavItem>
            </Link>
            <Link to="testimonials" smooth={true}>
            <NavItem numLink="1">Testimonials</NavItem>
            </Link>
            <Link to="about" smooth={true}>
            <NavItem numLink="1">About</NavItem>
            </Link>
            <Link to="contact" smooth={true}>
            <NavItem numLink="1">Contact</NavItem>
            </Link>
        </NavContainer>


    )
}

export default Navigation;