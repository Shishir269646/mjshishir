import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Navbar from "./componenets/sections/Navbar";
import Hero from "./componenets/sections/Hero";
import About from './componenets/sections/About';
import Services from './componenets/sections/Services';
import Projects from './componenets/sections/Projects';
import Timeline from './componenets/sections/Timeline';
import Footer from './componenets/sections/Footer';
import Contact from './componenets/sections/Contact';


function App() {


  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
      />
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Timeline></Timeline>
      <Contact></Contact>
      <Footer></Footer>
    </div>

  )
}

export default App
