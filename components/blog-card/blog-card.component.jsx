import {Container, Details, Title, Description, Readmore} from "./blog-card.styles"
import Image from "next/image"
const BlogCard = () => {
    return (
        <Container >
            <Image src="/assets/hero.png" objectFit="cover" width="300px" height="200px" layout="responsive"/>
            <Details>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <Description>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolores est, eveniet dicta nemo perspiciatis eaque sed! Reiciendis, ipsum a!
                </Description>
                <Readmore>Read more</Readmore>
            </Details>
        </Container>
    )
}

export default BlogCard