import Header from '../components/header/header.component'
import ContainerComponent from '../components/container/container.component'
import Hero from '../components/hero/hero.component'
import Skills from '../components/skills/skills.component'
import Work from '../components/work/work.component'
import Testimonials from '../components/testimonials/testimonials.component'
import About from '../components/about/about.component'
import Contact from '../components/contact/contact.component'
import {Element} from "react-scroll"

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
      <Element className="contact" id="contact">
      <Contact />
      </Element>
    </ContainerComponent>
    </>
  )
}
