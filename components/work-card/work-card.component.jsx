import {Container, ImageContainer, Content, Brand, Description} from "./work-card.styles"
import Image from "next/image"
import { Fade } from "react-reveal"

const WorkCard = ({reverse, img, title, techStack}) => {
    return (
        <Container reverse={reverse}>
            <ImageContainer>
                <Fade right={reverse} left={!reverse}>
                <Image src={img} width="600" height="400"/>
                </Fade>
            </ImageContainer>
            <Content >
                <Brand>{title}</Brand>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi quia tempora nulla sit neque fuga eos alias recusandae?</Description>
            </Content>

        </Container>
    )
}

export default WorkCard;