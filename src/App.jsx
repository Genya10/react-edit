import { useState } from 'react'
import cl from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className={cl.container}>
  <h1 className={cl.title}> React Vite</h1>
  <p className={cl.text}>My third vite app</p>
   </div>
    </>
  )
}

export default App
