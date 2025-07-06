import { useState } from 'react'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom'

function App() {
  const [mode, setMode] = useState("dark");

  const enableDark = () => {
    if(mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  return (
    <>
      <header>
        <Navbar title="Altus Solution" contact="Contact" mode={mode} toggleMode={enableDark} />
      </header>
      <main>
        <About/>
        <TextFrom heading="Text to Convert into Uppercase"/>
      </main>
    </>
  )
}

export default App
