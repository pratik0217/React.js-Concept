import './App.css'
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom'

function App() {
  return (
    <>
      <header>
        <Navbar title="Altus Solution" contact="Contact" />
      </header>
      <main>
        <TextFrom heading="Text to Convert into Uppercase"/>
      </main>
    </>
  )
}

export default App
