
import React, { Component } from 'react';

import {  
  Button,
  Panel,
  Glyphicon, 
  Row, 
  Col,
  Tooltip,
  Alert,
  OverlayTrigger
} from 'react-bootstrap';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//import uuid               from 'node-uuid';
import { assign}          from 'lodash';
import mqtt               from 'mqtt/lib/connect';
import NovaContaForm      from './NovaContaForm';
import EditarContaForm    from './EditarContaForm';
import ExcluirContaForm   from './ExcluirContaForm';
 
const clientId = 'mqtt_' + (1 + Math.random() * 4294967295).toString(16);

export default class LancamentoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      conta: null,

      contas: [],

      // armazena os topicos que estou subscrito
      topics: {}
    }

    this.handleClose    = this.handleClose.bind(this);
    this.handleClick    = this.handleClick.bind(this);
    this.handleError    = this.handleError.bind(this);
    this.handleCarregar = this.handleCarregar.bind(this);
    this.handleIncluido = this.handleIncluido.bind(this);
    this.handleAlterado = this.handleAlterado.bind(this);
    this.handleExcluido = this.handleExcluido.bind(this);

    this.onRowSelect = this.onRowSelect.bind(this);
  }

  carregaLista() {
    // enviar dados para fila
    this.client.publish('financeiro/cadastro/contas/carregar/',JSON.stringify('Carregar lista '));
  }

  componentWillMount() {
    console.log('Config: ' + JSON.stringify(this.props.config,null,2));

    let opts = {
      host: this.props.config.host, //'192.168.0.174', //'test.mosquitto.org'
      port: this.props.config.port,
      protocol: this.props.config.protocol,
      qos: 0,
      retain: false,
      clean: true,
      keepAlive: 30, // 30 sec.
      clientId: clientId
    }

    this.client = mqtt.connect(opts);

    this.client.on('connect', function() {

      this.client.subscribe(
        ['financeiro/cadastro/contas/erros/'   + clientId, 
        'financeiro/cadastro/contas/carregado/',
        //'financeiro/cadastro/contas/incluido/', 
        //'financeiro/cadastro/contas/alterado/', 
        'financeiro/cadastro/contas/excluido/'], 
         function(err, granted) { 
          !err ? 
            this.setState(
              {
                topics: assign(
                          this.state.topics, 
                          {
                            [granted[0].topic]: this.handleError,   
                            [granted[1].topic]: this.handleCarregar,  
                           //[granted[2].topic]: this.handleIncluido, 
                           // [granted[2].topic]: this.handleAlterado, 
                            [granted[2].topic]: this.handleExcluido 
                          }
                        )
              },
              this.carregaLista
            ) 
          : 
            alert('Erro ao se inscrever no topico: ' + err);
        }.bind(this)
      );  
    }.bind(this));
    
    this.client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      
      // this.state.topics[topic] && this.handleError(message.toString());
      this.state.topics[topic] && this.state.topics[topic](message.toString()); 

    }.bind(this))
    console.log('ClientID cadastro = ' + clientId );
  }

  componentWillUnmount() {
    this.state.topics && Object.keys(this.state.topics).forEach( (topic) =>
      this.client.unsubscribe(topic, function(err) 
        { 
          err && console.log('Erro ao retirar a inscrição ao topico: ' + topic)
        }
      )
    )
    this.client.end();
  }

  handleClose() {
    this.setState({form: null});
  }

  handleError(msg) {
    alert('Erro: ' + msg);
  }

  handleCarregar(msg) {
    this.setState({contas:JSON.parse(msg)});
  }

  handleIncluido(msg) {
    alert('incluido: ' + msg);
  }

  handleAlterado(msg) {
    alert('alterado: ' + msg);
  }

  handleExcluido(msg) {
    alert('excluido: ' + msg);
  }

  handleClick(e) {
    switch(e) {
      case 'Nova':
        console.log('ClientID nova conta = ' + clientId );
        this.setState(
          {
            form: 
              <NovaContaForm 
                clientId={clientId}
                title="Cadastrar nova Contas"
                onClose={this.handleClose.bind(this)}
                config={this.props.config} 
                //{...this.state.lista[i]}
              >
                  <span>Algo deu errado para achar o form CadastroContas</span>
              </NovaContaForm> 
          }
        )
        break;
      case 'Editar':
        this.setState(
          {
            form: 
              <EditarContaForm 
                clientId={clientId}
                title="Editar Conta cadastrada"
                onClose={this.handleClose.bind(this)} 
                record={this.state.conta}
                config={this.props.config} 
              >
                  <span>Algo deu errado para achar o form EditarContas</span>
              </EditarContaForm> 
          }
        )
        break;
      case 'Delete':
        this.setState(
          {
            form: 
              <ExcluirContaForm 
                clientId={clientId}
                title="Deletar esta Conta ?"
                onClose={this.handleClose.bind(this)} 
                record={this.state.conta} 
                config={this.props.config} 
              >
                  <span>Algo deu errado para achar o form ExcluirContas</span>
              </ExcluirContaForm> 
          }
        )
        break;
      default:
        this.setState({
          form: 
          <div>
            <Alert bsStyle="danger" style={{margin: 200}} >
            <h4>Impossivel mas entramos no "default" do case principal!</h4>
              <p>Alguma coisa muito errada aconteceu, avise o responsavel.</p>
              <p>
                <Button onClick={this.handleClose}>Ok</Button>
              </p>
            </Alert>
          </div>
        });
    }
  }

  onRowSelect(row, isSelected){
    console.log(row);
    console.log("selected: " + isSelected)
    this.setState({isSelected: isSelected, conta: row})
  }

  render() {
    //Row select setting
    const selectRowProp = {
      mode: "radio",  //checkbox for multi select, radio for single select.
      clickToSelect: true,   //click row will trigger a selection on that row.
      bgColor: "rgb(255, 200, 20)",   //selected row background color
      onSelect: this.onRowSelect,
    };
    return (
      <div>
        <Row>
        
          <Col md={1} />
          <Col md={10} >

            <Panel header={'Cadastro de Conta Corrente'} bsStyle="primary" >

                <Row style={{borderBottom: 'solid', borderBottomWidth: 1, borderBottomColor: '#337ab7', paddingBottom: 20}}>
                  <Col xs={6} md={2} >

                    <div>
                      <span>  
                        <h2>Contas</h2>    
                      </span>
                    </div>

                  </Col>
                  <Col xs={6} md={2} >

                    <div>
                      <span>      
                      </span>
                    </div>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Editar conta</Tooltip>)}
                    >

                        <Button
                          bsSize="large"
                          disabled={!this.state.isSelected}
                          onClick={this.handleClick.bind(this, 'Editar')}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="pencil" />
                          <div><span>Editar</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Excluir esta Conta</Tooltip>)}
                    >
                        <Button
                          bsSize="large"
                          disabled={!this.state.isSelected}
                          onClick={this.handleClick.bind(this, 'Delete')}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="trash" />
                          <div><span>Excluir</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >
                    <div>
                      <span>      
                      </span>
                    </div>
                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Cadastrar nova Contas</Tooltip>)}
                    >
                        <Button
                          bsSize="large"
                          onClick={this.handleClick.bind(this, 'Nova')}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="plus" />
                          <div><span>Nova</span></div>
                        </Button>
                    </OverlayTrigger>

                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <div><span> <br/> </span></div>
                        <BootstrapTable
                          data={this.state.contas}
                          remote={ true }
                          striped={true}
                          hover={true}
                          condensed={true}
                          pagination={false}
                          selectRow={selectRowProp}
                          search={true}>
                          <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" hidden={true}>Product ID</TableHeaderColumn>
                          <TableHeaderColumn dataField="banco"                               dataSort={true}>BANCO</TableHeaderColumn>
                          <TableHeaderColumn dataField="agencia"          dataAlign="center">CONTA</TableHeaderColumn>
                          <TableHeaderColumn dataField="conta"            dataAlign="center">AGÊNCIA</TableHeaderColumn>
                          <TableHeaderColumn dataField="descricao"        dataAlign="center">DESCRIÇÃO</TableHeaderColumn>
                        </BootstrapTable>
                  </Col>
                </Row>
            </Panel>
          </Col>
          <Col md={1} />
        </Row>

      {this.state.form}

    </div>
    );
  }
}

//<h4>ClientId: {this.props.clientId}</h4>