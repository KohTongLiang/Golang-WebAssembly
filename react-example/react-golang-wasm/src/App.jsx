import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import init from './main.wasm?init'
// import * as go from './wasm_exec.js'
import * as go from './main.wasm'

function App() {
  const [wasmResult, setWasmResult] = useState(null)

  useEffect(() => {
    const loadWasm = async () => {
      // console.log(go)
      // console.log(initd))
      // init().then((instance) => {
        // console.log(instance)
    //     go.run(instance)
    //     const htmlString = instance.exports.getHtml()
    //     setWasmResult(htmlString)
      // })
    }

    loadWasm()
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Golang + WASM</h1>
      <div className="card">
        <h4>{wasmResult}</h4>
        <button id="getHtml">
          Run GO function
        </button>
      </div>
    </>
  )
}

export default App
