import {Container, Title, Description} from "./contact.styles";
import Button from "../button/button.component";

const Contact = () => {
    return (
        <Container >
            <Title>Get in Touch!</Title>
            <Description>
            If you are looking for a freelancer then you are in the right place, as I’m currently freelancing full time, or if you are looking for a full-time employee, otherwise, if you just want to say hi, I will definitely say Hi back to you.

            </Description>
            <Button>Contact Me Via Email</Button>
        </Container>
    )
}

export default Contact;