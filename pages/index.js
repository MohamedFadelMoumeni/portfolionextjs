import Header from '../components/header/header.component'
import ContainerComponent from '../components/container/container.component'
import {Element} from "react-scroll"
import dynamic from "next/dynamic";

// Dynamic Imports

const Hero = dynamic(() => import('../components/hero/hero.component'))
const Skills = dynamic(() => import('../components/skills/skills.component'))
const Work = dynamic(() => import('../components/work/work.component'))
const Testimonials = dynamic(() => import('../components/testimonials/testimonials.component'))
const About = dynamic(() => import('../components/about/about.component'))
const Contact = dynamic(() => import('../components/contact/contact.component'))
const RecentBlog = dynamic(() => import('../components/recent-blog/recent-blog.component'))

export default function Home() {
  return (
    <>
        <ContainerComponent>
      <Header />
      <Hero />
      <Skills />
      <Element className='work' classID='work' id='work'>
      <Work />
      </Element>
      <Element classID='testimonials' className='testimonials' id="testimonials">
      <Testimonials />
      </Element>
      <Element className='about' classID='about' id='about'>
      <About />
      </Element>
      <RecentBlog />
      <Element className="contact" id="contact">
      <Contact />
      </Element>
    </ContainerComponent>
    </>
  )
}
