import {Container, ImageContainer, Content, Brand, Description} from "./work-card.styles"
import Image from "next/image"

const WorkCard = ({reverse, img, title, techStack, description}) => {
    return (
        <Container reverse={reverse}>
            <ImageContainer>
                <Image src={img} width="600" height="400" alt="Mohamed Project"/>
            </ImageContainer>
            <Content >
                <Brand>{title}</Brand>
                <Description>{description}</Description>
                {techStack.map(tech => (
                    <div style={{
                        fontSize: '1.6rem',
                        marginBottom: ".5rem"
                    }} key={tech}><strong>- {tech}</strong></div>
                ))}
            </Content>

        </Container>
    )
}

export default WorkCard;