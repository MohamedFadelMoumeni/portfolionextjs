import {WorkContainer, Title, Directory} from "./work.styles"
import WorkCard from "../work-card/work-card.component";
import Button from "../button/button.component";
import Link from "next/link"


const Work = () => {
    return (
        <WorkContainer>
            <Title>Previous work.</Title>
            <WorkCard img="/assets/swipe.png" title="SwipInv Agency Website." description="SwipInv a digital marketing agency I built the second version of their website ." techStack={["Html", "TailwindCss", "Wordpress", "Headless"]}/>
            <WorkCard img="/assets/belgique.png" title="Belguim Transfert." description="Belguim Transfert is a transport agency specialized in Airport taxi transfers , I built the entire app from UI to backend using Headless Wordpress " reverse  techStack={["Nextjs", "Styled-components", "Wordpress", "Headless", "Stripe"]}/>
            <WorkCard img="/assets/AI.png" title="Face , Celebrity , Demographics detection." description="Built three apps for AI based on claraifi api" techStack={["Html", "Vanilla JS"]}/>
            <div
            style={{
                display: "flex",
                alignItems:"center",
                justifyContent:"center",
                marginTop: "2rem"
            }}
            >

            <Link passHref href="https://github.com/MohamedFadelMoumeni?tab=repositories">
            <a target="_blank">
            <Button center>More projects</Button>
            </a>
            </Link>
            </div>
        </WorkContainer>
    )
}

export default Work;