import {TestimonialsContainer, Title, Directory} from "./testimonials.styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardTestimonial from "../testimonial-card/testimonial-card.component";


const Testimonials = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <div className="custom-right-arrow" onClick={() => onClick()} >Well</div>;
      };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <TestimonialsContainer>
            <Title>Testimonials.</Title>
            <Directory>
                <Carousel   responsive={responsive}>
                   <CardTestimonial />
                   <CardTestimonial />
                   <CardTestimonial />
                   <CardTestimonial />
                   <CardTestimonial />
                   <CardTestimonial />
                   <CardTestimonial />
                   <CardTestimonial />
                </Carousel>
            </Directory>
        </TestimonialsContainer>
    )
}

export default Testimonials;