import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skill from "./components/Skill"
import SocialLinks from "./components/SocialLinks"
import Socialsites from "./components/Socialsites"

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
      <SocialLinks/>
      <Socialsites/>
    </div>
  )
}

export default App
