import './App.css'
import Navbar from './component/navbar' // export default component.
import {MainSummary} from './component/MainSummary' // export component.
import { createElement } from 'react' // without using JSX
import { Excerise } from './ReactExcerise'
import JSXCurlyBraces from './JSXCurlyBraces'
import State from './reactTopics/state'


function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div>
          <h3>React Tutorial 19</h3>
          <MainSummary/>
        </div>
        <br /><br /><br /><br />
        <JSXCurlyBraces/>
        <WithOutJSX></WithOutJSX>
        <br /><br /><br />
        <Excerise/>
      </main>

      <State/>
    </div>
  )
}

// Without using JSX print paragraph tag.
export function WithOutJSX() {
  return createElement("p",{className:"para"}, "Hellow Prateek Jadhav")
}

export default App
