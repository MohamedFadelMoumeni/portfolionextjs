import {NavItemContainer} from "./nav-item.styles"
import {Link} from "react-scroll"


const NavItem = ({children, numLink, to}) => {
    return (

        <NavItemContainer numLink={numLink}>
                    <Link
        activeClass="active"
        to={to}
        offset={-110}
        spy={true}
        smooth={true} >
            {children}
            </Link>
        </NavItemContainer>
       

    )
}

export default NavItem;