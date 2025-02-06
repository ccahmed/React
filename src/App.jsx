import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Hello'
import From from './Components/Form'
import'bootstrap/dist/css/bootstrap.min.css';
import { Counter, ListManager, ColorBox, NotesManager, TodoList } from "./Components/exercices";
import Event from "./Components/Event";
import Events from "./Components/Events";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       <Hello></Hello>
      <From labelle="FirstName" namee="FirstName"></From>
      <From labelle="LastName" namee="LastName"></From> 
      <div>
      <h1>Workshop React - Exercices</h1>
      <Counter />
      <ListManager />
      <ColorBox />
      <NotesManager />
      <TodoList />
    </div>*/
      }
    <div className="App">
      <Events />
    </div>

    </>
  )
}

export default App
