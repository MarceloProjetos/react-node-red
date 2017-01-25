
import React, { Component } from 'react';

import { 
  OverlayTrigger, 
  Button,
  Glyphicon,
  DropdownButton,
  ControlLabel, 
  Panel, 
  Col, 
  Row, 
  Grid,
  FormGroup,
  FormControl,
  Tooltip,
  MenuItem
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import uuid from 'node-uuid';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { assign} from 'lodash';
import mqtt from 'mqtt/lib/connect';

//const clientId = 'mqtt_lan' + (1 + Math.random() * 4294967295).toString(16);
const BrazilianDayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const BrazilianMonthLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Octubro', 'Novembro', 'Dezembro'];


export default class LancamentoForm extends Component {
  constructor(props) {
    super(props);

    //console.log('data = ' + datetime);

    this.state = { 
      _id:        0, 
      conta:      {
        "_id": "",
        "selecionada": false,
        "banco": "",
        "conta": "",
        "agencia": "",
        "descricao": "",
      },// conta selecionada
      data:       new Date().toISOString(),
      cheque:     "",
      liquidado:  false,
      operacao:   "credito",
      valor:      1,
      observacao: "",
      debito:     0,
      credito:    1,
      contas:     [],  // lista de contas
      topics:     {},

      //campos de controle
      conferir: false,
      labelConferir: 'Á conferir',
    };

    this.handleIncluir      = this.handleIncluir.bind(this);
    this.handleSearch       = this.handleSearch.bind(this);
    this.handleConferir     = this.handleConferir.bind(this);
    this.console_log        = this.console_log.bind(this);
    this.handleContaChange  = this.handleContaChange.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this)
  }

  componentWillMount() {
    //console.log('Config : ' + JSON.stringify(this.props.config,null,2));

    let opts = {
      host: this.props.config.host, //'192.168.0.174', //'test.mosquitto.org'
      port: this.props.config.port,
      protocol: this.props.config.protocol,
      qos: 0,
      retain: false,
      clean: true,
      keepAlive: 30, // 30 sec.
      clientId: this.props.clientId
    }

    this.client = mqtt.connect(opts);

    this.client.on('connect', function() {

      this.client.subscribe(
        [
          'financeiro/cadastro/contas/carregado/',
          'financeiro/lancamento/contas/erros/'   + this.props.clientId, 
          'financeiro/lancamento/contas/incluido/' + this.props.clientId,
          'financeiro/lancamento/contas/carregado/',
          'financeiro/lancamento/contas/saldo/carregado/'
        ], 
         function(err, granted) { 
          !err ? 
            this.setState(
              {
                topics: assign(
                          this.state.topics, 
                          {
                            [granted[0].topic]: this.topicCadastroContasCarregado.bind(this),
                            [granted[1].topic]: this.topicLancamentoContasErro.bind(this),   
                            [granted[2].topic]: this.topicLancamentoContasIncluido.bind(this),
                            [granted[3].topic]: this.topicLancamentoContasCarregado.bind(this),
                            [granted[4].topic]: this.topicLancamentoContasSaldoCarregado.bind(this)
                          }
                        )
              },
              this.client.publish.bind(this.client, 'financeiro/consulta/posicao/periodo/',JSON.stringify('Carregar lista periodo'))
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
    //console.log('consultaPosicaoPeriodo = ' + this.props.clientId );
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

  topicCadastroContasCarregado(msg) {
    let contas = JSON.parse(msg);
    let conta = Array.isArray(contas) && contas.length ? contas[0] : {
      "_id": "",
      "selecionada": false,
      "banco": "",
      "conta": "",
      "agencia": "",
      "descricao": "",
    };

    this.setState(
      {
        conta: conta,
        contas: contas
      }, 
      conta && this.client.publish.bind(this.client, 'financeiro/lancamento/contas/saldo/carregar/',JSON.stringify('Lancamento') )
    );  
  }

  topicLancamentoContasSaldoCarregado(msg) {
    let saldos = JSON.parse(msg);

    this.setState(
      {
        conta: {
          ...this.state.conta,
          saldo: saldos.find( saldo => saldo._id === this.state.conta._id) || 
          {
            "_id": this.state.conta._id,
            "debito": 0,
            "credito": 0,
            "valor": 0,
            "count": 0
          }
        },

        contas: this.state.contas.map( conta => {
          return({
            ...conta,
            saldo: saldos.find( saldo => saldo._id === conta._id) ||
            {
              "_id": conta._id,
              "debito": 0,
              "credito": 0,
              "valor": 0,
              "count": 0
            }
          })
        }),

      },
      this.showState.bind(this)  
    );
  }

  showState() {
    console.log('------------------> Estado Mudou <-----------------------------\n' + JSON.stringify(this.state, null, 2) + '\n---------------------------------------------------------------\n')
    // exemplo para carregar lancamentos
    //this.client.publish('financeiro/lancamento/contas/carregar/')
  }

  topicLancamentoContasCarregado(msg) {
    alert('alessandro');
  }

  topicLancamentoContasErro(msg) {
    alert('Erro: ' + msg);
  }

  handleIncluir() {
    //console.log(JSON.stringify(this.state, null, 2));

    this.client.publish(
      'financeiro/lancamento/contas/incluir/' + this.props.clientId, 
      JSON.stringify(
        { 
          _id: uuid.v4(),
          conta: this.state.conta._id,
          data: this.state.data,
          cheque: this.state.cheque,
          liquidado: this.state.liquidado,
          operacao: this.state.operacao,
          valor: parseFloat((this.state.valor && this.state.valor.replace(',', '-').replace('.', '').replace('-', '.')) || 0),
          observacao: this.state.observacao,
        }
      )
    )
  }

  topicLancamentoContasIncluido(msg) {
    let lancamento = JSON.parse(msg);

    console.log('Lancamento:\n' + JSON.stringify(lancamento, null, 2))

    let newState = { 
      cheque: '',
      liquidado: false,
      operacao: false,
      valor: '',
      observacao: '',

      conta: {
        ...this.state.conta,

        saldo: {
          ...this.state.conta.saldo,
          valor: this.state.conta.saldo.valor + lancamento.valor
        }

      },

      contas: this.state.contas.map( conta => {
        if (conta._id === this.state.conta._id) {
          return ({
            ...conta,
            saldo: {
              ...conta.saldo,
              valor: conta.saldo.valor + lancamento.valor
            }
          })
        } else {
          return conta;
        }
      })

    }

    console.log('Novo estado:\n' + JSON.stringify(newState, null, 2));

    this.setState(newState)
   //alert('Lancamento feito com sucesso#: ' + msg);
   //this.props.onClose && this.props.onClose();
  }

  console_log(msg) {
    console.log('Modou:' + this.state.liquidado)
  }

  handleCheckboxChange(value) {
    //console.log('Antes: ' + this.state.liquidado)
    this.setState({liquidado: !this.state.liquidado},this.console_log)
    //console.log('Depois: ' + this.state.liquidado)
  }

  handleChangeData(data) {
    //var hiddenInputElement = document.getElementById("DATA");
    //console.log(hiddenInputElement.getAttribute('data-formattedvalue'));
    let isodate = new Date(data);
    let x = (isodate.getHours() * 60 * 60 * 1000) + (isodate.getMinutes() * 60 * 1000) + (isodate.getTimezoneOffset() * 60 * 1000);
    isodate.setTime(isodate.getTime() - x );
    console.log('data: ' + isodate.toISOString())
    this.setState({ 
      data: isodate.toISOString()
    })
  }

  handleContaChange(element) {
    this.setState(
      {
        conta: this.state.contas.find( conta => conta._id === element.target.value )
      },
      this.mostraContaSelecionada
    );
  }

  mostraContaSelecionada() {
    console.log('Conta selecionada: ' + this.state.conta.conta);
  }

  handleConferirData(data) {
  var isodate = data;
  console.log('A conferir Data = ' + isodate);
  this.setState({ 
      data: isodate
    })
  }
  

  handleSearch() {
    console.log(JSON.stringify({
        conta: this.state.conta.conta,
        conferir: this.state.conferir,
        data: this.state.data,
      }));
    this.client.publish(
      'financeiro/lancamento/contas/consultar/',
      JSON.stringify({
        conta: this.state.conta.conta,
        conferir: this.state.conferir,
        data: this.state.data,
      })
    );
  }

  handleConferir(conferir) {
    console.log('A conferir: ' + conferir);
    this.setState({conferir: conferir, labelConferir: conferir ? 'Todos' : 'Á conferir'})
    // enviar dados para fila
    this.client.publish('financeiro/lancamento/contas/consultar/',JSON.stringify(this.state.labelConferir));
  }


  onRowSelect(row, isSelected){
    console.log(row);
    console.log("selected: " + isSelected)
    this.setState({isSelected: isSelected, conta: row})
  }

  render() {

    const selectRowProp = {
      mode: "radio",  //checkbox for multi select, radio for single select.
      clickToSelect: true,   //click row will trigger a selection on that row.
      bgColor: "rgb(255, 200, 20)",   //selected row background color
      onSelect: this.onRowSelect,
    };

    return (
      <Grid>
        <Row>
        
          <Col md={1} />
          <Col md={10} >

            <Panel header={'Posição por periodo'} bsStyle="primary" >

                <Row style={{borderBottom: 'solid', borderBottomWidth: 1, borderBottomColor: '#337ab7', paddingBottom: 20}}>
                  <Col xs={6} md={3} >

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Seleciona a conta</ControlLabel>
                        <FormControl componentClass="select" placeholder="Bancos + Contas" value={this.state.conta ? this.state.conta._id : 0} onChange={this.handleContaChange} >
                        {this.state.contas.map( (c) =>
                          <option key={c._id} value={c._id}>{c.banco + ' ' + c.conta}</option>
                        )}
                        </FormControl>
                      </FormGroup>

                  </Col>
                  <Col xs={6} md={3} >
                      <FormGroup controlId="dataConferir" validationState="success">
                        <ControlLabel>{this.state.labelConferir}</ControlLabel>
                        <FormControl.Static style={{paddingTop: 0}} >
                        <DropdownButton title="Tipo de conferência" id="bg-nested-dropdown">
                          <MenuItem eventKey="1" onClick={this.handleConferir.bind(null, false)}  >Á conferir</MenuItem>
                          <MenuItem eventKey="2" onClick={this.handleConferir.bind(null, true)}   >Todos</MenuItem>
                        </DropdownButton>
                        </FormControl.Static>
                      </FormGroup>
                  </Col>
                  <Col xs={6} md={3} >
                      {this.state.conferir ?
                        <FormGroup controlId="dataConferir" validationState="success">
                          <ControlLabel>Data inicial</ControlLabel>
                          <DatePicker id="dataConferir" ref="dataConferir" dayLabels={BrazilianDayLabels} monthLabels={BrazilianMonthLabels} value={this.state.data} onChange={this.handleChangeData} />
                        </FormGroup>
                      : null }
                  </Col>
                  <Col xs={6} md={3} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Consultar Conta</Tooltip>)}
                    >

                        <Button
                          bsSize="large"
                          onClick={this.handleSearch}
                          style={{width: 140}}
                        >
                          <Glyphicon glyph="search" />
                          <div><span>Pesquisar</span></div>
                        </Button>

                    </OverlayTrigger>


                  </Col>
                </Row>

                <Row style={{paddingTop: 20}} >
                  <Col xs={12} md={1}>CHEQUE</Col>
                  <Col xs={12} md={3}>
                    <FormGroup controlId="CHEQUE" validationState="success">
                     <FormControl type="text" ref="CHEQUE" value={this.state.cheque} onChange={this.handleChange} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={1}>VALOR</Col>
                  <Col xs={12} md={3}>
                    <FormGroup controlId="VALOR" validationState="success">
                     <FormControl type="text" ref="VALOR" value={this.state.valor} onChange={this.handleChange} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={1}>SALDO</Col>
                  <Col xs={12} md={3}>
                    <FormGroup controlId="SALDO" validationState="success">
                      <FormControl type="text" ref="SALDO" value={this.state.saldo} onChange={this.handleChange} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={2}>DESCRIÇÃO</Col>
                  <Col xs={12} md={10}>
                    <FormGroup controlId="DESCRICAO" validationState="success">
                      <FormControl type="text" ref="DESCRICAO" value={this.state.observacao} onChange={this.handleChange} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                </Row>

                {<Row>
                  <Col xs={12} md={12}>
                        <br/> 
                        <BootstrapTable
                          data={this.state.contas}
                          remote={ true }
                          striped={true}
                          hover={true}
                          condensed={true}
                          pagination={false}
                          selectRow={selectRowProp}
                          search={false}>
                          <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" hidden={true}>Product ID</TableHeaderColumn>
                          <TableHeaderColumn dataField="data"                               dataSort={true}>DATA</TableHeaderColumn>
                          <TableHeaderColumn dataField="observaca"        dataAlign="center">DESCRIÇÃO</TableHeaderColumn>
                          <TableHeaderColumn dataField="cheque"           dataAlign="center">CHEQUE</TableHeaderColumn>
                          <TableHeaderColumn dataField="liquidado"        dataAlign="center">LIQ</TableHeaderColumn>
                          <TableHeaderColumn dataField="valor"            dataAlign="center">VALOR</TableHeaderColumn>
                          <TableHeaderColumn dataField="saldo"            dataAlign="center">SALDO</TableHeaderColumn>
                        </BootstrapTable>
                  </Col>
                </Row>}
            </Panel>

          </Col>
          <Col md={1} />

        </Row>
        {this.state.form}
      </Grid>  
    );
  }
}
