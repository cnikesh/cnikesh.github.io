import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-radial-[ellipse_80%_80%_at_50%_-20%] from-purple-900 to-zinc-900 to-75%"></div>
      <Navbar /> 
      <About />  
      <Projects /> 
      <Contact />
    </div>
  )
}

export default App
