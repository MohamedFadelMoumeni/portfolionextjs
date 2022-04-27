import Image from "next/image";
import {AboutContainer, Title, Content, LeftSide, RightSide} from "./about.styles";
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <AboutContainer>
            <Title>About Me.</Title>
            <Content>
                <LeftSide>
                    My name is <strong>Mohamed Fadel Moumeni</strong>, 20 years old software developer who specializes in JavaScript Technologies.
                    Experience in building complete websites with Backend using CMS & Nodejs & SpringBoot.Having more than three years of experience.
                    With a diverse set of skills, I take a different approach to each project to find the best way to present it.
                    If you need my assistance, feel free to discuss any project details with me! 
                    <br />Main rules : 
                    <div style={{
                        display: "flex",
                        flexDirection:"column",
                        fontSize: "1.8rem",
                        marginTop: "1rem"
                    }}>
                    <strong>★ Best Quality and Accurate Deadline.</strong>
                    <strong>★ Good Responsive and Perfect Communication Skills.</strong>
                    <strong>★ Front End development.</strong>
                    <strong>★ Back End development.</strong>
                    <strong>★ Databases.</strong>
                    </div>


                </LeftSide>
              
                <RightSide>
                <Fade right cascade>
                    <Image src="/assets/me.jpg" width="400px" height="400px" alt="Mohamed Fadel Moumeni"/>
                    </Fade>
                </RightSide>
                
            </Content>
        </AboutContainer>
    )
}

export default About;