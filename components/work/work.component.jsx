import {WorkContainer, Title, Directory} from "./work.styles"
import WorkCard from "../work-card/work-card.component";
import Button from "../button/button.component";


const Work = () => {
    return (
        <WorkContainer>
            <Title>Previous work.</Title>
            <WorkCard img="/assets/swipe.png"/>
            <WorkCard img="/assets/belgique.png" reverse/>
            <div
            style={{
                display: "flex",
                alignItems:"center",
                justifyContent:"center",
                marginTop: "2rem"
            }}
            >

            <Button center>More projects</Button>
            </div>
        </WorkContainer>
    )
}

export default Work;