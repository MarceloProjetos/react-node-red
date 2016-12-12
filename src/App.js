
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {  
  Grid,
  Navbar,
  Nav, 
  NavDropdown,
  MenuItem, 
  Jumbotron,
  Alert,
  Button,
} from 'react-bootstrap';
//Menu cadastro
import CadastroContas     from './containers/CadastroContas/CadastroContasForm';
import CadastroSocios     from './containers/CadastroSocios/CadastroSociosForm';
//Menu Lançamento
import MovimentoInclusao  from './containers/Lancamentos/lancamentoInclusaoForm';
import MovimentoSocios    from './containers/Lancamentos/lancamentoSociosForm';
import AtualizaMovimentos from './containers/Lancamentos/lancamentoAtualizaForm';
//Menu Consultas
import PrevisaoDiaria     from './containers/consultaPrevisaoDiariaForm';
import PrevisaoMensal     from './containers/consultaPrevisaoMensalForm';
import CalculoPrevisao    from './containers/consultaCalculoForm';
import PosicaoBancaria    from './containers/consultaPosicaoBancariaForm';
import PosicaoPeriodo     from './containers/consultaPosicaoPeriodoForm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: 'Financeiro_' + (1 + Math.random() * 4294967295).toString(16),
      form: null,
      config: {
        host: '192.168.0.174',
        port: 61614,
        protocol: 'ws'
      }

    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({form: null});
  }

  handleClick(e) {
    //alert(JSON.stringify(e))
    switch(e) {
      case 'Socios':
        this.setState(
          {
            form: 
              <CadastroSocios 
                clientId={this.state.clientId}
                nome="Cadastro de Socios"
                onClose={this.handleClose.bind(this)}
                config={this.state.config} 
              >
                  <span>Algo deu errado para achar o form CadastroSocios</span>
              </CadastroSocios> 
          }
        )
        break;
      case 'Contas':
        this.setState(
          {
            form: 
              <CadastroContas 
                clientId={this.state.clientId}
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)}
                config={this.state.config}
              >
                <span>Algo deu errado para achar o form CadastroContas</span>  
              </CadastroContas> 
          }
        )
        break;
      case 'MovimentoInclusao':
        this.setState(
          {
            form: 
              <MovimentoInclusao
                clientId={this.state.clientId}
                nome="Inclusão de Movimento"
                onClose={this.handleClose.bind(this)}
                config={this.state.config} 
              >
                  <span>Algo deu errado para achar o form MovimentoInclusao</span>
                   
              </MovimentoInclusao> 
          }
        )
        break;
      case 'MovimentoSocios':
        this.setState(
          {
            form: 
              <MovimentoSocios
                clientId={this.state.clientId} 
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form MovimentoSocios</span>
                   
              </MovimentoSocios> 
          }
        )
        break;
      case 'AtualizaMovimentos':
        this.setState(
          {
            form: 
              <AtualizaMovimentos
                clientId={this.state.clientId}
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form AtualizaMovimentos</span>
                   
              </AtualizaMovimentos> 
          }
        )
        break;
      case 'PrevisaoDiaria':
        this.setState(
          {
            form: 
              <PrevisaoDiaria
                clientId={this.state.clientId} 
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form PrevisaoDiaria</span>
                   
              </PrevisaoDiaria> 
          }
        )
        break;
      case 'PrevisaoMensal':
        this.setState(
          {
            form: 
              <PrevisaoMensal
                clientId={this.state.clientId} 
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form PrevisaoMensal</span>
                   
              </PrevisaoMensal> 
          }
        )
        break;
      case 'CalculoPrevisao':
        this.setState(
          {
            form: 
              <CalculoPrevisao
                clientId={this.state.clientId} 
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form CalculoPrevisao</span>
                   
              </CalculoPrevisao> 
          }
        )
        break;
      case 'PosicaoBancaria': 
        this.setState(
          {
            form: 
              <PosicaoBancaria
                clientId={this.state.clientId} 
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form PosicaoBancaria</span>
                   
              </PosicaoBancaria> 
          }
        )
        break;
      case 'PosicaoPeriodo':
        this.setState(
          {
            form: 
              <PosicaoPeriodo
                clientId={this.state.clientId} 
                nome="Cadastro de Contas"
                onClose={this.handleClose.bind(this)} 
              >
                  <span>Algo deu errado para achar o form PosicaoPeriodo</span>
                   
              </PosicaoPeriodo> 
          }
        )
        break;
      default:
        this.handleClose(this); 
        this.setState({
          form: 
          <Alert bsStyle="danger" style={{margin: 200}} >
          <h4>Impossivel mas entramos no "default" do case principal!</h4>
            <p>Alguma coisa muito errada aconteceu, avise o responsavel.</p>
            <p>
              <Button onClick={this.handleClose}>Ok</Button>
            </p>
          </Alert>
        });
    }

  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="http://www.uol.com.br/" target="_blank">Sair</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
              <NavDropdown eventKey={1} title="Cadastro" id="Cadastro-nav-dropdown">
                <MenuItem onClick={this.handleClick.bind(this, 'Socios')}   eventKey={1.1}>Socios</MenuItem>
                <MenuItem onClick={this.handleClick.bind(this, 'Contas')}   eventKey={1.2}>Conta Corrente</MenuItem>
                <MenuItem divider />
              </NavDropdown>

              <NavDropdown eventKey={2} title="Lançamentos" id="Lançamentos-nav-dropdown">
                <MenuItem onClick={this.handleClick.bind(this, 'MovimentoInclusao')} eventKey={2.1}>Inclusão</MenuItem>
                <MenuItem onClick={this.handleClick.bind(this, 'MovimentoSocios')}  eventKey={2.2}>Sócios</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={this.handleClick.bind(this, 'AtualizaMovimentos')}eventKey={2.3}>Atualiza Movimentos</MenuItem>
              </NavDropdown>

              <NavDropdown eventKey={3} title="Consulta" id="Consulta-nav-dropdown">
                <MenuItem onClick={this.handleClick.bind(this, 'PrevisaoDiaria' )}eventKey={3.1}>Previsão diaria</MenuItem>
                <MenuItem onClick={this.handleClick.bind(this, 'PrevisaoMensal' )}eventKey={3.2}>Previsão mensal</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={this.handleClick.bind(this, 'CalculoPrevisao')}eventKey={3.4}>Calculo Previsão</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={this.handleClick.bind(this, 'PosicaoBancaria')}eventKey={3.5}>Posição Bancaria</MenuItem>
                <MenuItem onClick={this.handleClick.bind(this, 'PosicaoPeriodo' )}eventKey={3.5}>Posição por Periodo</MenuItem>
              </NavDropdown>
            </Nav>
          </Grid>

        </Navbar>
        <Jumbotron>
          <Grid>
            <p> 
            </p>
          </Grid>
        </Jumbotron>

        {this.state.form}

      </div>
    );
  }
}
/*            <h1>Bem vindo ao teste2</h1>
              <p> 
              <Button
                bsStyle="success" //estilo do botão
                bsSize="large" //tamanho do botão
                href="http://react-bootstrap.github.io/components.html" //link do botão, no caso a propria documentação
                target="_blank"> 
                Veja a Documentação do React Bootstrap 
              </Button>
            </p>
            */