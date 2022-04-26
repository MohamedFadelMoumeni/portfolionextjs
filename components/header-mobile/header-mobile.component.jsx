import {Container, MenuMobile} from "./header-mobile.styles";
import {BiMenuAltRight} from "react-icons/bi"
import {IoMdClose} from "react-icons/io";
import { useState } from "react";

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    return (
       <>
        <Container>
            {
                open ? <IoMdClose cursor="pointer" onClick={() => setOpen(false)} fontSize="30px" /> : <BiMenuAltRight onClick={() => setOpen(true)} fontSize="30px" className="menu-logo"/> 
            }
        </Container>
        <MenuMobile open={open}/>
       </>

    )
}

export default HeaderMobile