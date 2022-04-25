import {HeroContainer, Title, Headline, Content, HeroImg, Button, Icons} from "./hero.styles"
import Fade from 'react-reveal/Fade';
import {BsFacebook, BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs"
import Illustration from "../illustartion/illustration.component";
import Typical from 'react-typical'
import Link from "next/link";
import Image from "next/image";
import {Link as ScrollLink} from "react-scroll"

const Hero = () => {
    return (
        <HeroContainer>
            <Illustration />
            <Content>
           <Fade left>
           <Title><Typical steps={["I'm Mohamed", 3000, 'Nice to meet you !', 3000]}  loop={Infinity}/> </Title>
            <Headline>
            a self-taught Full Stack JavaScript Developer, UI/UX Designer,Security Pentester.
I help founders add value to society by crafting software using JavaScript tools, I love open source and building side projects.
            </Headline>
            <ScrollLink to="contact" smooth>
            <Button>Get in touch</Button>
            </ScrollLink>
            <Icons>
            <Link href="https://www.facebook.com/profile.php?id=100019011732806" passHref>
                <a target="_blank">
                <BsFacebook size="20px"/>
                </a>
                </Link>

                <Link href="https://www.facebook.com/profile.php?id=100019011732806" passHref>
                <a target="_blank">
                <BsGithub size="20px"/>
                </a>
                </Link>

                <Link href="https://twitter.com/MoumeniFadel" passHref>
                <a target="_blank">
                <BsTwitter size="20px"/>
                </a>
                </Link>

                <Link href="https://www.linkedin.com/in/mohamedfadelmoumeni/" passHref>
                <a target="_blank">
                <BsLinkedin size="20px"/>
                </a>
                </Link>
                
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