import { Contact, Experience, Tech, Works } from "./components"
import HeroAbout from "./components/HeroAbout"

import Education from "./components/Education"
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <HeroAbout />
      <Experience />
      <Education />
      <Tech />
      <div className="relative z-0">
        <Works />
        <Contact />
      </div>
    </div>
  )
}

export default App
