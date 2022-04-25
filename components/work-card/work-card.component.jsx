import {Container, ImageContainer, Content, Brand, Description} from "./work-card.styles"
import Image from "next/image"

const WorkCard = ({reverse, img}) => {
    return (
        <Container reverse={reverse}>
            <ImageContainer>
                <Image src={img} width="600" height="400"/>
            </ImageContainer>
            <Content >
                <Brand>SwipeInv website agency.</Brand>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi quia tempora nulla sit neque fuga eos alias recusandae?</Description>
            </Content>

        </Container>
    )
}

export default WorkCard;