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
          <a href="#nossaHistoria"><h1 className="h2">NOSSA HISTÓRIA</h1></a>
          <a href="#Atuacao"><h1 className="h2">ATUAÇÃO</h1></a>
          <a href="#Servicos"><h1 className="h2">SERVIÇOS</h1></a>
          <a href="#Contato"><h1 className="h2">CONTATO</h1></a>
      </header>
      <div className="main">
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <video width={"80%"} height={"auto"} autoPlay loop muted style={{borderRadius:"2rem", opacity:".7", marginTop:".5rem"}}>
              <source src={Movie} type="video/mp4"/>
          </video>
          <img src={Big} width={"80%"} height={"auto"} 
            style={{borderRadius:"2rem", opacity:"10%", zIndex:"5", position: "absolute"}}/>
        </div>
        <br/>
        <br/>
        <div id="nossaHistoria" style={{borderColor:"#6067e6",  borderStyle:"outset", width:"80%", marginLeft:"10%"}}>
          <h2 style={{textAlign: "left", marginLeft:"20%", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>Nossa História</h2>
          <br/>
          <p style={{textAlign:"justify", width:"80%", marginLeft:"10%", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>
              A RH Montagens Industriais foi fundada em 2014 por Richard Heleno da Cruz, com o objetivo de prestação de serviços em maquinas e equipamentos paras as mais variadas finalidades, oferecendo sempre qualidade garantida. profissionais experientes, 
              excelencia no atendimento e execução, além de conhecimento técnico apurado. Nesses anos atuando no mercado, muito foi conquistado e melhorado, sempre com o auxílio de clientes e cooperadores
              Contamos com tratamento de 100% de todos nossos resíduos químicos e biológicos, seleção de descarte de resíduos de modo eficiente, colaborando e respeitando nosso meio ambiente e qualidade de vida
          </p>
        </div>
        <br/>
        <br/>
        <div id="Atuacao" style={{borderColor:"#6067e6", borderStyle:"outset", width:"80%", marginLeft:"10%"}}>
          <h2 style={{textAlign: "left", marginLeft:"20%  ", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>Atuação</h2>
          <br/>
          <p style={{textAlign:"justify", width:"80%", marginLeft:"10%", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>
          A Solução RH é composta por uma linha de equipamentos, desenvolvida com os mais recentes conceitos tecnológicos ligados ao setor de Alimentos e Químicos, possuindo ainda a disponibilidade de aprimoramentos e desenvolvimentos 
          expansivos à medida que as necessidades do cliente aumentam, tanto para equipamentos como para sistemas. Aplicando tecnologia própria, a RH estabelece relação direta com seus clientes, apresentando como vantagem 
          competitiva o domínio técnico sobre a instalação e operação de seus equipamentos. A principal funcionalidade do sistema é primeiramente garantir que intervenções humanas errôneas e inadequadas comprometam a vida útil do equipamento, imprimindo ao mesmo uma operação que venha a danificar a máquina e ou o sistema.
          </p>
        </div>
        <br/>
        <br/>
        <div id="Servicos" style={{borderColor:"#6067e6", borderStyle:"outset", width:"80%", marginLeft:"10%"}}>
          <h2 style={{textAlign: "left", marginLeft:"20%  ", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>Serviços</h2>
          <br/>
          <p style={{textAlign:"justify", width:"80%", marginLeft:"10%", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>
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
          <img id="gif" 
            src={Animacao} 
            width={500} 
            autoPlay 
            style={{position: "absolute", zIndex:"10", top:"105rem", right: "15rem", borderRadius:"1rem" }}/>
          </p>
        </div>
        <br/>
        <br/>
        <h2 id="Contato" style={{textAlign: "left", marginLeft:"20%  ", color: "#dfdfdf", textShadow:"1px 1px #646cffaa"}}>Contato</h2>
        <h2 style={{color: "#dfdfdf"}}> <i className="bi bi-whatsapp" style={{color: "green"}}/> (19) 99350-2671</h2>
        <br/>
      </div>
      <h1 style={{display:"none"}}>
        RH Montagens Industriais
        COMO INICIAMOS NOSSA HISTORIA:
        A RH MONTAGENS É UMA EMPRESA QUE FOI FUNDADA EM 2014 PELA PESSOA DO NOSSO CEO- RICHARD CRUZ QUE JÁ TRABALHAVA NA AREA E TINHA AMPLO CONHECIMENTO  , UMA HISTORIA QUE COMEÇOU PEQUENA, E HOJE É UMA POTENCIA NA NOSSA CIDADE E EM TODA REGIÃO INLUSIVE  A NIVEL BRASIL. NOSSO GRANDE DIFERENCIAL É UMA EQUIPE CAPACITADA, CAPAZ DE DESENVOLVER HABILIDADES TECNICAS COM MAIOR PRECISÃO ATENDENDO CADA NECESSIDADE ESPECIAL DOS NOSSOS CLIENTES, NOME FORTE NO RAMO DE MANUTENÇÃO E MONTAGENS BUSCAMOS A CADA DIA OFERECER AINDA MAIS QUALIDADE , SEGURANÇA, E OS MELHORES PROFISSIONAIS DO MERCADO. NA NOSSA CARTEIRA DE CLIENTES E FORNECEDORES , TEMOS OS MELHORES DO MERCADO OFERECENDO SEUS PRODUTOS ATRAVES DE NOSSOS SERVIÇOS, E FORNECEDORES NOS FORNECENDO O QUE HÁ DE MELHOR NO MERCADO PARA GARANTIRMOS A QUALIDADE DE NOSSOS SERVIÇOS E EQUIPAMENTOS, NOSSA EQUIPE DE ENGENHARIA DE PROJETOS ALTAMENTE QUALIFICADA E EXPERIENTE TRAS PRO MERCADO UMA CONFIABILIDADE GIGANTESCA PELA EXPERIENCIA E OS SERVIÇOS JÁ PRESTADOS EM GRANDES NOMES DO MERCADO ANTERIORMENTE, JUNTAMENTE COM NOSSA EQUIPE TECNICA , DIRETORIA E ATENDIMENTO DE PRIMEIRA COM PROFISSIONAIS CAPACITADOS FORMAM A NOSSA EQUIPE. VENHA NOS CONHECER TEREMOS A SATISFAÇÃO DE LHE ATENDER.


        QUEM SOMOS:
        Com tecnologia própria, a RH desenvolve um relacionamento de comprometimento com seus clientes ligados desde 1998 ao redor do Brasil, a RH se destaca nas vantagens competitivas e também no domínio do conhecimento das técnicas sobre os equipamentos relacionados a confiabilidade e clareza nas negociações feitas entre clientes e fornecedores. Para cumprir com esta exigência e a evolução do seguimento, a RH possui um departamento especializado de pesquisa e desenvolvimento de novos produtos com sede localizada em Mococa-SP. Atualmente desenvolvido e disponibilizado no Brasil, produtos que primam pelo elevado grau de confiabilidade e qualidade, no que se refere redução de tamanho Visando uma longa parceria com nossos clientes do setor de alimentos e químicos, a RH se preocupa em prestar um serviço de qualidade desde o início do projeto ao fechamento do acordo, execução do projeto e pós-venda, com isso a RH estrategicamente se posiciona perto de você garantindo a eficácia no atendimento técnico e a sua satisfação. Disponibiliza um centro de apoio técnico, contando com equipes de pesquisa, desenvolvimento e de engenharia de aplicação especializados e experientes em aplicações para o setor de Alimentos e químicos, a RH oferece sempre a melhor solução para o mercado.


        SOBRE NOSSA ATUAÇÃO: 

        A Solução RH é composta por uma linha de equipamentos, desenvolvida com os mais recentes conceitos tecnológicos ligados ao setor de Alimentos e Químicos, possuindo ainda a disponibilidade de aprimoramentos e desenvolvimentos expansivos à medida que as necessidades do cliente aumentam, tanto para equipamentos como para sistemas. Aplicando tecnologia própria, a RH estabelece relação direta com seus clientes, apresentando como vantagem competitiva o domínio técnico sobre a instalação e operação de seus equipamentos. A principal funcionalidade do sistema é primeiramente garantir que intervenções humanas errôneas e inadequadas comprometam a vida útil do equipamento, imprimindo ao mesmo uma operação que venha a danificar a máquina e ou o sistema.

        NOSSOS SERVIÇOS :

        A RH tem em sua prestação de serviços um de seus grandes diferenciais. Com uma equipe qualificada de engenheiros e técnicos, o Suporte RH atende a todos os clientes no Brasil, disponibilizando os seguintes serviços:

         Atendimento a campo;
         Assistência técnica;
         Movimentação de cargas (Munks) e (PTA)
        História
        A RH Montagens Industriais foi fundada em 2014 por Richard Heleno da Cruz, com o objetivo de prestação de serviços em maquinas e equipamentos paras as mais variadas finalidades, oferecendo sempre qualidade garantida. profissionais experientes, excelencia no atendimento e execução, além de conhecimento técnico apurado. Nesses anos atuando no mercado, muito foi conquistado e melhorado, sempre com o auxílio de clientes e cooperadores
        Política Ambiental
        Contamos com tratamento de 100% de todos nossos resíduos químicos e biológicos, seleção de descarte de resíduos de modo eficiente, colaborando e respeitando nosso meio ambiente e qualidade de vida
        Alguns de Nossos Principais Clientes:
        GELITA
        Improving Quality of Life
        ConduPasqua
        Condutores Elétricos Tintas e Solventes
        Maza
        www
        Alguns de Nossos Serviços e Produtos:
        * Montagem e Desmontagem de equipamentos, tubulações e inter ligações em todas as ligas metálicas;
        Montagem completa da linha de produção: Fabricação de quipamentos de processo de transporte e estocagem;
        * Fabricação de equipamentos e manutenção de usinas:
        * Manutenção em geral de equipamentos diversos nas instalações dos clientes e também em nossas instalações:
        * Soldas especials;
        Plantas industriais completas;
        Tanques de Processo
        Tanques Agitadores
        Roscas
        Transportadoras
        * Dosadores
        Silos
        Elevadores de
        Caneca
        Peneiras Vibratórias
        Peneiras Rotativas
        Moinho de Facas
        Esteiras Tranportadoras Misturadores
      </h1>
    </div>
  )
}

export default App
