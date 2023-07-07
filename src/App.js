import './styles/App.css'
import {useEffect , useRef} from 'react'
import NavBar from './components/navbar'
import HeroSection from './components/hero-sect'
import ProfileSection from './components/profile'
import SkillSection from './components/skills'
import ProjectSection from './components/projects'
import ContactSection from './components/contacts'

const App = () => {

  return (
    <div className="main-container">
        <NavBar/>
        <HeroSection/>
        <ProfileSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
    </div>
  )

}

export default App