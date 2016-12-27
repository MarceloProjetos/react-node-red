import React, { Component } from 'react';

import { 
  Button, 
  ControlLabel,
  FormGroup,
  FormControl,
  Modal
} from 'react-bootstrap';

import { assign, omit }   from 'lodash';
import mqtt               from 'mqtt/lib/connect';

const clientId = 'ExcluirConta_' + (1 + Math.random() * 429495).toString(16);

export default class NovaContaForm extends Component {
  constructor(props) {
    super(props);

    this.state = omit({...this.props, topics: {}}, 'children');

    this.handleChangeBanco      = this.handleChangeBanco.bind(this);
    this.handleChangeAgencia    = this.handleChangeAgencia.bind(this);
    this.handleChangeConta      = this.handleChangeConta.bind(this);
    this.handleChangeDescricao  = this.handleChangeDescricao.bind(this);

    this.handleError            = this.handleError.bind(this);
    this.handleIncluir          = this.handleIncluir.bind(this);
    this.handleSaveOk           = this.handleSaveOk.bind(this);
  }

  componentWillMount() {

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
        ['financeiro/cadastro/contas/erros/'  + clientId, 
        'financeiro/cadastro/contas/excluido/' + clientId],
         function(err, granted) { 
          !err ? 
            this.setState(
              {
                topics: assign(
                          this.state.record.topics, 
                          {
                            [granted[0].topic]: this.handleError,   
                            [granted[1].topic]: this.handleSaveOk
                          }
                        )
              }
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
  }

  /*componentWillReceiveProps(newProps) {
    this.setState({...newProps});
  }*/

  componentWillUnmount() {
    this.state.topics && Object.keys(this.state.topics).forEach( (topic) =>
      this.client.unsubscribe(topic, function(err) 
        { 
          err && alert('Erro ao retirar a inscrição ao topico: ' + topic)
        }
      )
    )
    this.client.end();
  }

  handleError(msg) {
    alert('Erro: ' + msg);
  }

  handleIncluir() {
    console.log('ClientID: ' + clientId + '\nEnviado: \n' + JSON.stringify(this.state.record, null, 2));
    // enviar dados para fila
    this.client.publish(
      'financeiro/cadastro/contas/excluir/' + clientId, 
      JSON.stringify(omit(this.state.record, 'topics'))
    );
  } 

  handleSaveOk(msg) {
    //alert('Salvo com sucesso#: ' + msg);
    this.props.onClose && this.props.onClose();
  }

  /*handleEdit(value) {
 // value is an ISO String. 
    this.setState({
      [value.target.id]: value.target.value
    });
  }*/

  handleChangeBanco(event) {
    this.setState({ banco: event.target.value })
  }

  handleChangeAgencia(event) {
    this.setState({ agencia: event.target.value })
  }

  handleChangeConta(event) {
    this.setState({ conta: event.target.value })
  }

  handleChangeDescricao(event) {
    this.setState({ descricao: event.target.value })
  }

  BancoValidationState() {
    var regex = /^\s*[A-Za-z]+(?:\s+[A-Za-z0-9]+)*\s*$/;
    const length = this.state.record.banco.length;
    if (regex.test(this.state.record.banco)&&(length>3)&&(length<20)){
      return 'warning';
    } else {
      return 'error';
    }
  }

  AgenciaValidationState() {
    var regex = /^\$?[0-9]+((\-[0-9][0-9])|(\-[0-9]))?$/;
    const length = this.state.record.agencia.length;
    if (regex.test(this.state.record.agencia)&&(length>3)&&(length<20)&&((this.state.record.agencia)!==(this.state.record.conta))){
      return 'warning';
    } else {
      return 'error';
    }
  }

  ContaValidationState() {
    var regex = /^\$?[0-9]+((\-[A-Z0-9][A-Z0-9])|(\-[A-Z0-9]))?$/;
    const length = this.state.record.conta.length;
    if (regex.test(this.state.record.conta)&&(length>3)&&(length<20)){
      //console.log('Chamou' + this.state.record.conta);
      return 'warning';
    } else {
      return 'error';
    }
  }

  DescricaoValidationState() {
    var regex = /^\s*[A-Za-z0-9]+(?:\s+[A-Za-z0-9]+)*\s*$/;
    const length = this.state.record.descricao.length;
    if (regex.test(this.state.record.descricao)&&(length<20)){
      //console.log('valor = ' + (this.state.record.descricao));
      return 'warning';
    } else {
      return 'error';
    }
  }
 
  render() {

    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormGroup controlId="Conta" validationState={this.BancoValidationState()}>
              <ControlLabel>Nome do Banco</ControlLabel>
              <FormControl ref="Banco" type="text" value={this.state.record.banco} onChange={this.handleChangeBanco} placeholder="Digite aqui o nome do Banco"/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="Conta" validationState={this.AgenciaValidationState()}>
              <ControlLabel>Agência</ControlLabel>
              <FormControl ref="Agencia" type="text" value={this.state.record.agencia} onChange={this.handleChangeAgencia} placeholder="Numero da Agência"/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="Conta" validationState={this.ContaValidationState()}>
              <ControlLabel>Conta</ControlLabel>
              <FormControl ref="Conta" type="text" value={this.state.record.conta} onChange={this.handleChangeConta} placeholder="Numero da conta com - para separar o digito"/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="Conta" validationState={this.DescricaoValidationState()}>
              <ControlLabel>Descrição</ControlLabel>
              <FormControl ref="descricao" type="text" value={this.state.record.descricao} onChange={this.handleChangeDescricao} placeholder="Digite aqui uma referencia para essa conta"/>
              <FormControl.Feedback />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose} >Fechar</Button>
            <Button bsStyle="primary" onClick={this.handleIncluir} disabled={(this.BancoValidationState() === 'error') || (this.ContaValidationState() === 'error') || (this.AgenciaValidationState() === 'error')}>Excluir Conta?</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

//numeros somente   /[0-9]*/
//letras somente    /[a-zA-Z\s]*/
//Alfanumerico      /[0-9a-zA-Z\s]*/
//telefone          /^\(?[1-9]\d{2}[\)\-]\s?\d{3}\-\d{4}$/
//URL padrão        /^((http|ftp|https):\/\/w{3}[\d]*.|(http|ftp|https):\/\/|w{3}[\d]*.)([\w\d\._\-#\(\)\[\]\,;:]+@[\w\d\._\-#\(\)\[\]\,;:])?([a-z0-9]+.)*[a-z\-0-9]+.([a-z]{2,3})?[a-z]{2,6}(:[0-9]+)?(\/[\/a-z0-9\._\-,]+)*[a-z0-9\-_\.\s\%]+(\?[a-z0-9=%&\.\-,#]+)?$/
//Email valido      /^([a-zA-Z0-9]+[a-zA-Z0-9._%\-\+]*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$/
