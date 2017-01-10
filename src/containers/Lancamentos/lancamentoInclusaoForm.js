
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
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

//import uuid from 'node-uuid';
import { assign, omit } from 'lodash';
import mqtt from 'mqtt/lib/connect';

const clientId = 'lancamento_' + (1 + Math.random() * 4294967295).toString(16);
const BrazilianDayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const BrazilianMonthLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Octubro', 'Novembro', 'Dezembro'];


export default class LancamentoForm extends Component {
  constructor(props) {
    super(props);

    let d = new Date();
    let datetime = d.getFullYear() + "-"
                + ("0" + (d.getMonth()+1)).slice(-2) + "-" 
                + ("0" + (d.getDate())).slice(-2)  + "T"  
                + d.getHours() + ":"  
                + d.getMinutes() + ":00.000Z";
    console.log('data = ' + datetime);

    this.state = { 
      _id:        null,
      conta:      0, // conta selecionada
      data:       datetime,
      cheque:     '',
      liquidado:  false,
      operacao:   '',
      valor:      '',
      observacao: '',
      // campos de controle, nao apagar, nao gravar
      contas:     [],  // lista de contas
      topics:     {}
    }

    this.handleChangeData   = this.handleChangeData.bind(this);
    this.handleChangeCheque = this.handleChangeCheque.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChangeValor  = this.handleChangeValor.bind(this);
    this.handleChangeObs    = this.handleChangeObs.bind(this);

    this.handleError        = this.handleError.bind(this);
    this.handleIncluido     = this.handleIncluido.bind(this);
    this.handleIncluir      = this.handleIncluir.bind(this);
    this.handleSaveOk       = this.handleSaveOk.bind(this);

    this.console_log        = this.console_log.bind(this);
    this.enviar             = this.enviar.bind(this);
    this.handleContaChange  = this.handleContaChange.bind(this);
    this.mostraContaSelecionada = this.mostraContaSelecionada.bind(this);
  }

  carregaListas() {
    // enviar dados para fila
    this.client.publish('financeiro/cadastro/contas/carregar/',JSON.stringify('Carregar lista '));
  }

  componentWillMount() {
    //console.log('Config: ' + JSON.stringify(this.props.config,null,2));

    let opts = {
      host: this.props.config.host, //'192.168.0.174', //'test.mosquitto.org'
      port: this.props.config.port,
      protocol: this.props.config.protocol,
      qos: 0,
      retain: false,
      clean: true,
      keepAlive: 30, 
      clientId: clientId
    }

    this.client = mqtt.connect(opts);

    this.client.on('connect', function() {

      this.client.subscribe(
        ['financeiro/lancamento/contas/erros/'   + clientId, 
        'financeiro/lancamento/contas/carregado/',
        'financeiro/lancamento/contas/incluido/' + clientId], 
         function(err, granted) { 
          !err ? 
            this.setState(
              {
                topics: assign(
                          this.state.topics, 
                          {
                            [granted[0].topic]: this.handleError,   
                            [granted[1].topic]: this.handleIncluido,
                            [granted[2].topic]: this.handleSaveOk
                          }
                        )
              },
              this.carregaLista
            ) 
          : 
            alert('Erro ao se inscrever no topico:' + err);
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

  handleError(msg) {
    alert('Erro: ' + msg);
  }

  handleIncluir() {
    this.setState({ valor: parseFloat((this.state.valor && this.state.valor.replace(',', '-').replace('.', '').replace('-', '.')) || 0)}, this.enviar)
  } 

  enviar(msg){
    //console.log('lancamentoID: ' + clientId + '\nEnviado: \n' + JSON.stringify(omit(this.state, ['topics','contas']), null, 2));
    // enviar dados para fila
    this.client.publish(
            'financeiro/lancamento/contas/incluir/' + clientId, 
            JSON.stringify(omit(this.state, ['topics','contas']))
          );
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
    var isodate = data;
    console.log('datetime = ' + isodate);
    this.setState({ 
      data: isodate
    })
  }

  handleSaveOk(msg) {
   //alert('Lancamento feito com sucesso#: ' + msg);
   this.props.onClose && this.props.onClose();
  }

  handleIncluido(msg) {
    let contas = JSON.parse(msg);
    this.setState({contas: contas, conta: Array.isArray(contas) && contas.length ? contas[0]._id : 0});
    //alert('aqui: ' + msg);
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

  handleChangeValor(event) {
    this.setState({ valor: event.target.value.substring(3) })
  }

  /* <div id="services"> {services}
                        <p id="total">Total <b>R$ {this.state.total.toFixed(2).replace('.', ',')}</b></p>
  </div>

  render: function(){
        return  <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                    {this.props.name} <b>R$ {this.props.price.toFixed(2).replace('.', ',')}</b>
                </p>;
                */

  handleChangeCheque(event) {
    this.setState({ cheque: event.target.value })
  }

  handleChangeObs(event) {
    this.setState({ observacao: event.target.value })
  }

  DataValidationState() {
    const x = this.state.data;
    if ((x!==0)&&(x!==null)&&(x!==undefined)){
        return 'success';
    } else {
        return 'error';
    }
  }
//date regula EXPRESSION /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(201[7-9]|202[0-9])$/;
  ChequeValidationState() {
    var regex = /^\$?[0-9]+((\-[0-9][0-9])|(\-[0-9]))?$/; 
    const length = this.state.cheque.length;
    if ((length===0)){
        return 'warning';
    } else if(regex.test(this.state.cheque)&&(length<20)) {
        return 'success';
    } else {
        return 'error';
    }
  }

  setGender(event) {
    //console.log(event.target.value);
    this.setState({operacao:event.target.value});
  }

  ValorValidationState() {
    var regex = /^[0-9]{1,9}([.]([0-9]{3}))*[,]([.]{0})[0-9]{2}$/;
    const length = this.state.valor.length;
     if (regex.test(this.state.valor)&&(length<20)){
      //console.log('valor = ' + (this.state.observacao));
      return 'success';
    } else {
      return 'error';
    }
  }

  OBSValidationState() {//   /^[0-9]{1,3}([.]([0-9]{3}))*[,]([.]{0})[0-9]{0,2}$/
    var regex = /^\$?[a-zA-Z0-9.ã/õ_%\-\s]*?$/;
    const length = this.state.observacao.length;
     if (regex.test(this.state.observacao)&&(length<30)){
      //console.log('valor = ' + (this.state.observacao));
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
                    <FormGroup controlId="data" validationState={this.DataValidationState()}>
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                      {/*<FormControl.Feedback />*/}
                      <DatePicker id="DATA" ref="data" dayLabels={BrazilianDayLabels} monthLabels={BrazilianMonthLabels} value={this.state.data} onChange={this.handleChangeData} />
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
                    <FormGroup controlId="valor" validationState={this.ValorValidationState()}>
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" ref="valor" value={'R$ ' + this.state.valor} onChange={this.handleChangeValor} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={1}>Operação </Col>
                  <Col xs={12} md={3}>
                    <FormGroup>
                      <div onChange={this.setGender.bind(this)}>
                       <input type="radio" value="credito" name="operacao" style={{margin:5}}/> Credito 

                       <input type="radio" value="debito"  name="operacao" style={{margin:5}}/> Debito 
                      </div>
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
                  <Col xs={12} md={1}>OBS </Col>
                  <Col xs={12} md={7}>
                    <FormGroup controlId="observacao" validationState={this.OBSValidationState()}>
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" ref="observacao" value={this.state.observacao} onChange={this.handleChangeObs} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2} mdOffset={2}>
                        <Button bsStyle="success" onClick={this.handleIncluir} 
                          disabled={
                            (this.ValorValidationState() === 'error')|| 
                            (this.OBSValidationState()   === 'error')||
                            (this.ChequeValidationState()=== 'error')||
                            (this.DataValidationState()  === 'error')||
                            (this.state.operacao === '')
                          }>
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
