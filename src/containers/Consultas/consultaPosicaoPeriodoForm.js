
import React, { Component } from 'react';

import { 
  OverlayTrigger, 
  Button,
  Alert, 
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
  MenuItem,
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import EditarLancamentoForm    from '../../containers/Lancamentos/editarLancamentoForm';
import ExcluirLancamentoForm   from '../../containers/Lancamentos/excluirLancamentoForm';

import { assign, omit } from 'lodash';
import mqtt from 'mqtt/lib/connect';

const lancamentosId = 'mqtt_lan' + (1 + Math.random() * 4294967295).toString(16);
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
      conta:      0,// conta selecionada
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

    this.handleClick    = this.handleClick.bind(this);

    this.handleSave     = this.handleSave.bind(this);
    this.handleSearch   = this.handleSearch.bind(this);

    this.handleError    = this.handleError.bind(this);
    this.handleIncluido = this.handleIncluido.bind(this);
    this.handleSaveOk   = this.handleSaveOk.bind(this);

    this.handleConferir = this.handleConferir.bind(this);
  }

  carregaListas() {
    // enviar dados para fila
    this.client.publish('financeiro/consulta/posicao/periodo/',JSON.stringify('Carregar lista '));
  }

  componentWillMount() {
    console.log('Config : ' + JSON.stringify(this.props.config,null,2));

    let opts = {
      host: this.props.config.host, //'192.168.0.174', //'test.mosquitto.org'
      port: this.props.config.port,
      protocol: this.props.config.protocol,
      qos: 0,
      retain: false,
      clean: true,
      keepAlive: 30, // 30 sec.
      clientId: lancamentosId
    }

    this.client = mqtt.connect(opts);

    this.client.on('connect', function() {

      this.client.subscribe(
        ['financeiro/lancamento/contas/erros/'   + lancamentosId, 
        'financeiro/lancamento/contas/carregado/', 
        'financeiro/lancamento/contas/incluido/' + lancamentosId], 
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
    console.log('Lancamento = ' + lancamentosId );
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

  enviar(msg){
    //console.log('lancamentoID: ' + clientId + '\nEnviado: \n' + JSON.stringify(omit(this.state, ['topics','contas']), null, 2));
    // enviar dados para fila
    this.client.publish(
            'financeiro/consulta/posicao/periodo/' + lancamentosId, 
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

  handleSave(data) {
    //alert(JSON.stringify(this.state, null, 2));
    this.client.subscribe('financeiro/consulta/alterado/' + this.state._id, function(err, granted) {
      if (err) {
        console.log('Erro ao se inscrever no topico: ' + granted[0].topic)
      } else {
        this.setState(
          {topics: assign(this.state.topics, {[granted[0].topic]: this.handleSaveOk})},
          this.client.publish.bind(
            this.client, 
            'financeiro/consulta/alterar/' + this.props.lancamentosId, 
            JSON.stringify(omit(this.state, 'topics'))
          )  
        );
      }
      
    }.bind(this));    
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

  handleConferirData() {
    console.log('A conferir Data');
  }

  handleSearch() {
    console.log('Procurar...');
  }

  handleConferir(conferir) {
    console.log('A conferir: ' + conferir);
    this.setState({conferir: conferir, labelConferir: conferir ? 'Todos' : 'Á conferir'})
  }


  handleClick(e) {
    switch(e) {
      case 'Editar':
        this.setState(
          {
            form: 
              <EditarLancamentoForm 
                clientId={lancamentosId}
                title="Editar Conta cadastrada"
                onClose={this.handleClose.bind(this)} 
                record={this.state.conta}
                config={this.props.config} 
              >
                  <span>Algo deu errado para achar o form EditarContas</span>
              </EditarLancamentoForm> 
          }
        )
        break;
      case 'Delete':
        this.setState(
          {
            form: 
              <ExcluirLancamentoForm 
                clientId={lancamentosId}
                title="Deletar esta Conta ?"
                onClose={this.handleClose.bind(this)} 
                record={this.state.conta} 
                config={this.props.config} 
              >
                  <span>Algo deu errado para achar o form ExcluirContas</span>
              </ExcluirLancamentoForm> 
          }
        )
        break;
      default:
        this.handleClose(this); 
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
                        <FormControl componentClass="select" placeholder="Bancos + Contas" value={this.state.conta} onChange={this.handleContaChange} >
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
                          <DatePicker id="dataConferir" ref="dataConferir" dayLabels={BrazilianDayLabels} monthLabels={BrazilianMonthLabels} value={this.state.emissao} onChange={this.handleConferirData} />
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
             <div><span> <br/> </span></div>
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
