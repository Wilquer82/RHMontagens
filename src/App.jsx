import RHLogo from './assets/logoRH.jpeg';
import Big from './assets/logoFundoGRD.jpeg';
import Animacao from './assets/animacao.gif';
import Movie from './assets/solda.mp4';
import './App.css'

function App() {

  return (
    <div >
      <header className="header">
          <img src={RHLogo} className="logo" alt="RHlogo" />
          <a href="#nossaHistoria"><h2 className="h2">NOSSA HISTÓRIA</h2></a>
          <a href="#Atuacao"><h2 className="h2">ATUAÇÃO</h2></a>
          <a href="#Servicos"><h2 className="h2">SERVIÇOS</h2></a>
          <a href="#Contato"><h2 className="h2">CONTATO</h2></a>
      </header>
      <div className="main">
        <h1 style={{display:"none"}}>RH Montagens Industriais</h1>
        <video width={"80%"} height={"auto"} autoPlay loop muted style={{borderRadius:"2rem", opacity:".7", marginTop:".5rem"}}>
            <source src={Movie} type="video/mp4"/>
        </video>
        <img src={Big} width={"80%"} height={670} style={{borderRadius:"2rem", opacity:"10%", position:"absolute", zIndex:"5", top:"7rem", left: "9.5rem"}}/>
        <br/>
        <br/>
        <div style={{borderColor:"#6067e6",  borderStyle:"outset", width:"80%", marginLeft:"10%"}}>
          <h2 id="nossaHistoria"style={{textAlign: "left", marginLeft:"20%", color: "#6067e6", textShadow:"1px 1px black"}}>Nossa História</h2>
          <br/>
          <p style={{fontSize: "1.2em",textAlign:"justify", width:"50%", marginLeft:"25%", color: "#6067e6", textShadow:"1px 1px black"}}>
              A RH Montagens Industriais foi fundada em 2014 por Richard Heleno da Cruz, com o objetivo de prestação de serviços em maquinas e equipamentos paras as mais variadas finalidades, oferecendo sempre qualidade garantida. profissionais experientes, 
              excelencia no atendimento e execução, além de conhecimento técnico apurado. Nesses anos atuando no mercado, muito foi conquistado e melhorado, sempre com o auxílio de clientes e cooperadores
              Contamos com tratamento de 100% de todos nossos resíduos químicos e biológicos, seleção de descarte de resíduos de modo eficiente, colaborando e respeitando nosso meio ambiente e qualidade de vida
          </p>
        </div>
        <br/>
        <br/>
        <div style={{borderColor:"#6067e6", borderStyle:"outset", width:"80%", marginLeft:"10%"}}>
          <h2 id="Atuacao"style={{textAlign: "left", marginLeft:"20%  ", color: "#6067e6", textShadow:"1px 1px black"}}>Atuação</h2>
          <br/>
          <p style={{fontSize: "1.2em",textAlign:"justify", width:"50%", marginLeft:"25%", color: "#6067e6", textShadow:"1px 1px black"}}>
          A Solução RH é composta por uma linha de equipamentos, desenvolvida com os mais recentes conceitos tecnológicos ligados ao setor de Alimentos e Químicos, possuindo ainda a disponibilidade de aprimoramentos e desenvolvimentos 
          expansivos à medida que as necessidades do cliente aumentam, tanto para equipamentos como para sistemas. Aplicando tecnologia própria, a RH estabelece relação direta com seus clientes, apresentando como vantagem 
          competitiva o domínio técnico sobre a instalação e operação de seus equipamentos. A principal funcionalidade do sistema é primeiramente garantir que intervenções humanas errôneas e inadequadas comprometam a vida útil do equipamento, imprimindo ao mesmo uma operação que venha a danificar a máquina e ou o sistema.
          </p>
        </div>
        <br/>
        <br/>
        <div style={{borderColor:"#6067e6", borderStyle:"outset", width:"80%", marginLeft:"10%"}}>
          <h2 id="Servicos"style={{textAlign: "left", marginLeft:"20%  ", color: "#6067e6", textShadow:"1px 1px black"}}>Serviços</h2>
          <br/>
          <p style={{fontSize: "1.2em",textAlign:"justify", width:"60%", marginLeft:"25%", color: "#6067e6", textShadow:"1px 1px black"}}>
          <i className="bi bi-check-lg"/>&nbsp;Montagem e Desmontagem de equipamentos, tubulações e inter ligações em todas as ligas metálicas<br/>
          <i className="bi bi-check-lg"/> &nbsp;Montagem completa da linha de produção: Fabricação de quipamentos de processo de transporte e estocagem<br/>
          <i className="bi bi-check-lg"/> &nbsp;Fabricação de equipamentos e manutenção de usinas<br/>
          <i className="bi bi-check-lg"/> &nbsp;Manutenção em geral de equipamentos diversos nas instalações dos clientes e também em nossas instalações<br/>
          <i className="bi bi-check-lg"/> &nbsp;Soldas especials<br/>
          Plantas industriais completas:<br/>
          <i className="bi bi-check-lg"/> &nbsp;Tanques de Processo<br/>
          <i className="bi bi-check-lg"/> &nbsp;Tanques Agitadores<br/>
          <i className="bi bi-check-lg"/> &nbsp;Roscas<br/>
          <i className="bi bi-check-lg"/> &nbsp;Transportadoras<br/>
          <i className="bi bi-check-lg"/> &nbsp;Dosadores<br/>
          <i className="bi bi-check-lg"/> &nbsp;Silos<br/>
          <i className="bi bi-check-lg"/> &nbsp;Elevadores de Caneca<br/>
          <i className="bi bi-check-lg"/> &nbsp;Peneiras Vibratórias<br/>
          <i className="bi bi-check-lg"/> &nbsp;Peneiras Rotativas<br/>
          <i className="bi bi-check-lg"/> &nbsp;Moinho de Facas<br/>
          <i className="bi bi-check-lg"/> &nbsp;Esteiras Tranportadoras Misturadores<br/>
          <img src={Animacao} width={500} autoPlay style={{position: "absolute", zIndex:"10", top:"140rem", right: "15rem", borderRadius:"1rem" }}/>
          </p>
        </div>
        <br/>
        <br/>
        <h2 id="Contato" style={{textAlign: "left", marginLeft:"20%  ", color: "#6067e6", textShadow:"1px 1px black"}}>Contato</h2>
        <h2 style={{color: "#6067e6"}}> <i className="bi bi-whatsapp" style={{color: "green"}}/> (19) 99350-2671</h2>
        <br/>
      </div>
    </div>
  )
}

export default App
