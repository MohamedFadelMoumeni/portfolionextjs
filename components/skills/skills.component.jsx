import {SkillsContainer, Title, Directory} from "./skills.styles";
import SkillsCard from "../skills-card/skills-card.component";
import {FaReact, FaNodeJs, FaHtml5, FaCss3Alt} from "react-icons/fa";
import {DiGithubBadge} from "react-icons/di";
import {SiFirebase} from "react-icons/si"
import {AiOutlineConsoleSql} from "react-icons/ai"
import {DiJava} from "react-icons/di"

const Skills = () => {
    return (
        <SkillsContainer>
            <Title>Skills.</Title>
            <Directory>
            <SkillsCard ><FaReact size="50px" /></SkillsCard>
            <SkillsCard ><FaNodeJs size="50px" /></SkillsCard>
            <SkillsCard ><DiGithubBadge size="50px" /></SkillsCard>
            <SkillsCard ><FaHtml5 size="50px" /></SkillsCard>
            <SkillsCard ><FaCss3Alt size="50px" /></SkillsCard>
            <SkillsCard ><SiFirebase size="50px" /></SkillsCard>
            <SkillsCard ><AiOutlineConsoleSql size="50px" /></SkillsCard>
            <SkillsCard ><DiJava size="50px" /></SkillsCard>
            </Directory>
        </SkillsContainer>
    )
}

export default Skills;