import {WorkContainer, Title, Directory} from "./work.styles"
import WorkCard from "../work-card/work-card.component";
import Button from "../button/button.component";


const Work = () => {
    return (
        <WorkContainer>
            <Title>Previous work.</Title>
            <WorkCard img="/assets/swipe.png" title="SwipInv Agency Website." techStack={["Html", "TailwindCss", "Wordpress", "Headless"]}/>
            <WorkCard img="/assets/belgique.png" title="Belguim Transfert." reverse  techStack={["Nextjs", "Styled-components", "Wordpress", "Headless", "Stripe"]}/>
            <WorkCard img="/assets/swipe.png" title="Autohall Ecommerce." techStack={["Wordpress", "Woocommerce"]}/>
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