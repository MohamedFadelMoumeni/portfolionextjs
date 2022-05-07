import {NavContainer} from "./navigation.styles"
import NavItem from "../nav-item/nav-item.component";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeswitch";

const Navigation = () => {
    const {setTheme, themeMode} = useContext(ThemeContext)
    return (
        <NavContainer>
            <NavItem numLink="1" to="home">Home</NavItem>
            <NavItem numLink="1" to="work">Work</NavItem>
            <NavItem numLink="1" to="testimonials">Testimonials</NavItem>

            <NavItem numLink="1" to="about">About</NavItem>
           
            
            <NavItem numLink="1" to="contact">Contact</NavItem>

            <button className="toggler" onClick={() => {
                if(themeMode === "light"){
                    setTheme("dark")
                }else{
                    setTheme("light")
                }
            }}>Switch</button>
 
        </NavContainer>


    )
}

export default Navigation;