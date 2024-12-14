
import { useState } from 'react'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

function App() {

  const [result, setResult] = useState("")

  const getUsers = async()=>{
    const resp = await fetch(`${URL}/ping`)
    const data = await resp.json()

    setResult(data)
  }
  

  return (
    <>
      <div>
        <h1>Mern render</h1>

          <button onClick={getUsers}>
            Users
          </button>
          
          <div>
            <pre>
              {JSON.stringify(result)}
            </pre>
          </div>
      </div>
    </>
  )
}

export default App
