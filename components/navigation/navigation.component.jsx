import {NavContainer} from "./navigation.styles"
import NavItem from "../nav-item/nav-item.component";
import {Link} from "react-scroll"

const Navigation = () => {
    return (
        <NavContainer>
            <NavItem numLink="1" to="home">Home</NavItem>
            <NavItem numLink="1" to="work">Work</NavItem>
            <NavItem numLink="1" to="testimonials">Testimonials</NavItem>

            <NavItem numLink="1" to="about">About</NavItem>
           
            
            <NavItem numLink="1" to="contact">Contact</NavItem>
            
        </NavContainer>


    )
}

export default Navigation;