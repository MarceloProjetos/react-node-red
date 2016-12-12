
import React, { Component } from 'react';

import { 
  Button, 
  Glyphicon, 
  Panel, 
  Col, 
  Row, 
  Grid,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Radio
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

//import uuid from 'node-uuid';
import { assign, omit } from 'lodash';
import mqtt from 'mqtt/lib/connect';

const clientId = 'lancamento_' + (1 + Math.random() * 4294967295).toString(16);

export default class LancamentoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      _id: null,
      conta: 0, // conta selecionada
      data: new Date().toISOString(),
      cheque: '',
      liquidado: false,
      valor: '',
      observacao: '',
      // campos de controle, nao apagar, nao gravar
      contas: [],  // lista de contas
      topics: {}
    }

    this.handleChangeData   = this.handleChangeData.bind(this);
    this.handleChangeCheque = this.handleChangeCheque.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChangeValor  = this.handleChangeValor.bind(this);
    this.handleChangeObs    = this.handleChangeObs.bind(this);

    this.handleIncluido     = this.handleIncluido.bind(this);

    this.handleError        = this.handleError.bind(this);
    this.handleSave         = this.handleSave.bind(this);
    this.handleSaveOk       = this.handleSaveOk.bind(this);

    this.console_log        = this.console_log.bind(this);
    this.handleContaChange  = this.handleContaChange.bind(this);
    this.mostraContaSelecionada = this.mostraContaSelecionada.bind(this);
  }

  handleContaChange(element) {
    this.setState({conta: element.target.value}, this.mostraContaSelecionada);
  }

  mostraContaSelecionada() {
    console.log('Conta selecionada: ' + this.state.conta);
  }
  carregaLista() {
    // enviar dados para fila
    this.client.publish('financeiro/lancamento/contas/carregar/',JSON.stringify('Carregar contas '));
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
        ['financeiro/lancamento/contas/erros/'   + clientId, 
        'financeiro/lancamento/contas/carregado/'], 
         function(err, granted) { 
          !err ? 
            this.setState(
              {
                topics: assign(
                          this.state.topics, 
                          {
                            [granted[0].topic]: this.handleError,   
                            [granted[1].topic]: this.handleIncluido
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
      
      this.state.topics[topic] && this.state.topics[topic](message.toString());

    }.bind(this))
    console.log('ClientID lancamento = ' + clientId );
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

  handleIncluir() {
    console.log('lancamentoID: ' + clientId + '\nEnviado: \n' + JSON.stringify(this.state.record, null, 2));
    // enviar dados para fila
    this.client.publish(
      'financeiro/lancamento/socios/alterar/' + clientId, 
      JSON.stringify(omit(this.state.record, 'topics'))
    );
  } 

  handleError(msg) {
    alert('Erro: ' + msg);
  }

  handleSave(data) {
    //alert(JSON.stringify(this.state, null, 2));
    this.client.subscribe('financeiro/lancamento/alterado/' + this.state._id, function(err, granted) {
      if (err) {
        console.log('Erro ao se inscrever no topico: ' + granted[0].topic)
      } else {
        this.setState(
          {topics: assign(this.state.topics, {[granted[0].topic]: this.handleSaveOk})},
          this.client.publish.bind(
            this.client, 
            'financeiro/lancamento/alterar/' + this.props.clientId, 
            JSON.stringify(omit(this.state, 'topics'))
          )  
        );
      }
      
    }.bind(this));    
  }

  handleChangeData(event) {
    this.setState({ data: event.target.value })
  }

  handleSaveOk(msg) {
    alert('Salvo com sucesso: ' + msg);
  }

  handleIncluido(msg) {
    let contas = JSON.parse(msg);
    this.setState({contas: contas, conta: Array.isArray(contas) && contas.length ? msg[0]._id : 0});
    //alert('incluido: ' + msg);
  }

  console_log(msg) {
    console.log('Modou:' + this.state.liquidado)
  }

  handleCheckboxChange(value) {
    console.log('Antes: ' + this.state.liquidado)
    this.setState({liquidado: !this.state.liquidado}, 
      this.console_log)
    console.log('Depois: ' + this.state.liquidado)
  }

  handleChangeValor(event) {
    this.setState({ valor: event.target.value })
  }

  handleChangeCheque(event) {
    this.setState({ cheque: event.target.value })
  }

  handleChangeObs(event) {
    this.setState({ observacao: event.target.value })
  }

  ChequeValidationState() {
    var regex = /^\$?[0-9]+((\-[0-9][0-9])|(\-[0-9]))?$/;
    const length = this.state.cheque.length;
    if ((length===1)||(length===0)){
        return 'warning';
    } else if(regex.test(this.state.cheque)&&(length<20)) {
        return 'success';
    } else {
        return 'error';
    }
  }


  render() {

    return (
      <Grid>
        <Row>
        
          <Col md={1} />
          <Col md={10} >

            <Panel header={'Lançamentos em Conta "INCLUSÃO"'} bsStyle="primary" >

                <Row style={{borderBottom: 'solid', borderBottomWidth: 1, borderBottomColor: '#337ab7', paddingBottom: 20}}>
                  <Col md={6} >
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Seleciona a conta</ControlLabel>
                        <FormControl componentClass="select" placeholder="Bancos + Contas" value={this.state.conta} onChange={this.handleContaChange} >
                        {this.state.contas.map( (c) =>
                          <option key={c._id} value={c._id}>{c.banco + ' ' + c.conta}</option>
                        )}
                        </FormControl>
                      </FormGroup>
                  </Col>
                  <Col md={6} >
                      <FormGroup>
                          <ControlLabel>Saldo Atual</ControlLabel>
                          <FormControl disabled type="text" placeholder="R$124.888,77" />
                      </FormGroup>
                  </Col>
                </Row>

                <Row style={{paddingTop: 20}} >
                  <Col xs={12} md={1}> DATA</Col>
                  <Col xs={12} md={3}> 
                    <FormGroup controlId="data" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                      {/*<FormControl.Feedback />*/}
                      <DatePicker ref="data" value={this.state.data} onChange={this.handleChangeData} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={1}>Cheque</Col>
                  <Col xs={12} md={3}>
                    <FormGroup controlId="cheque" validationState={this.ChequeValidationState()}>
                      <FormControl ref="cheque" type="text" value={this.state.cheque} onChange={this.handleChangeCheque} placeholder="Numero"/>
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2}>
                    <FormGroup controlId="liquidado" validationState="success">
                      <Checkbox validationState="warning" id="liquidado" defaultChecked={this.state.liquidado} onChange={this.handleCheckboxChange} >
                        Liquidado ?
                      </Checkbox>     
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={1}>Valor</Col>
                  <Col xs={12} md={3}>
                    <FormGroup controlId="valor" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" ref="valor" value={this.state.valor} onChange={this.handleChangeValor} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={1}>Operação</Col>
                  <Col xs={12} md={3}>
                    <FormGroup>
                      <Radio inline> Debito   </Radio>  {' '}
                      <Radio inline> Credito  </Radio>  {' '}
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2} mdOffset={2}>
                        <Button
                          bsStyle="danger"
                          onClick={this.props.onClose}
                        >
                          <div><Glyphicon glyph="remove" /><span>    Cancelar</span></div>
                        </Button>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={1}>Observação </Col>
                  <Col xs={12} md={7}>
                    <FormGroup controlId="observacao" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" ref="observacao" value={this.state.observacao} onChange={this.handleChangeObs} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2} mdOffset={2}>
                        <Button
                          bsStyle="success"
                          onClick={this.handleIncluir}
                        >
                          <div><Glyphicon glyph="ok" /><span>  Confirmar</span></div>
                        </Button>
                  </Col>
                </Row>
            </Panel>
          </Col>
          <Col md={1} />
        </Row>
      </Grid>  
    );
  }
}
