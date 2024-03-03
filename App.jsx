/* eslint-disable */

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components"

import Education from "./components/Education"
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
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
