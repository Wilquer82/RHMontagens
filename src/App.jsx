import RHLogo from './assets/logoRH.jpeg'
import './App.css'

function App() {

  return (
    <div >
      <header className="header">
          <img src={RHLogo} className="logo" alt="RHlogo" />
          <a><h2>Nossa História</h2></a>
          <a><h2>Atuação</h2></a>
          <a><h2>Serviços</h2></a>
          <a><h2>Contato</h2></a>
      </header>
      <div className="main">
        <h1>RH Montagens Industriais</h1>
      </div>
    </div>
  )
}

export default App
