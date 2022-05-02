import { Container } from "./testimonial-card.styles";

const CardTestimonial = ({text, author}) => (
    <Container>
        <p>
            {text}
        </p>
        <span>{author}</span>
    </Container>
)

export default CardTestimonial