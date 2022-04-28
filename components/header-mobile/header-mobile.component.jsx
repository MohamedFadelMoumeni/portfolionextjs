import {Container, MenuMobile, NavItem} from "./header-mobile.styles";
import {BiMenuAltRight} from "react-icons/bi"
import {IoMdClose} from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    return (
       <>
        <Container>
            {
                open ? <IoMdClose cursor="pointer" onClick={() => setOpen(false)} fontSize="30px" /> : <BiMenuAltRight onClick={() => setOpen(true)} fontSize="30px" className="menu-logo"/> 
            }
        </Container>
        <MenuMobile open={open}>
        <Link
        onClick={() => setOpen(false)}
        activeClass="active"
        to={"home"}
        offset={-110}
        spy={true}
        smooth={true} >
            <NavItem>Home</NavItem>
            </Link>

            <Link
             onClick={() => setOpen(false)}
        activeClass="active"
        to={"work"}
        offset={-110}
        spy={true}
        smooth={true} >
            <NavItem>Work</NavItem>
            </Link>
            <Link
             onClick={() => setOpen(false)}
        activeClass="active"
        to={"testimonials"}
        offset={-110}
        spy={true}
        smooth={true} >
            <NavItem>Testimonials</NavItem>
            </Link>
            <Link
             onClick={() => setOpen(false)}
        activeClass="active"
        to={"about"}
        offset={-110}
        spy={true}
        smooth={true} >
            <NavItem>About</NavItem>
            </Link>
            <Link
             onClick={() => setOpen(false)}
        activeClass="active"
        to={"contact"}
        offset={-110}
        spy={true}
        smooth={true} >
            <NavItem>Contact</NavItem>
            </Link>
        </MenuMobile>
       </>

    )
}

export default HeaderMobile