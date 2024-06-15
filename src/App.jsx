import RHLogo from './assets/RHMONTAGENSLOGO.jpg'
import './App.css'

function App() {

  return (
    <div className="main">
      <header className="header">
          <img src={RHLogo} className="logo" alt="RHlogo" />
          <h2 className="logo" >Nossa História</h2>
          <h2 className="logo" >Atuação</h2>
          <h2 className="logo" >Serviços</h2>
          <h2 className="logo" >Contato</h2>
      </header>
      <h1>RH Montagens Industriais</h1>

    </div>
  )
}

export default App
