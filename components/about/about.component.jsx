import Image from "next/image";
import {AboutContainer, Title, Content, LeftSide, RightSide} from "./about.styles";
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <AboutContainer>
            <Title>About Me.</Title>
            <Content>
                <LeftSide>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde fugiat molestias nostrum in quos voluptas minima soluta qui voluptatem adipisci porro vero sunt tempore sapiente asperiores facere error corporis, sint possimus consequuntur ex nulla ut. Nisi beatae maxime ipsum iste, reiciendis fuga dolorem blanditiis unde minus minima non suscipit!
                </LeftSide>
              
                <RightSide>
                <Fade right cascade>
                    <Image src="/assets/me.jpg" width="400px" height="400px"/>
                    </Fade>
                </RightSide>
                
            </Content>
        </AboutContainer>
    )
}

export default About;