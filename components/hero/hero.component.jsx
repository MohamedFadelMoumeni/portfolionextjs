import {HeroContainer, Title, Headline, Content, HeroImg, Button, Icons} from "./hero.styles"
import Fade from 'react-reveal/Fade';
import {BsFacebook, BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs"
import Illustration from "../illustartion/illustration.component";
import Typical from 'react-typical'
import {Link} from "react-scroll"


import Image from "next/image";

const Hero = () => {
    return (
        <HeroContainer>
            <Illustration />
            <Content>
           <Fade left>
           <Title><Typical steps={['Hello', 3000, 'Nice!', 3000]}  loop={Infinity}/> ipsum dolor sit amet consectetur.</Title>
            <Headline>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</Headline>
            <Link to="contact">
            <Button>Contactez nous</Button>
            </Link>
            <Icons>
                <BsFacebook size="20px"/>
                <BsGithub size="20px"/>
                <BsTwitter size="20px"/>
                <BsLinkedin size="20px"/>
            </Icons>
           </Fade>
            </Content>
           
                <HeroImg>
                <Image src="/assets/hero.png" width="500" height="500"/>
                </HeroImg>
            
        </HeroContainer>
    )
}

export default Hero;