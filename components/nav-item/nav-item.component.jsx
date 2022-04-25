import {NavItemContainer} from "./nav-item.styles"


const NavItem = ({children, numLink}) => {
    return (
        <NavItemContainer numLink={numLink}>
            {children}
        </NavItemContainer>

    )
}

export default NavItem;