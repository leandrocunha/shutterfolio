import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Bianca Zanghi</h1>
        <nav>
          <a href="#" className="navitem">Casais</a>
          <a href="#" className="navitem">Famílias</a>
          <a href="#" className="navitem">Pessoais</a>
          <a href="#" className="navitem">Sobre</a>
          <a href="#" className="navitem">Contato</a>
        </nav>
      </header>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
