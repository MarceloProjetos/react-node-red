React-bootstrap-exemplo
=======================

How to creat one react + react-bootstrap + lodash and library in one clean aplication with creat-react-app

#Structure of Project
![alt tag](https://github.com/MarceloProjetos/react-bootstrap-exemplo/blob/master/images/estrutura.png)

This project is an React page that accesses a "MQTT" server, that accesses the "Node-red". The Node-Red in turn accesses a MongoDB database which stores the records.

#MQTT structure of Topics names
![alt tag](https://github.com/MarceloProjetos/react-bootstrap-exemplo/blob/master/images/create topics.png)

# Install environment

### To setup this project we need to the free softwares below:

| Software | Description |
| -------- | ----------- |
| [Java SE][6]  |If you have not installed, First download and install the most suitable for your system. X64 or i586. |
| [ActiveMQ][2] | MQTT v3.1 support allowing for connections in an IoT environment.  |
| [NodeJS][3]   | Support package npm, is the largest ecosystem of open source libraries in the world. |
| [Node-Red][1] | Node-RED is a tool for wiring together hardware devices, APIs and online services. |
| [MongoDB][5]  | It is a graphical tool for control together hardware devices, online services and others NPM library. |

## 1-Installation NODE-JS and Python

Access the site [NodeJS][3]

Download the latest LTS version, follow with the default installation. In this example I used the "node-v6.9.1-x64"

Now install the **phyton**. In this tutorial I used [python-2.7.10][8]

Wait for the installation and restart the machine to continue.

## 2- Create-react-app installation  

Install it once globally:
```
  -npm install -g create-react-app
```
### Creating an App

To create a new app, run:
```
create-react-app react-bootstrap-exemplo && cd react-bootstrap-exemplo
npm start
```
Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## 3- Adding Bootstrap

Install React Bootstrap and Bootstrap from NPM. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

```
npm install react-bootstrap --save
npm install bootstrap@3 --save
npm install react-bootstrap-date-picker --save
```

Import Bootstrap CSS and optionally Bootstrap theme CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```

Import required React Bootstrap components within ```src/App.js``` file or your custom component files:

```js
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```
Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method.

## 4- Adding mqtt, lodash and node-uuid

MQTT.js is a client library for the [MQTT](http://mqtt.org/) protocol, written
in JavaScript for node.js and the browser.
```
npm install mqtt --save
```
Node-uuid simple, fast generation of [RFC4122](http://www.ietf.org/rfc/rfc4122.txt) UUIDS.
```
npm install node-uuid --save
```
Lodash makes JavaScript easier by taking the hassle out of working with arrays,
numbers, objects, strings, etc.
```
npm install lodash --save
```
## 5-Broker Installation "ActiveMQ" 

Access the site [ActiveMQ][2]
Look for "Downloads" and download the version **"Windows Distribution"**

Unzip the file "apache-activemq-5.14.1-bin.zip" 
In a terminal window enter the following command

    .../apache-activemq-5.14.1/bin/activemq start

If an error occurred, Maybe you don't have installed "JAVA SE". Download and install the [**"Java SE Development Kit"**][6].

For test open a browser **FireFox** or **Chrome** e connect to port 8161 "http://127.0.0.1:8161/admin/"

Password: **admin**   Login: **admin**

Configuring to start ActiveMQ on Windows Boot.

For systems 64 bits in a terminal window, in root permission, enter the following command

    .../apache-activemq-5.13.3/bin/win64/InstallService.bat

For systems 32 bits in a terminal window, in root permission, enter the following command

    .../apache-activemq-5.13.3/bin/win32/InstallService.bat

To verify that it is installed as a service see:

    Control Panel-->Administrative tools-->Services and look for **ActiveMQ**
   
**Delete all of the topics in ActiveMQ on startup:**

Go to configuration file "ACTIVEMQ.XML", open the file for editing on the broker element, add the following attribute: 

    deleteAllMessagesOnStartup="true"
   
This will cause all previous topics & queues, and their pending messages to be deleted from your kaha store when you restart your broker.

In my case...

    <broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"  deleteAllMessagesOnStartup="true">

----

## 5-Node-red

Run the following command in the root directory of your Node-RED install

    npm install -g node-red
    npm install -g bcryptjs

Wait finish installation...

Run the following command in root mode. Of the libraries installation.

    npm install -g node-red-node-mongodb

Run the command prompt **"node-red"**

Open <http://localhost:1880>

To restore a node-red flow with Ctrl-I command or the menu, "Menu > Import > Clipboard".

Below you will find node-red project.

###Financeiro Node-red Flow
 ```sh
[{"id":"b23bd10.de7a0b","type":"subflow","name":"Servidor WEB REACT","info":"","in":[],"out":[]},{"id":"a3ab6acf.2000c8","type":"http response","z":"b23bd10.de7a0b","name":"","x":881.0000152587891,"y":143.11666870117188,"wires":[]},{"id":"11e65a1d.e83876","type":"http in","z":"b23bd10.de7a0b","name":"Index","url":"/","method":"get","swaggerDoc":"","x":130.44437281290675,"y":143.22773064507373,"wires":[["4c07436.fe0f13c"]]},{"id":"4c07436.fe0f13c","type":"file in","z":"b23bd10.de7a0b","name":"index.HTML","filename":"C:/Desenvolvimento/git/React/react-node-red/build/index.html","format":"utf8","x":518.5554885864258,"y":143.3388433456421,"wires":[["3ce3af3c.9ea808"]]},{"id":"3a25735.4a4518c","type":"http response","z":"b23bd10.de7a0b","name":"","x":881.4445012410488,"y":263.78331756591797,"wires":[]},{"id":"da18d01b.8e519","type":"function","z":"b23bd10.de7a0b","name":"Text/CSS","func":"msg.headers = { \"Content-type\" : \"text/css\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":719.9999122619629,"y":263.6721706390381,"wires":[["3a25735.4a4518c"]]},{"id":"7e24d224.54a5c4","type":"comment","z":"b23bd10.de7a0b","name":"HTML","info":"","x":130,"y":107.11664390563965,"wires":[]},{"id":"98f5d2cf.a5c988","type":"comment","z":"b23bd10.de7a0b","name":"CSS folder","info":"","x":140.88881301879883,"y":227.22790336608887,"wires":[]},{"id":"76243f6.c6b924","type":"comment","z":"b23bd10.de7a0b","name":"JAVASCRIPT folder","info":"","x":170.33331298828125,"y":306.67241764068604,"wires":[]},{"id":"d4e1945d.ec4a98","type":"http response","z":"b23bd10.de7a0b","name":"","x":881.4444630940761,"y":344.2277374267578,"wires":[]},{"id":"c39a2a0d.4ba95","type":"http in","z":"b23bd10.de7a0b","name":"Scripts","url":"/static/js/:file","method":"get","swaggerDoc":"","x":130.88882064819336,"y":344.3387993706597,"wires":[["6e2c313c.97ca48"]]},{"id":"1d4f809a.48fec7","type":"comment","z":"b23bd10.de7a0b","name":"media folder","info":"","x":150.11099243164062,"y":393.3388156890869,"wires":[]},{"id":"5158af86.71aa18","type":"http response","z":"b23bd10.de7a0b","name":"","x":880.6666920979824,"y":428.6723403930664,"wires":[]},{"id":"682d47df.55bd4","type":"http in","z":"b23bd10.de7a0b","name":"fonts","url":"/static/media/:file","method":"get","swaggerDoc":"","x":130.1110496520996,"y":428.78340233696827,"wires":[["351d5099.6216d8"]]},{"id":"52f78fab.5dae08","type":"function","z":"b23bd10.de7a0b","name":"webfont","func":"msg.headers = { \"Content-type\" : \"font/opentype\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":721.888843536377,"y":428.5612277984619,"wires":[["5158af86.71aa18"]]},{"id":"3ce3af3c.9ea808","type":"function","z":"b23bd10.de7a0b","name":"Text/HTML","func":"msg.headers = { \"Content-type\" : \"text/html\" }\n\nreturn msg;","outputs":1,"noerr":0,"x":728.8332672119141,"y":143.1378173828125,"wires":[["a3ab6acf.2000c8"]]},{"id":"8b3ce000.49b398","type":"http in","z":"b23bd10.de7a0b","name":"CSS Files","url":"/static/css/:file","method":"get","swaggerDoc":"","x":141.79631423950195,"y":263.4019478691948,"wires":[["6b495010.82be68"]]},{"id":"6b495010.82be68","type":"function","z":"b23bd10.de7a0b","name":"files","func":"msg.filename = 'C:\\\\Desenvolvimento\\\\git\\\\React\\\\react-node-red\\\\build\\\\static\\\\css\\\\' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":374.01855850219727,"y":263.1797799004448,"wires":[["e2b62656.94a61"]]},{"id":"e2b62656.94a61","type":"file in","z":"b23bd10.de7a0b","name":"","filename":"","format":"","x":540.240795135498,"y":263.2909478081597,"wires":[["da18d01b.8e519","d8facc8f.a4aa7"]]},{"id":"6e2c313c.97ca48","type":"function","z":"b23bd10.de7a0b","name":"files","func":"msg.filename = 'C:\\\\Desenvolvimento\\\\git\\\\React\\\\react-node-red\\\\build\\\\static\\\\js\\\\' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":374.01855850219727,"y":345.7353218926323,"wires":[["55be07a5.3f09d"]]},{"id":"351d5099.6216d8","type":"function","z":"b23bd10.de7a0b","name":"files","func":"msg.filename = 'C:\\\\Desenvolvimento\\\\git\\\\React\\\\react-node-red\\\\build\\\\static\\\\media\\\\' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":377.351863861084,"y":428.51302040947803,"wires":[["fca583a6.eab1b8"]]},{"id":"55be07a5.3f09d","type":"file in","z":"b23bd10.de7a0b","name":"","filename":"","format":"","x":540.685245513916,"y":345.1797799004448,"wires":[["5df0a468.0be354","d4e1945d.ec4a98"]]},{"id":"5df0a468.0be354","type":"debug","z":"b23bd10.de7a0b","name":"FIles JS","active":false,"console":"false","complete":"filename","x":720.5741500854492,"y":383.9576100243462,"wires":[]},{"id":"fca583a6.eab1b8","type":"file in","z":"b23bd10.de7a0b","name":"","filename":"","format":"","x":542.907413482666,"y":428.2907418145073,"wires":[["74d8f535.c5be2c","52f78fab.5dae08"]]},{"id":"74d8f535.c5be2c","type":"debug","z":"b23bd10.de7a0b","name":"Fonts Files","active":false,"console":"false","complete":"filename","x":733.7963180541992,"y":473.0685719384087,"wires":[]},{"id":"cb83cbdc.98d99","type":"http response","z":"b23bd10.de7a0b","name":"","x":880.4445470174155,"y":180.67965783013233,"wires":[]},{"id":"b27afdfd.2df808","type":"http in","z":"b23bd10.de7a0b","name":"Bootstrap","url":"/","method":"get","swaggerDoc":"","x":138.8889045715332,"y":180.7907197740342,"wires":[["a49aed00.482d3"]]},{"id":"a49aed00.482d3","type":"file in","z":"b23bd10.de7a0b","name":"boostrap.min","filename":"C:/Desenvolvimento/git/React/react-node-red/build/boostrap.min","format":"utf8","x":517.0000203450522,"y":180.90183247460254,"wires":[["fc92da72.89ec4"]]},{"id":"fc92da72.89ec4","type":"function","z":"b23bd10.de7a0b","name":"Text/CSS","func":"msg.headers = { \"Content-type\" : \"text/css\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":719.0185508728027,"y":180.45741070641407,"wires":[["cb83cbdc.98d99"]]},{"id":"d8facc8f.a4aa7","type":"debug","z":"b23bd10.de7a0b","name":"CSS files","active":false,"console":"false","complete":"true","x":720.9074745178223,"y":308.5130318535698,"wires":[]},{"id":"1f9ea660.4a96c2","type":"comment","z":"b23bd10.de7a0b","name":"Servidor WEB","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":558.4629592895508,"y":90.56844806671143,"wires":[]},{"id":"7682ced4.b2797","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/contas/incluir/#","qos":"0","broker":"8c91fad3.2f359","x":202.36669921875,"y":133.36663818359375,"wires":[["12dfbf40.b03bc9"]]},{"id":"12dfbf40.b03bc9","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":471.36669921875,"y":133.36663818359375,"wires":[["81a78833.86e62","94c7a1b5.60b19"]]},{"id":"572ea40.fe662dc","type":"debug","z":"121c01c2.e652c6","name":"Incluir + ID","active":false,"console":"false","complete":"payload","x":1091.6166381835938,"y":135.11663818359375,"wires":[]},{"id":"83808054.abfb4","type":"mqtt out","z":"121c01c2.e652c6","name":"contas/carregado/","topic":"financeiro/cadastro/contas/carregado/","qos":"0","retain":"","broker":"8c91fad3.2f359","x":1114.0928955078125,"y":500.09503173828125,"wires":[]},{"id":"81a78833.86e62","type":"mqtt out","z":"121c01c2.e652c6","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":697.8959655761719,"y":133.64584350585938,"wires":[]},{"id":"44ae7300.d74534","type":"function","z":"121c01c2.e652c6","name":"mudar 1 socio apenas","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $set: {\n \"parametros.encoder.fator\": 2225\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3166.077621459961,"y":2093.605647087097,"wires":[["f187b2b6.b6a63"]]},{"id":"f187b2b6.b6a63","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"update only one","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3426.077606201172,"y":2094.0056409835815,"wires":[]},{"id":"2ae16da8.2847ea","type":"inject","z":"121c01c2.e652c6","name":"String vazia","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2868.110397338867,"y":2313.4500045776367,"wires":[["be2e0093.f34b"]]},{"id":"c32f3c3c.1db5c","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"consulta","collection":"contas","operation":"find","x":3387.077568054199,"y":2313.805500984192,"wires":[["6ce4b274.6a857c"]]},{"id":"6ce4b274.6a857c","type":"debug","z":"121c01c2.e652c6","name":"resposta do MongoDB","active":true,"console":"false","complete":"payload","x":3671.1886100769043,"y":2313.9166564941406,"wires":[]},{"id":"d3026044.f1e3a","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"APAGAR TODA A COLLECTION cadastroErros","collection":"cadastroErros","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3286.8550872802734,"y":1716.8276720046997,"wires":[]},{"id":"967dd0c8.0294f8","type":"inject","z":"121c01c2.e652c6","name":"LIMPAR coleção cadastroErros","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2929.6086349487305,"y":1717.5547275543213,"wires":[["d3026044.f1e3a"]]},{"id":"ed222d8d.ef127","type":"inject","z":"121c01c2.e652c6","name":"Editar socios","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2868.911159515381,"y":2093.272343635559,"wires":[["44ae7300.d74534"]]},{"id":"f2646d64.451328","type":"function","z":"121c01c2.e652c6","name":"indiceErros +1","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $inc: {\n \"os.produzido\": 1\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3199.2996673583984,"y":2220.3833236694336,"wires":[["3c3923c3.dcd8dc"]]},{"id":"3c3923c3.dcd8dc","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar","collection":"indiceErros","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3397.2996520996094,"y":2220.783317565918,"wires":[]},{"id":"1a69f22c.9b41e6","type":"inject","z":"121c01c2.e652c6","name":"$inc: incrementa","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2876.1332054138184,"y":2220.0500202178955,"wires":[["f2646d64.451328","cdd6978.b585ee8"]]},{"id":"be2e0093.f34b","type":"function","z":"121c01c2.e652c6","name":"Paginação ","func":"msg.limit = 5;\nmsg.skip = 0;\nreturn msg;","outputs":1,"noerr":0,"x":3185.521921157837,"y":2313.8647842407227,"wires":[["c32f3c3c.1db5c"]]},{"id":"e5ec74d.d132f08","type":"comment","z":"121c01c2.e652c6","name":"Paginação e consulta MongoDB","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2904.2997550964355,"y":2277.7166237831116,"wires":[]},{"id":"5db31b3.d297764","type":"inject","z":"121c01c2.e652c6","name":"Criar estrutura cadastroErros","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2919.7440185546875,"y":1960.1333894729614,"wires":[["a2c74153.fb8b48"]]},{"id":"520a8e88.6cd96","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar","collection":"cadastroErros","payonly":true,"upsert":false,"multi":false,"operation":"store","x":3412.101905822754,"y":1960.1842212677002,"wires":[]},{"id":"a2c74153.fb8b48","type":"function","z":"121c01c2.e652c6","name":"collection inicial cadastroErros","func":"msg.payload = {\n\t\"_id\": 1,\n\t\"log_mesagens\": {\n\t}\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3195.1108932495117,"y":1960.289008140564,"wires":[["520a8e88.6cd96"]]},{"id":"94ee7df0.7d2bf","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"consulta","collection":"contas","operation":"find","x":3288.9662761688232,"y":2394.30002784729,"wires":[["e0e75b6.7a79528"]]},{"id":"fdb316d6.40a7f8","type":"function","z":"121c01c2.e652c6","name":"lê apenas uma conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"AplanadoraN3\" }\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"parametros.encoder.fator\": 1 }\n\n// Ler 1 valor\nmsg.limit = 1;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":3076.077346801758,"y":2394.1370582580566,"wires":[["94ee7df0.7d2bf"]]},{"id":"70f73b01.f2ce4c","type":"inject","z":"121c01c2.e652c6","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2856.091257095337,"y":2393.8000087738037,"wires":[["fdb316d6.40a7f8"]]},{"id":"e0e75b6.7a79528","type":"function","z":"121c01c2.e652c6","name":"parse(contas)","func":"msg.payload=msg.payload[0].parametros.encoder.fator;\nreturn msg;","outputs":1,"noerr":0,"x":3462.133092880249,"y":2394.716727256775,"wires":[["1c544383.04b18c"]]},{"id":"1c544383.04b18c","type":"debug","z":"121c01c2.e652c6","name":"ler conta x","active":true,"console":"false","complete":"payload","x":3678.4665126800537,"y":2394.7166080474854,"wires":[]},{"id":"69563f09.b28dc8","type":"comment","z":"121c01c2.e652c6","name":"Lê apenas um valor","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2861.2993087768555,"y":2358.7166681289673,"wires":[]},{"id":"cdd6978.b585ee8","type":"function","z":"121c01c2.e652c6","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3188.633071899414,"y":2255.8276109695435,"wires":[["be2e0093.f34b"]]},{"id":"1d14800b.2f08d","type":"comment","z":"121c01c2.e652c6","name":"Contador Produzidos ++ ","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2881.299247741699,"y":2181.71658039093,"wires":[]},{"id":"d3f89ac0.12fba8","type":"comment","z":"121c01c2.e652c6","name":"Edita apenas 1 registro do banco com $set","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2934.077178955078,"y":2055.0499773025513,"wires":[]},{"id":"c8a29805.b6bb38","type":"comment","z":"121c01c2.e652c6","name":"2- Cria estrutura inicial das coleções","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2914.632743835449,"y":1815.3833141326904,"wires":[]},{"id":"1414b9c2.a6a716","type":"comment","z":"121c01c2.e652c6","name":"1- Apagar Cuidado","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2866.1881713867188,"y":1576.60546875,"wires":[]},{"id":"5016c318.c2149c","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"APAGAR TODA A COLLECTION contas","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3266.299331665039,"y":1668.6054430007935,"wires":[]},{"id":"5c88fdd8.1acdac","type":"inject","z":"121c01c2.e652c6","name":"LIMPAR coleção contas","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2899.9414825439453,"y":1668.5546464920044,"wires":[["5016c318.c2149c"]]},{"id":"ba044038.ba9fa8","type":"inject","z":"121c01c2.e652c6","name":"Criar estrutura indice erros","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2909.266014099121,"y":2009.650092124939,"wires":[["da3d3acc.a2778"]]},{"id":"70911be6.65ec7c","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar","collection":"indiceErros","payonly":true,"upsert":false,"multi":true,"operation":"store","x":3412.1793937683105,"y":2009.1454610824585,"wires":[]},{"id":"da3d3acc.a2778","type":"function","z":"121c01c2.e652c6","name":"collection inicial indice erros","func":"msg.payload = {\n\t\"_id\": \"indice\",\n\t\"indice_mesagens\": 0\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3184.6328887939453,"y":2009.4723234176636,"wires":[["70911be6.65ec7c"]]},{"id":"60ab52aa.e6af4c","type":"inject","z":"121c01c2.e652c6","name":"LIMPAR coleção indice erros","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2919.706802368164,"y":1765.4945611953735,"wires":[["1ee86819.31d6b"]]},{"id":"1ee86819.31d6b","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"APAGAR TODA A COLLECTION indice erros","collection":"indiceErros","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3278.706802368164,"y":1765.161187171936,"wires":[]},{"id":"a6730d6d.bd0b98","type":"comment","z":"121c01c2.e652c6","name":"Consulta MongoDB por string","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":3353.7826614379883,"y":1516.4332475662231,"wires":[]},{"id":"755700d0.fcf13","type":"function","z":"121c01c2.e652c6","name":"Exemplo de consulta","func":"msg.limit = parseInt(msg.req.query.size) || 10;\nmsg.skip = ((parseInt(msg.req.query.page) || 1) - 1) * (parseInt(msg.req.query.page) || 1);\nmsg.payload = {nome: {'$regex' : msg.payload.nome, '$options' : 'i'}}\nreturn msg;","outputs":1,"noerr":0,"x":3331.560478210449,"y":1478.655598640442,"wires":[[]]},{"id":"1f6a9cd.33f20e3","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"APAGAR TODA A COLLECTION socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3265.4047622680664,"y":1620.1571731567383,"wires":[]},{"id":"4d2ced3a.88edfc","type":"inject","z":"121c01c2.e652c6","name":"LIMPAR coleção socios","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2899.0469131469727,"y":1620.1063766479492,"wires":[["1f6a9cd.33f20e3"]]},{"id":"ef2b2f16.3bbfc8","type":"inject","z":"121c01c2.e652c6","name":"Criar estrutura socios","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2898.833351135254,"y":1862.7999954223633,"wires":[["cd7da560.aece"]]},{"id":"47d5b4e3.ef65cc","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"store","x":3410.190948486328,"y":1862.2952146530151,"wires":[]},{"id":"cd7da560.aece","type":"function","z":"121c01c2.e652c6","name":"collection inicial socios","func":"msg.payload = \n{\n\t\"_id\": \"cdd2f034-3ec9-4d8b-a8c4-b67af29ccc39\",\n\t\"selecionada\": false,\n\t\"banco\": \"NOSSA CAIXA\",\n\t\"conta\": \"00100020003-6\",\n\t\"agencia\": 1653,\n\t\"descricao\": \"Primeiro conta\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":3165.199935913086,"y":1862.400001525879,"wires":[["47d5b4e3.ef65cc"]]},{"id":"13703ef7.e05651","type":"function","z":"121c01c2.e652c6","name":"mudar 1 conta apenas","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $set: {\n \"parametros.encoder.fator\": 2225\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3166.5475845336914,"y":2140.9428176879883,"wires":[["799b44a4.371404"]]},{"id":"799b44a4.371404","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"update only one","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3426.5475692749023,"y":2141.3428115844727,"wires":[]},{"id":"e95fff65.de9758","type":"inject","z":"121c01c2.e652c6","name":"Editar Conta","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2869.3811225891113,"y":2140.60951423645,"wires":[["13703ef7.e05651"]]},{"id":"3f2c2d9e.bf3c12","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"consulta","collection":"socios","operation":"find","x":3288.833351135254,"y":2445.585762023926,"wires":[["57d3a69f.ce003"]]},{"id":"a47acbce.6461","type":"function","z":"121c01c2.e652c6","name":"lê apenas um socio","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"AplanadoraN3\" }\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"parametros.encoder.fator\": 1 }\n\n// Ler 1 valor\nmsg.limit = 1;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":3065.9444217681885,"y":2445.4227924346924,"wires":[["3f2c2d9e.bf3c12"]]},{"id":"15471534.58b6d3","type":"inject","z":"121c01c2.e652c6","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2855.9583320617676,"y":2445.0857429504395,"wires":[["a47acbce.6461"]]},{"id":"57d3a69f.ce003","type":"function","z":"121c01c2.e652c6","name":"parse(socios)","func":"msg.payload=msg.payload[0].parametros.encoder.fator;\nreturn msg;","outputs":1,"noerr":0,"x":3462.0001678466797,"y":2446.0024614334106,"wires":[["56e1300f.7bb228"]]},{"id":"56e1300f.7bb228","type":"debug","z":"121c01c2.e652c6","name":"ler socios x","active":true,"console":"false","complete":"payload","x":3678.3335876464844,"y":2446.002342224121,"wires":[]},{"id":"72528bb3.c1a874","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/contas/carregar/","qos":"0","broker":"8c91fad3.2f359","x":197.89435577392578,"y":498.40551948547363,"wires":[["cd6e3d75.575278"]]},{"id":"8da4fba5.386d6","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar conta","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"store","x":1092.5719165802002,"y":193.1055393218994,"wires":[]},{"id":"94c7a1b5.60b19","type":"function","z":"121c01c2.e652c6","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":716.0165100097656,"y":192.16665649414062,"wires":[["b542c4b8.53737"]]},{"id":"b542c4b8.53737","type":"json","z":"121c01c2.e652c6","name":"","x":909.4498596191406,"y":192.64999389648438,"wires":[["8da4fba5.386d6","2a259b4f.f4d534","572ea40.fe662dc"]]},{"id":"e61d95fe.6546e","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/contas/alterar/#","qos":"0","broker":"8c91fad3.2f359","x":199.2332763671875,"y":257.12226486206055,"wires":[["a0758df8.8447b","d5973da7.5f1478"]]},{"id":"a0758df8.8447b","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/alterado/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":473.0110321044922,"y":257.1222724914551,"wires":[["1725919b.594b8e","94c7a1b5.60b19","9c64f448.9ebcb8"]]},{"id":"1725919b.594b8e","type":"mqtt out","z":"121c01c2.e652c6","name":"alterado/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":696.0959053039551,"y":256.95704460144043,"wires":[]},{"id":"dba182aa.a02ac8","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"Carrega lista","collection":"contas","operation":"find","x":695.3887600368926,"y":499.4444565243191,"wires":[["83808054.abfb4","90aaeb73.435fa"]]},{"id":"cd6e3d75.575278","type":"function","z":"121c01c2.e652c6","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"Carregar Lista\";\nreturn msg;","outputs":1,"noerr":0,"x":477.37024688720703,"y":499.57411766052246,"wires":[["dba182aa.a02ac8","c23d7952.229498"]]},{"id":"68bc63a3.f8cbac","type":"comment","z":"121c01c2.e652c6","name":"Adiciona um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":210.57408142089844,"y":92.57408714294434,"wires":[]},{"id":"c3a0c9da.18962","type":"comment","z":"121c01c2.e652c6","name":"Atualiza pagina","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":202.90750122070312,"y":457.4630432128906,"wires":[]},{"id":"2a259b4f.f4d534","type":"function","z":"121c01c2.e652c6","name":"Delay 100ms","func":"setTimeout(function() {\n node.send(msg);\n}, 100);\nreturn null;","outputs":1,"noerr":0,"x":1092.1482543945312,"y":250.35186767578125,"wires":[["4aaad440.6c36a4"]]},{"id":"4aaad440.6c36a4","type":"link out","z":"121c01c2.e652c6","name":"","links":["4b738820.c9a9d","dcfe6c3b.fa345"],"x":1215.1666355133057,"y":250.00003623962402,"wires":[]},{"id":"4b738820.c9a9d","type":"link in","z":"121c01c2.e652c6","name":"Atualiza Registro","links":["4aaad440.6c36a4"],"x":317.610915184021,"y":458.925931930542,"wires":[["cd6e3d75.575278"]]},{"id":"a12fe2ea.d3a968","type":"comment","z":"121c01c2.e652c6","name":"Modifica um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":210.12957000732422,"y":217.01860809326172,"wires":[]},{"id":"5130ad31.cb2094","type":"inject","z":"121c01c2.e652c6","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":254.8123779296875,"y":549.3958740234375,"wires":[["cd6e3d75.575278"]]},{"id":"90aaeb73.435fa","type":"debug","z":"121c01c2.e652c6","name":"Resposta","active":false,"console":"false","complete":"payload","x":1085.1458740234375,"y":551.6806640625,"wires":[]},{"id":"c23d7952.229498","type":"debug","z":"121c01c2.e652c6","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":737.4999389648438,"y":553.3958740234375,"wires":[]},{"id":"449cf7f5.b48cc","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/contas/excluir/#","qos":"0","broker":"8c91fad3.2f359","x":199.01852416992188,"y":345.1852111816406,"wires":[["b7d4e611.3966e","2ee105e4.bef47a"]]},{"id":"b16401c4.b03d6","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"deletar conta","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":1091.573974609375,"y":345.40740966796875,"wires":[]},{"id":"56040e40.12b88","type":"function","z":"121c01c2.e652c6","name":"Indica o ID","func":"msg.payload = {\n\"_id\":msg.payload._id\n}\nreturn msg;","outputs":1,"noerr":0,"x":882.907470703125,"y":345.4074401855469,"wires":[["d1308727.fff16","b16401c4.b03d6","2a259b4f.f4d534"]]},{"id":"d1308727.fff16","type":"debug","z":"121c01c2.e652c6","name":"","active":false,"console":"false","complete":"false","x":1092.1666870117188,"y":408.6481628417969,"wires":[]},{"id":"92e1db7e.f90ca8","type":"mqtt out","z":"121c01c2.e652c6","name":"excluido/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":694.185302734375,"y":385.7963562011719,"wires":[]},{"id":"b7d4e611.3966e","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/excluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":473.4074401855469,"y":345.79632568359375,"wires":[["92e1db7e.f90ca8","c5db1289.67c098","b84d12bd.bff9e"]]},{"id":"c5db1289.67c098","type":"json","z":"121c01c2.e652c6","name":"","x":673.9000244140625,"y":346.1166687011719,"wires":[["56040e40.12b88"]]},{"id":"b84d12bd.bff9e","type":"debug","z":"121c01c2.e652c6","name":"excluido","active":false,"console":"false","complete":"true","x":682.449951171875,"y":440.6166687011719,"wires":[]},{"id":"2ee105e4.bef47a","type":"debug","z":"121c01c2.e652c6","name":"excluir","active":false,"console":"false","complete":"true","x":432.1166687011719,"y":387.1166687011719,"wires":[]},{"id":"d5973da7.5f1478","type":"debug","z":"121c01c2.e652c6","name":"alterar","active":false,"console":"false","complete":"true","x":438.1166687011719,"y":299.1166687011719,"wires":[]},{"id":"9c64f448.9ebcb8","type":"debug","z":"121c01c2.e652c6","name":"alterado","active":false,"console":"false","complete":"true","x":685.11669921875,"y":305.1166687011719,"wires":[]},{"id":"a9575aa5.659298","type":"comment","z":"121c01c2.e652c6","name":"Exclui um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":208.23333740234375,"y":308.23333740234375,"wires":[]},{"id":"dde90833.2d6a5","type":"comment","z":"121c01c2.e652c6","name":"Cadastro de contas","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":667.9074554443359,"y":60.35185432434082,"wires":[]},{"id":"64e6fd81.bd39b4","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/socios/incluir/#","qos":"0","broker":"8c91fad3.2f359","x":1600.1944580078125,"y":150.19444274902344,"wires":[["1272e3b.cf1bc9c"]]},{"id":"1272e3b.cf1bc9c","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1869.1944580078125,"y":150.19444274902344,"wires":[["f73f394e.68b08","1fb482cc.7b152d"]]},{"id":"dea6f52d.a2b64","type":"debug","z":"121c01c2.e652c6","name":"Incluir + ID","active":false,"console":"false","complete":"payload","x":2489.4443969726562,"y":151.94444274902344,"wires":[]},{"id":"3e80a2a4.5db92e","type":"mqtt out","z":"121c01c2.e652c6","name":"socios/carregado/","topic":"financeiro/cadastro/socios/carregado/","qos":"0","retain":"","broker":"8c91fad3.2f359","x":2467.920669555664,"y":515.9228191375732,"wires":[]},{"id":"f73f394e.68b08","type":"mqtt out","z":"121c01c2.e652c6","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":2095.7237243652344,"y":150.47364807128906,"wires":[]},{"id":"b2c20be.dc3d378","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/socios/carregar/","qos":"0","broker":"8c91fad3.2f359","x":1595.7221145629883,"y":515.2333240509033,"wires":[["2d6aeff.00b869"]]},{"id":"7978779f.43c71","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"store","x":2490.3996753692627,"y":209.9333438873291,"wires":[]},{"id":"1fb482cc.7b152d","type":"function","z":"121c01c2.e652c6","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":2113.844268798828,"y":208.9944610595703,"wires":[["98a9a2ec.45a65"]]},{"id":"98a9a2ec.45a65","type":"json","z":"121c01c2.e652c6","name":"","x":2307.277618408203,"y":209.47779846191406,"wires":[["7978779f.43c71","e3c8c15b.8cc49","dea6f52d.a2b64"]]},{"id":"e1adc2a3.557e5","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/socios/alterar/#","qos":"0","broker":"8c91fad3.2f359","x":1597.06103515625,"y":273.95006942749023,"wires":[["cf031776.5bee68","11479a12.298b16"]]},{"id":"cf031776.5bee68","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/alterado/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1870.8387908935547,"y":273.95007705688477,"wires":[["5980e7d9.2a277","1fb482cc.7b152d","e01bf3b2.295d5"]]},{"id":"5980e7d9.2a277","type":"mqtt out","z":"121c01c2.e652c6","name":"alterado/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":2093.9236640930176,"y":273.7848491668701,"wires":[]},{"id":"c812e925.d8f1c","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"Carrega lista","collection":"socios","operation":"find","x":2093.216518825955,"y":516.2722610897488,"wires":[["3e80a2a4.5db92e","e1c6dce8.7e09a8"]]},{"id":"2d6aeff.00b869","type":"function","z":"121c01c2.e652c6","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"carregar\";\nreturn msg;","outputs":1,"noerr":0,"x":1875.1980056762695,"y":516.4019222259521,"wires":[["c812e925.d8f1c","319e0079.6d6e28"]]},{"id":"a6b8aacc.1ab5a8","type":"comment","z":"121c01c2.e652c6","name":"Adiciona um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1608.401840209961,"y":109.40189170837402,"wires":[]},{"id":"26a05c24.405b6c","type":"comment","z":"121c01c2.e652c6","name":"Atualiza pagina","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1600.7352600097656,"y":474.2908477783203,"wires":[]},{"id":"e3c8c15b.8cc49","type":"function","z":"121c01c2.e652c6","name":"Delay 100ms","func":"setTimeout(function() {\n node.send(msg);\n}, 100);\nreturn null;","outputs":1,"noerr":0,"x":2489.9760131835938,"y":267.17967224121094,"wires":[["6c6ce5de.0139fc"]]},{"id":"6c6ce5de.0139fc","type":"link out","z":"121c01c2.e652c6","name":"","links":["bc73b51d.628158"],"x":2612.994394302368,"y":266.8278408050537,"wires":[]},{"id":"bc73b51d.628158","type":"link in","z":"121c01c2.e652c6","name":"Atualiza Registro","links":["6c6ce5de.0139fc"],"x":1715.4386739730835,"y":475.7537364959717,"wires":[["2d6aeff.00b869"]]},{"id":"621357d8.437508","type":"comment","z":"121c01c2.e652c6","name":"Modifica um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1607.9573287963867,"y":233.8464126586914,"wires":[]},{"id":"4fa1553b.97efd4","type":"inject","z":"121c01c2.e652c6","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":1652.64013671875,"y":566.2236785888672,"wires":[["2d6aeff.00b869"]]},{"id":"e1c6dce8.7e09a8","type":"debug","z":"121c01c2.e652c6","name":"Resposta","active":false,"console":"false","complete":"payload","x":2344.9736328125,"y":569.5084381103516,"wires":[]},{"id":"319e0079.6d6e28","type":"debug","z":"121c01c2.e652c6","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":2135.3276977539062,"y":570.2236785888672,"wires":[]},{"id":"7b152133.7e8ea8","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/cadastro/socios/excluir/#","qos":"0","broker":"8c91fad3.2f359","x":1596.8462829589844,"y":362.0130157470703,"wires":[["e1005eb6.43d1b","cd6ff687.ee8388"]]},{"id":"1676f549.bc7183","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"deletar socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":2499.4017333984375,"y":362.23521423339844,"wires":[]},{"id":"ea55e7f.2f7a518","type":"function","z":"121c01c2.e652c6","name":"Indica o ID","func":"msg.payload = {\n\"_id\":msg.payload._id\n}\nreturn msg;","outputs":1,"noerr":0,"x":2279.7352294921875,"y":362.23524475097656,"wires":[["94441998.48ce5","1676f549.bc7183","e3c8c15b.8cc49"]]},{"id":"94441998.48ce5","type":"debug","z":"121c01c2.e652c6","name":"","active":false,"console":"false","complete":"false","x":2489.9944458007812,"y":425.47596740722656,"wires":[]},{"id":"c05de49b.fa5f38","type":"mqtt out","z":"121c01c2.e652c6","name":"excluido/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":2092.0130615234375,"y":402.62416076660156,"wires":[]},{"id":"e1005eb6.43d1b","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/excluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1871.2351989746094,"y":362.62413024902344,"wires":[["c05de49b.fa5f38","502cf671.191ac8","d3494baf.6aca78"]]},{"id":"502cf671.191ac8","type":"json","z":"121c01c2.e652c6","name":"","x":2071.727783203125,"y":362.94447326660156,"wires":[["ea55e7f.2f7a518"]]},{"id":"d3494baf.6aca78","type":"debug","z":"121c01c2.e652c6","name":"excluido","active":false,"console":"false","complete":"true","x":2080.2777099609375,"y":457.44447326660156,"wires":[]},{"id":"cd6ff687.ee8388","type":"debug","z":"121c01c2.e652c6","name":"excluir","active":false,"console":"false","complete":"true","x":1829.9444274902344,"y":403.94447326660156,"wires":[]},{"id":"11479a12.298b16","type":"debug","z":"121c01c2.e652c6","name":"alterar","active":false,"console":"false","complete":"true","x":1835.9444274902344,"y":315.94447326660156,"wires":[]},{"id":"e01bf3b2.295d5","type":"debug","z":"121c01c2.e652c6","name":"alterado","active":false,"console":"false","complete":"true","x":2082.9444580078125,"y":321.94447326660156,"wires":[]},{"id":"9dc73b0.cdd6548","type":"comment","z":"121c01c2.e652c6","name":"Exclui um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1606.0610961914062,"y":325.06114196777344,"wires":[]},{"id":"40438741.40bc9","type":"comment","z":"121c01c2.e652c6","name":"Cadastro de Socios","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":2065.7352142333984,"y":79.17965888977051,"wires":[]},{"id":"bf06be52.b64e1","type":"subflow:b23bd10.de7a0b","z":"121c01c2.e652c6","name":"","x":155.44998168945312,"y":639.316650390625,"wires":[]},{"id":"ebfbd6bc.087cb","type":"mqtt out","z":"121c01c2.e652c6","name":"contas/carregado/","topic":"financeiro/lancamento/contas/carregado/","qos":"0","retain":"","broker":"8c91fad3.2f359","x":1126.1985397338867,"y":837.2083129882812,"wires":[]},{"id":"283a9a62.44962e","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/lancamento/contas/carregar/","qos":"0","broker":"8c91fad3.2f359","x":191.25,"y":834.518798828125,"wires":[["7f94abc8.20b4cc"]]},{"id":"d10b9ad4.0d6fb8","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"Carrega lista","collection":"contas","operation":"find","x":709.4944042629668,"y":834.5577377743191,"wires":[["ebfbd6bc.087cb","eda7f79.3e65288"]]},{"id":"79dbed50.33ba24","type":"comment","z":"121c01c2.e652c6","name":"Atualiza pagina","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":186.26314544677734,"y":793.576322555542,"wires":[]},{"id":"dcfe6c3b.fa345","type":"link in","z":"121c01c2.e652c6","name":"Atualiza Registro","links":["4aaad440.6c36a4"],"x":323.7165594100952,"y":793.039213180542,"wires":[["7f94abc8.20b4cc"]]},{"id":"a6550f4.fe2697","type":"inject","z":"121c01c2.e652c6","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":257.1680221557617,"y":885.5091533660889,"wires":[["7f94abc8.20b4cc"]]},{"id":"eda7f79.3e65288","type":"debug","z":"121c01c2.e652c6","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":1128.2515182495117,"y":888.7939453125,"wires":[]},{"id":"8f0ae058.1491e8","type":"debug","z":"121c01c2.e652c6","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":750.605583190918,"y":888.5091552734375,"wires":[]},{"id":"c577d77f.03bda8","type":"comment","z":"121c01c2.e652c6","name":"Lancamentos de contas","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":726.3958740234375,"y":751.3958129882812,"wires":[]},{"id":"7f94abc8.20b4cc","type":"function","z":"121c01c2.e652c6","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = \"Carregar contas\"\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"banco\": 1, \"conta\": 1 }\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":467.3958435058594,"y":834.833251953125,"wires":[["8f0ae058.1491e8","d10b9ad4.0d6fb8"]]},{"id":"ee60ddb8.9eca9","type":"function","z":"121c01c2.e652c6","name":"Maior que $gt","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {idade:{$gt:20}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3065.1167221069336,"y":2537.8001260757446,"wires":[["74290ec0.159b88"]]},{"id":"e123109c.4463c","type":"inject","z":"121c01c2.e652c6","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2846.8888931274414,"y":2537.4759073257446,"wires":[["ee60ddb8.9eca9"]]},{"id":"7de2f265.830e7c","type":"debug","z":"121c01c2.e652c6","name":"Resposta test","active":true,"console":"false","complete":"payload","x":3679.9724349975586,"y":2538.760941505432,"wires":[]},{"id":"74290ec0.159b88","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"","collection":"test","operation":"find","x":3438.4499740600586,"y":2538.316849708557,"wires":[["7de2f265.830e7c"]]},{"id":"dafb9dc0.846d28","type":"function","z":"121c01c2.e652c6","name":"Diferente de $ne","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {banco:{$ne:\"ALTAMIRA\"}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3065.227867126465,"y":2602.2500772476196,"wires":[["8ef7e1e3.a463f8"]]},{"id":"c47e9163.2a46b8","type":"inject","z":"121c01c2.e652c6","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2847.0000381469727,"y":2601.9258584976196,"wires":[["dafb9dc0.846d28"]]},{"id":"b6158373.ec401","type":"function","z":"121c01c2.e652c6","name":"Buscar o que estão numa lista $in","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {agencia:{$in:[\"234566\",\"555555\"]}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3123.783348083496,"y":2658.2500772476196,"wires":[["8ef7e1e3.a463f8"]]},{"id":"58946c57.d6d12c","type":"inject","z":"121c01c2.e652c6","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2845.555503845215,"y":2657.9258584976196,"wires":[["b6158373.ec401"]]},{"id":"8ef7e1e3.a463f8","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"","collection":"contas","operation":"count","x":3449.56111907959,"y":2601.7669229507446,"wires":[["17764780.147871"]]},{"id":"17764780.147871","type":"debug","z":"121c01c2.e652c6","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":3690.0835189819336,"y":2601.210892677307,"wires":[]},{"id":"d5d25552.ba444","type":"function","z":"121c01c2.e652c6","name":"Buscar não esta numa lista $nin","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {agencia:{$nin:[\"234566\",\"555555\"]}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3113.227867126465,"y":2708.2500772476196,"wires":[["8ef7e1e3.a463f8"]]},{"id":"33d317d6.956088","type":"inject","z":"121c01c2.e652c6","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2846.0000076293945,"y":2706.9257974624634,"wires":[["d5d25552.ba444"]]},{"id":"fcc0f661.0a9e98","type":"function","z":"121c01c2.e652c6","name":"update valor","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload =  {$set: {\n        \"nome\": \"maria 1\",\n        \"idade\": 123466\n    }}\n\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3052.783348083496,"y":2768.2500162124634,"wires":[["fc066e12.5054d","44e0b182.ddf208"]]},{"id":"f6049714.9fcec8","type":"inject","z":"121c01c2.e652c6","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2849.783363342285,"y":2767.2500162124634,"wires":[["fcc0f661.0a9e98"]]},{"id":"59b83600.179eac","type":"debug","z":"121c01c2.e652c6","name":"Resposta update test","active":true,"console":"false","complete":"payload","x":3884.783348083496,"y":2767.2500772476196,"wires":[]},{"id":"fc066e12.5054d","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"update idade","collection":"test","payonly":false,"upsert":true,"multi":false,"operation":"update","x":3402.4499740600586,"y":2768.3833169937134,"wires":[]},{"id":"44e0b182.ddf208","type":"function","z":"121c01c2.e652c6","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3401.783348083496,"y":2824.8999185562134,"wires":[["f7753897.f9e09"]]},{"id":"f7753897.f9e09","type":"function","z":"121c01c2.e652c6","name":"lê banco e conta","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"Carregar test\";\nreturn msg;","outputs":1,"noerr":0,"x":3593.783348083496,"y":2824.9499673843384,"wires":[["f319cdd8.d0683"]]},{"id":"f319cdd8.d0683","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"test.find()","collection":"test","operation":"find","x":3613.4500045776367,"y":2767.0832681655884,"wires":[["59b83600.179eac"]]},{"id":"c7a41b1c.5e6578","type":"comment","z":"121c01c2.e652c6","name":"Dinheiro","info":"    function formatoReal($valor) {\n\t\t$valor = (string)$valor;\n\t\t$regra = \"/^[0-9]{1,3}([.]([0-9]{3}))*[,]([.]{0})[0-9]{0,2}$/\";\n\t\tif(preg_match($regra,$valor)) {\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n \n\nRetorna TRUE se seguir o padrão (brasileiro) e falso caso contrário.\n\n \n\necho formatoReal('9'); //false\n\necho formatoReal('99'); //false\n\necho formatoReal('999'); //false\n\necho formatoReal('9,99'); //true\n\necho formatoReal('99,99'); //true\n\necho formatoReal('99,999'); //false\n\necho formatoReal('9.999'); //false\n\necho formatoReal('9999,99'); //false\n\necho formatoReal('99.,.99'); //false\n\necho formatoReal('99,.99'); //false\n\necho formatoReal('999.999.999,99'); //true","x":1148.5277099609375,"y":683.5277709960938,"wires":[]},{"id":"1d5c7260.b38a3e","type":"mqtt in","z":"121c01c2.e652c6","name":"","topic":"financeiro/lancamento/contas/incluir/#","qos":"0","broker":"8c91fad3.2f359","x":186.11666870117188,"y":997.9666748046875,"wires":[["52cfddaf.aa82c4"]]},{"id":"4118e09a.c8827","type":"debug","z":"121c01c2.e652c6","name":"lancamento conta","active":true,"console":"false","complete":"payload","x":900.4500732421875,"y":1136.0335083007812,"wires":[]},{"id":"52cfddaf.aa82c4","type":"function","z":"121c01c2.e652c6","name":"Recupera topico ID","func":"node.status({fill:\"blue\",shape:\"ring\",text:\"incluido/\" + msg.topic.split('/')[msg.topic.split('/').length - 1]});\nreturn [\n    {\n        id: msg.id,\n        topic: 'financeiro/lancamento/contas/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n    \n];","outputs":"1","noerr":0,"x":474.1166687011719,"y":997.9666748046875,"wires":[["7b713fe2.cba5b","b5cf3dc6.559a68"]]},{"id":"7b713fe2.cba5b","type":"mqtt out","z":"121c01c2.e652c6","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"8c91fad3.2f359","x":709.6459350585938,"y":998.2458801269531,"wires":[]},{"id":"b5cf3dc6.559a68","type":"json","z":"121c01c2.e652c6","name":"","x":685.11669921875,"y":1063.6668090820312,"wires":[["4118e09a.c8827","6931c37b.53711c"]]},{"id":"8a0867a5.e61c1","type":"mongodb out","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"salvar lancamentos","collection":"lancamentos","payonly":true,"upsert":false,"multi":false,"operation":"store","x":1358.11669921875,"y":1062.966796875,"wires":[]},{"id":"9b552591.3f5a8","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"Carrega valores","collection":"lancamentos","operation":"aggregate","x":533.11669921875,"y":1218.7166137695312,"wires":[["38b63be5.8c67cc","a74ffe7a.194068","615f494a.901c68","b4677316.857b58","8faeb0ae.7e08"]]},{"id":"44426ea3.b8c59","type":"debug","z":"121c01c2.e652c6","name":"total","active":true,"console":"false","complete":"payload","x":929.449951171875,"y":1318.6499633789062,"wires":[]},{"id":"738f6b30.3a36b4","type":"function","z":"121c01c2.e652c6","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = [\n     {\n       $group:\n         {\n           _id: \"total\",\n           debito:{ $sum: \"$debito\" },\n           credito:{ $sum: \"$credito\" },\n           totalAmount: { $sum: \"$valor\" },\n           count: { $sum: 1 }\n         }\n     }]\n\nreturn msg;","outputs":1,"noerr":0,"x":324.1166687011719,"y":1219.0165405273438,"wires":[["9b552591.3f5a8"]]},{"id":"2a4376a.72cef8a","type":"inject","z":"121c01c2.e652c6","name":"Totais","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":145,"y":1219.0166625976562,"wires":[["738f6b30.3a36b4"]]},{"id":"38b63be5.8c67cc","type":"function","z":"121c01c2.e652c6","name":"Valor total","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload[0].totalAmount).toFixed(2);\n    msg.payload = 'R$ ' + x.toString().replace('.', ',');\n}\nelse{\n    msg.payload = \"0,00\";\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":747.11669921875,"y":1319.0667114257812,"wires":[["44426ea3.b8c59"]]},{"id":"6931c37b.53711c","type":"switch","z":"121c01c2.e652c6","name":"deb / cred","property":"payload.operacao","propertyType":"msg","rules":[{"t":"eq","v":"credito","vt":"str"},{"t":"eq","v":"debito","vt":"str"}],"checkall":"true","outputs":2,"x":871.449951171875,"y":1063.3501586914062,"wires":[["1b35b6e7.ea4729"],["56847c2d.a21c7c"]]},{"id":"1b35b6e7.ea4729","type":"function","z":"121c01c2.e652c6","name":"Coloca valor em Credito","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = msg.payload.valor;\n    msg.payload.debito= 0.00;\n    msg.payload.credito= x;\n}\nelse{\n    msg.payload.debito= 0.00;\n    msg.payload.credito= 0.00;\n}\nreturn msg;","outputs":1,"noerr":0,"x":1100.933349609375,"y":1041.6668701171875,"wires":[["8a0867a5.e61c1"]]},{"id":"56847c2d.a21c7c","type":"function","z":"121c01c2.e652c6","name":"Coloca valor em Debito","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = msg.payload.valor;\n    msg.payload.debito  = x;\n    msg.payload.credito = 0.00;\n}\nelse{\n    msg.payload.debito  = 0.00;\n    msg.payload.credito = 0.00;\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1099.933349609375,"y":1084.666748046875,"wires":[["8a0867a5.e61c1"]]},{"id":"a74ffe7a.194068","type":"function","z":"121c01c2.e652c6","name":"Debitos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload[0].debito).toFixed(2);\n    let y = 'R$ ' + x.toString().replace('.', ',');\n    msg.payload = y;\n    node.status({fill:\"red\",shape:\"ring\",text:y});\n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":745.11669921875,"y":1219.4168090820312,"wires":[["f7a8d502.a5395"]]},{"id":"615f494a.901c68","type":"function","z":"121c01c2.e652c6","name":"Creditos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload[0].credito).toFixed(2);\n    let y = 'R$ ' + x.toString().replace('.', ',');\n    msg.payload = y\n    node.status({fill:\"green\",shape:\"ring\",text:y});\n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n    \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":746.11669921875,"y":1271.4168090820312,"wires":[["149ffa6.3ff0306"]]},{"id":"f7a8d502.a5395","type":"debug","z":"121c01c2.e652c6","name":"debito","active":true,"console":"false","complete":"payload","x":930.11669921875,"y":1219.4168090820312,"wires":[]},{"id":"149ffa6.3ff0306","type":"debug","z":"121c01c2.e652c6","name":"credito","active":true,"console":"false","complete":"payload","x":930.11669921875,"y":1271.4168090820312,"wires":[]},{"id":"89a8d2d9.cd25f","type":"debug","z":"121c01c2.e652c6","name":"saldo","active":true,"console":"false","complete":"payload","x":931.11669921875,"y":1369.416748046875,"wires":[]},{"id":"b4677316.857b58","type":"function","z":"121c01c2.e652c6","name":"Saldo","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload[0].debito);\n    let y = parseFloat(msg.payload[0].credito);\n    let z = (y - x).toFixed(2);\n    node.status({fill:\"yellow\",shape:\"ring\",text:z});\n    msg.payload = 'R$ ' + z.toString().replace('.', ',');\n    \n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":738.783447265625,"y":1369.83349609375,"wires":[["89a8d2d9.cd25f"]]},{"id":"8faeb0ae.7e08","type":"function","z":"121c01c2.e652c6","name":"Numero de lancamentos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseInt(msg.payload[0].count);\n    node.status({fill:\"yellow\",shape:\"ring\",text:x});\n    msg.payload = x;\n}\nelse{\n    msg.payload = 0;\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":799.11669921875,"y":1426.416748046875,"wires":[["5400cb71.86e4ac"]]},{"id":"5400cb71.86e4ac","type":"debug","z":"121c01c2.e652c6","name":"Numero de lancamentos","active":true,"console":"false","complete":"payload","x":1050.449951171875,"y":1426.0000610351562,"wires":[]},{"id":"8b0745c.0e78f38","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"Carrega lancamentos","collection":"lancamentos","operation":"find","x":644.1167221069336,"y":1552.5333213806152,"wires":[["1505c5b2.84be52"]]},{"id":"2d3b725e.075be6","type":"function","z":"121c01c2.e652c6","name":"lê lancamento","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = \"Carrega Lancamento\"\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"conta\": 1, \"data\": 1, \"cheque\":1, \"liquidado\":1, \"operacao\":1, \"valor\":1, \"observacao\":1}\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":406.0181613498262,"y":1552.808774524265,"wires":[["8b0745c.0e78f38"]]},{"id":"d40e045d.9a04e8","type":"inject","z":"121c01c2.e652c6","name":"Lê 20 até lancamentos","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":192.11669158935547,"y":1552.7833213806152,"wires":[["2d3b725e.075be6"]]},{"id":"1505c5b2.84be52","type":"debug","z":"121c01c2.e652c6","name":"lancamentos contas","active":true,"console":"false","complete":"payload","x":882.1167221069336,"y":1552.783260345459,"wires":[]},{"id":"4a41896.58654f8","type":"inject","z":"121c01c2.e652c6","name":"conta pelo ID","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":182.11669158935547,"y":1669.5831871032715,"wires":[["376876e9.881e22"]]},{"id":"376876e9.881e22","type":"function","z":"121c01c2.e652c6","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"9280aff5-619b-4e87-a82a-f31da6347a8d\"}\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"banco\": 1, \"conta\": 1 }\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":408.3445129394531,"y":1669.9072856903076,"wires":[["8a2647dc.23e85"]]},{"id":"8a2647dc.23e85","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"1ba03f37.e3ec11","name":"Carrega conta pelo ID","collection":"contas","operation":"find","x":680.4430736965605,"y":1669.6317715115017,"wires":[["ea427a81.10e92","7442120.5e6c47"]]},{"id":"ea427a81.10e92","type":"debug","z":"121c01c2.e652c6","name":"resposta do mongo","active":false,"console":"false","complete":"payload","x":940.2208557128906,"y":1714.5832290649414,"wires":[]},{"id":"b174ceb8.c28218","type":"debug","z":"121c01c2.e652c6","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":1208.8668518066406,"y":1669.868019104004,"wires":[]},{"id":"7442120.5e6c47","type":"function","z":"121c01c2.e652c6","name":"Numero de lancamentos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = msg.payload[0].banco;\n    let y = msg.payload[0].conta;\n    node.status({fill:\"yellow\",shape:\"ring\",text:x + \" - \" + y});\n    msg.payload = (x + \" - \" + y);\n}\nelse{\n    msg.payload = 0;\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":961.7833557128906,"y":1669.6498794555664,"wires":[["b174ceb8.c28218"]]},{"id":"31c90732.29a97","type":"http in","z":"121c01c2.e652c6","name":"lancamentos","url":"/api/lancamentos","method":"get","swaggerDoc":"","x":157.11666870117188,"y":1901.7667236328125,"wires":[["11699f20.b688c1"]]},{"id":"1af0ac93.3b42cb","type":"http response","z":"121c01c2.e652c6","name":"","x":1257.1166687011719,"y":1936.7667236328125,"wires":[]},{"id":"11699f20.b688c1","type":"function","z":"121c01c2.e652c6","name":"filtro","func":"\n//msg.payload = \"SELECT RCB.*, RCB_PED.numero AS pedido FROM RCB LEFT OUTER JOIN RCB_PED ON RCB.nosso_numero = RCB_PED.nosso_numero\"; \nmsg.payload = '';\nmsg.limit= 5;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":337.1166687011719,"y":1901.7667236328125,"wires":[["71240174.f985f"]]},{"id":"ae4f60c8.2b6f","type":"function","z":"121c01c2.e652c6","name":"conta","func":"\nmsg.payload = { \"_id\": msg.payload.conta }\nmsg.limit = 100;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":1257.1166687011719,"y":1890.7667236328125,"wires":[["6ad3ef6.7e9df9"]]},{"id":"2d365a0d.a5b4ce","type":"function","z":"121c01c2.e652c6","name":"lancamentos","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    msg.lancamentos = msg.payload;\n    return [msg, null];\n} else {\n    return [null, msg];\n}","outputs":"2","noerr":0,"x":757.1166687011719,"y":1901.7667236328125,"wires":[["e2fac1b8.6c0388"],["488ced60.443d0c"]]},{"id":"e2fac1b8.6c0388","type":"function","z":"121c01c2.e652c6","name":"loop","func":"if (msg.index === undefined) {\n    msg.index = 0;\n    msg.payload = msg.lancamentos[msg.index];\n    return [msg, null];\n} else {\n    msg.index++;\n    if (msg.index < msg.lancamentos.length) {\n        msg.payload = msg.lancamentos[msg.index];    \n        return [msg, null]\n    }\n    msg.payload = msg.lancamentos;\n    return [null, msg];\n}\n","outputs":"2","noerr":0,"x":1077.1166687011719,"y":1896.7667236328125,"wires":[["ae4f60c8.2b6f"],["1af0ac93.3b42cb","cd266ff2.45ef9"]]},{"id":"b0bed370.78d668","type":"function","z":"121c01c2.e652c6","name":"result","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    msg.lancamentos[msg.index].conta = msg.payload[0];    \n} else {\n    msg.lancamentos[msg.index].conta = {\n        \"_id\": \"00000000-0000-0000-0000-0000000000\",\n        \"selecionada\": false,\n        \"banco\": \"????????\",\n        \"conta\": \"?????\",\n        \"agencia\": \"????????\",\n        \"descricao\": \"???????????????\"\n    }\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"x":1257.1166687011719,"y":2016.7667236328125,"wires":[["e2fac1b8.6c0388"]]},{"id":"71240174.f985f","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"dfe58791.39f02","name":"lancamentos","collection":"lancamentos","operation":"find","x":537.1166687011719,"y":1901.7667236328125,"wires":[["2d365a0d.a5b4ce","507d71f9.7a6b6"]]},{"id":"6ad3ef6.7e9df9","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"dfe58791.39f02","name":"contas","collection":"contas","operation":"find","x":1417.1166687011719,"y":1890.7667236328125,"wires":[["b0bed370.78d668","365127bf.e1c868"]]},{"id":"cd266ff2.45ef9","type":"debug","z":"121c01c2.e652c6","name":"","active":false,"console":"false","complete":"false","x":1275.2985305786133,"y":1840.4031162261963,"wires":[]},{"id":"507d71f9.7a6b6","type":"debug","z":"121c01c2.e652c6","name":"","active":false,"console":"false","complete":"false","x":757.1166687011719,"y":1941.7667236328125,"wires":[]},{"id":"8a01db25.b7bf2","type":"inject","z":"121c01c2.e652c6","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":167.11666870117188,"y":1961.7667236328125,"wires":[["11699f20.b688c1"]]},{"id":"365127bf.e1c868","type":"debug","z":"121c01c2.e652c6","name":"","active":true,"console":"false","complete":"false","x":1587.116683959961,"y":1890.4031009674072,"wires":[]},{"id":"488ced60.443d0c","type":"http response","z":"121c01c2.e652c6","name":"","x":957.1166687011719,"y":1941.7667236328125,"wires":[]},{"id":"cbceed8.fb63c9","type":"http in","z":"121c01c2.e652c6","name":"lancamentos","url":"/api/lancamentos","method":"get","swaggerDoc":"","x":152.11666870117188,"y":2086.61669921875,"wires":[["7be6b748.1e1f98"]]},{"id":"fd3757ce.9837a8","type":"http response","z":"121c01c2.e652c6","name":"","x":1252.1166687011719,"y":2126.61669921875,"wires":[]},{"id":"7be6b748.1e1f98","type":"function","z":"121c01c2.e652c6","name":"filtro","func":"\n//msg.payload = \"SELECT RCB.*, RCB_PED.numero AS pedido FROM RCB LEFT OUTER JOIN RCB_PED ON RCB.nosso_numero = RCB_PED.nosso_numero\"; \nmsg.payload = '';\nmsg.limit= 5;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":332.1166687011719,"y":2086.61669921875,"wires":[["bca5757a.be2108"]]},{"id":"98182483.7bf9b8","type":"function","z":"121c01c2.e652c6","name":"conta","func":"\nmsg.payload = { \"_id\": msg.payload.conta }\nmsg.limit = 100;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":1252.1166687011719,"y":2086.61669921875,"wires":[["6f25b12b.42ec5"]]},{"id":"b64c3d79.74649","type":"function","z":"121c01c2.e652c6","name":"lancamentos","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    msg.lancamentos = msg.payload;\n    return [msg, null];\n} else {\n    return [null, msg];\n}","outputs":"2","noerr":0,"x":752.1166687011719,"y":2086.61669921875,"wires":[["5b02b777.7b6788"],["1fecd3ed.431b24"]]},{"id":"5b02b777.7b6788","type":"function","z":"121c01c2.e652c6","name":"loop","func":"if (msg.index === undefined) {\n    msg.index = 0;\n    msg.payload = msg.lancamentos[msg.index];\n    return [msg, null];\n} else {\n    msg.index++;\n    if (msg.index < msg.lancamentos.length) {\n        msg.payload = msg.lancamentos[msg.index];    \n        return [msg, null]\n    }\n    msg.payload = msg.lancamentos;\n    return [null, msg];\n}\n","outputs":"2","noerr":0,"x":1072.1166687011719,"y":2086.61669921875,"wires":[["98182483.7bf9b8"],["fd3757ce.9837a8","782d8ffe.47859"]]},{"id":"31998d4d.44bf02","type":"function","z":"121c01c2.e652c6","name":"result","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    msg.lancamentos[msg.index].conta = msg.payload[0];    \n} else {\n    msg.lancamentos[msg.index].conta = {\n        \"_id\": \"00000000-0000-0000-0000-0000000000\",\n        \"selecionada\": false,\n        \"banco\": \"????????\",\n        \"conta\": \"?????\",\n        \"agencia\": \"????????\",\n        \"descricao\": \"???????????????\"\n    }\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"x":1252.1166687011719,"y":2206.61669921875,"wires":[["5b02b777.7b6788"]]},{"id":"bca5757a.be2108","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"d2a59f9.20516e","name":"lancamentos","collection":"lancamentos","operation":"find","x":532.1166687011719,"y":2086.61669921875,"wires":[["b64c3d79.74649","a3e51e6e.a933b8"]]},{"id":"6f25b12b.42ec5","type":"mongodb in","z":"121c01c2.e652c6","mongodb":"d2a59f9.20516e","name":"contas","collection":"contas","operation":"find","x":1412.1166687011719,"y":2086.61669921875,"wires":[["31998d4d.44bf02","ffc63c10.d48748"]]},{"id":"782d8ffe.47859","type":"debug","z":"121c01c2.e652c6","name":"","active":true,"console":"false","complete":"false","x":1262.1166687011719,"y":2266.61669921875,"wires":[]},{"id":"a3e51e6e.a933b8","type":"debug","z":"121c01c2.e652c6","name":"","active":true,"console":"false","complete":"false","x":752.1166687011719,"y":2126.61669921875,"wires":[]},{"id":"2b23e369.0bd02c","type":"inject","z":"121c01c2.e652c6","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":162.11666870117188,"y":2146.61669921875,"wires":[["7be6b748.1e1f98"]]},{"id":"ffc63c10.d48748","type":"debug","z":"121c01c2.e652c6","name":"","active":true,"console":"false","complete":"false","x":1609.1166381835938,"y":2091.6165771484375,"wires":[]},{"id":"1fecd3ed.431b24","type":"http response","z":"121c01c2.e652c6","name":"","x":952.1166687011719,"y":2126.61669921875,"wires":[]},{"id":"8c91fad3.2f359","type":"mqtt-broker","z":"121c01c2.e652c6","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"1ba03f37.e3ec11","type":"mongodb","z":"","hostname":"127.0.0.1","port":"27017","db":"db","name":""},{"id":"dfe58791.39f02","type":"mongodb","z":"","hostname":"192.168.0.174","port":"27017","db":"db","name":""},{"id":"d2a59f9.20516e","type":"mongodb","z":"","hostname":"192.168.0.174","port":"27017","db":"db","name":""}]
```
Select all **"Ctrl-a"** --> Copy **"Ctrl-c"** --> Past **"Ctrl-v"** all JSON content to the box that appears empty in node-red.

Click "OK" and position the flow where to find, the better.

Check out http://nodered.org/docs/getting-started/ for full instructions on getting started.

Below you will find some information on how to perform common tasks.

##5-Configuring access of node-red across settings.js

**DNS**
There are two ways to access a page on the Internet: the domain name "DNS" or "IP ADDRESS" of the servers on which it is hosted. In our case "Node-RED."

For your application to make a simple DNS access or "IP ADDRESS". We need to edit the [settings.js][9] file.

    user folder...\AppData\Roaming\npm\node_modules\node-red\settings.js
or 

    user folder...\.node-red\settings.js

The first thing that changed is the node-red port. Change 8080 to 80 as below:

    uiPort: process.env.PORT || 80,
    
The second change was uncomment the line 

    httpAdminRoot: '/admin',
    
Now save the "settings.js" and restart **node-red**
    
With this change your page application its goes::

    http://127.0.0.1:80
    
And now to access your **node-red flow** enter in:

    http://127.0.0.1:80/admin/

And now it is easy to configure your DNS server, for directly access your application. And remember now to access your flow is "IP/admin"!

Now you can create an ALIAS on your DNS server for the IP Project.

| NAME          |   TYPE        |   TARGET      |
| --------      | -----------   |-----------    |
| example.com   |      A        | 192.168.0.X   |

# Local node development

    C:\Desenvolvimento\git\node-red-nodes\function\random>npm link
    
Creat a new link in node-red folder with package.json config name ("name":"node-red-node-random")
    
    C:\Users\marcelo.miranda\AppData\Roaming\npm\node_modules\node-red>npm link node-red-node-random
    
Restart node-red and find your new node!
___
##6- PASSWORD in node-red flow

To protect your **node-red flow**, you can enable password. 

The first thing enter the **node_modules** directory:

    ....\AppData\Roaming\npm\node_modules

You need to make a key with this commnand and put your **password**:

    node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" your-password-here

Now save result number and edit the file settings.js again.

 ```sh
 /**
 * Copyright 2013, 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

// The `https` setting requires the `fs` module. Uncomment the following
// to make it available:
//var fs = require("fs");

module.exports = {
    // the tcp port that the Node-RED web server is listening on
    uiPort: process.env.PORT || 80,

    // By default, the Node-RED UI accepts connections on all IPv4 interfaces.
    // The following property can be used to listen on a specific interface. For
    // example, the following would only allow connections from the local machine.
    //uiHost: "127.0.0.1",

    // Retry time in milliseconds for MQTT connections
    mqttReconnectTime: 15000,

    // Retry time in milliseconds for Serial port connections
    serialReconnectTime: 15000,

    // Retry time in milliseconds for TCP socket connections
    //socketReconnectTime: 10000,

    // Timeout in milliseconds for TCP server socket connections
    //  defaults to no timeout
    //socketTimeout: 120000,

    // Timeout in milliseconds for HTTP request connections
    //  defaults to 120 seconds
    //httpRequestTimeout: 120000,

    // The maximum length, in characters, of any message sent to the debug sidebar tab
    debugMaxLength: 1000,

    // The file containing the flows. If not set, it defaults to flows_<hostname>.json
    //flowFile: 'flows.json',

    // To enabled pretty-printing of the flow within the flow file, set the following
    //  property to true:
    //flowFilePretty: true,

    // By default, all user data is stored in the Node-RED install directory. To
    // use a different location, the following property can be used
    //userDir: '/home/nol/.node-red/',

    // Node-RED scans the `nodes` directory in the install directory to find nodes.
    // The following property can be used to specify an additional directory to scan.
    //nodesDir: '/home/nol/.node-red/nodes',

    // By default, the Node-RED UI is available at http://localhost:1880/
    // The following property can be used to specifiy a different root path.
    // If set to false, this is disabled.
    httpAdminRoot: '/admin',

    // Some nodes, such as HTTP In, can be used to listen for incoming http requests.
    // By default, these are served relative to '/'. The following property
    // can be used to specifiy a different root path. If set to false, this is
    // disabled.
    //httpNodeRoot: '/red-nodes',

    // The following property can be used in place of 'httpAdminRoot' and 'httpNodeRoot',
    // to apply the same root to both parts.
    //httpRoot: '/red',

    // When httpAdminRoot is used to move the UI to a different root path, the
    // following property can be used to identify a directory of static content
    // that should be served at http://localhost:1880/.
    //httpStatic: '/home/nol/node-red-static/',

    // Securing Node-RED
    // -----------------
    // To password protect the Node-RED editor and admin API, the following
    // property can be used. See http://nodered.org/docs/security.html for details.
    adminAuth: {
        type: "credentials",
        users: [{
           username: "admin",
            password: "$2a$08$tIP24A6fn9F9DH30OwunG.4dWSO7sJk/YvbabyvKY1ej9DN0GrCLe",
            permissions: "*"
        }]
    },

    // To password protect the node-defined HTTP endpoints (httpNodeRoot), or 
    // the static content (httpStatic), the following properties can be used.
    // The pass field is a bcrypt hash of the password.
    // See http://nodered.org/docs/security.html#generating-the-password-hash
    //httpNodeAuth: {user:"user",pass:"$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN."},
    //httpStaticAuth: {user:"user",pass:"$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN."},

    // The following property can be used to enable HTTPS
    // See http://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
    // for details on its contents.
    // See the comment at the top of this file on how to load the `fs` module used by
    // this setting.
    //
    //https: {
    //    key: fs.readFileSync('privatekey.pem'),
    //    cert: fs.readFileSync('certificate.pem')
    //},

    // The following property can be used to disable the editor. The admin API
    // is not affected by this option. To disable both the editor and the admin
    // API, use either the httpRoot or httpAdminRoot properties
    //disableEditor: false,

    // The following property can be used to configure cross-origin resource sharing
    // in the HTTP nodes.
    // See https://github.com/troygoode/node-cors#configuration-options for
    // details on its contents. The following is a basic permissive set of options:
    //httpNodeCors: {
    //    origin: "*",
    //    methods: "GET,PUT,POST,DELETE"
    //},

    // If you need to set an http proxy please set an environment variable
    // called http_proxy (or HTTP_PROXY) outside of Node-RED in the operating system.
    // For example - http_proxy=http://myproxy.com:8080
    // (Setting it here will have no effect)
    // You may also specify no_proxy (or NO_PROXY) to supply a comma separated
    // list of domains to not proxy, eg - no_proxy=.acme.co,.acme.co.uk

    // The following property can be used to add a custom middleware function
    // in front of all http in nodes. This allows custom authentication to be
    // applied to all http in nodes, or any other sort of common request processing.
    //httpNodeMiddleware: function(req,res,next) {
    //   // Handle/reject the request, or pass it on to the http in node
    //   // by calling next();
    //   next();
    //},

    // Anything in this hash is globally available to all functions.
    // It is accessed as context.global.
    // eg:
    //    functionGlobalContext: { os:require('os') }
    // can be accessed in a function block as:
    //    context.global.os

    functionGlobalContext: {
        // os:require('os'),
        // octalbonescript:require('octalbonescript'),
        // jfive:require("johnny-five"),
        // j5board:require("johnny-five").Board({repl:false})
    },

    // The following property can be used to order the categories in the editor
    // palette. If a node's category is not in the list, the category will get
    // added to the end of the palette.
    // If not set, the following default order is used:
    //paletteCategories: ['subflows', 'input', 'output', 'function', 'social', 'mobile', 'storage', 'analysis', 'advanced'],

    // Configure the logging output
    logging: {
        // Only console logging is currently supported
        console: {
            // Level of logging to be recorded. Options are:
            // fatal - only those errors which make the application unusable should be recorded
            // error - record errors which are deemed fatal for a particular request + fatal errors
            // warn - record problems which are non fatal + errors + fatal errors
            // info - record information about the general running of the application + warn + error + fatal errors
            // debug - record information which is more verbose than info + info + warn + error + fatal errors
            // trace - record very detailed logging + debug + info + warn + error + fatal errors
            level: "info",
            // Whether or not to include metric events in the log output
            metrics: false,
            // Whether or not to include audit events in the log output
            audit: false
        }
    }
}
 ```

Find and uncomment the lines as bellow and place the generated password on the line.

    adminAuth: {
        type: "credentials",
        users: [{
           username: "admin",
            password: "your generated password",
            permissions: "*"
        }]
    },

Now save the "settings.js" and restart **node-red**

When you come back to:

    http://127.0.0.1:80/admin/

![alt tag](https://github.com/MarceloProjetos/react-bootstrap-exemplo/blob/master/images/node-red_login.png)

Put username: "admin" and password: 

## 6-Installation MongoDB

Access the site [MongoDB][5]
Download file mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi or later version.
Run the default full installation.

Once installed MongoDB Create 3 directories to store the data.

    mkdir c:\data
    mkdir c:\data\db
    mkdir c:\data\log
        
In c:\data create one file named "mongod.cfg" containing:

    systemLog:
    destination: file
    path: c:\data\log\mongod.log
    storage:
    dbPath: c:\data\db

Save and close file...

Starting Server MongoDB "**mongod**"

Enter the directory where is installed the binaries and run the command. 

In my case it is ...

    c:\Program Files\MongoDB\Server\3.2\bin>mongod -dbpath c:\data\db

If your system is Windows 32bits

    C:\Program Files\MongoDB\Server\3.2\bin>mongod --journal --storageEngine=mmapv1 -dbpath c:\data\db
    
If the Windows firewall ask for permission, click the button to "Allow Access".

Now open another Windows Prompt or "Powershell"

To make a connection to MongoDB server that left running in the previous step.

Enter the directory where you installed the binaries again and run:

    c:\Program Files\MongoDB\Server\3.2\bin\mongo.exe

You will see the prompt mongodb, ready to receive your commands!
___
###Testing and creating Collections or Tables

Enter at the prompt where you run "mongo.exe" run commands below:

    use db 					            <--Create a database called db. If exists it enters in the collection.
    db.createCollection('parametros')	<--Create a collection called parametros
    db.createCollection('log_erro')		<--Create a collection called log_erro
    db.createCollection('indice')		<--Create a collection called indice
    show dbs 				            <--Show names of banks and their sizes
    show collections			        <--Displays the collections in the current bank
    exit					            <--Exit to mongo shell or **Ctrl + C**

Installing the service for MongoDB automatically start on Windows **boot**.

Enter the directory where is installed the binaries and run the command.

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --config "c:\data\mongod.cfg" --install
    
If your system is Windows 32bits

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --journal --config "c:\data\mongod.cfg" --install
    
I use as webadmin the "**mongobooster**"

Como Instalar o Java com Apt-Get
   https://www.digitalocean.com/community/tutorials/como-instalar-o-java-com-apt-get-no-ubuntu-16-04-pt

Node-red
  https://www.digitalocean.com/community/tutorials/how-to-connect-your-internet-of-things-with-node-red-on-ubuntu-16-04

Inicialização
  https://www.vivaolinux.com.br/dica/Colocando-script-na-inicializacao-do-Linux-(Ubuntu-Debian)

How to Install MongoDB on Ubuntu 
  https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

## Table of UI Components

- [Duplicatas](#duplicatas)
- [Node-red](#node-red)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

## Duplicatas

##Component preview page
![alt tag](https://github.com/MarceloProjetos/react-bootstrap-exemplo/blob/master/images/duplicatas.png)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](#running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

The build folder is ready to be deployed.
You may also serve it locally with a static server:
```
  npm install -g pushstate-server
  pushstate-server build
```
Open http://localhost:9000

---


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```


#Author

[Marcelo Miranda][4]

pxa255@gmail.com

[1]:http://nodered.org
[2]:http://activemq.apache.org/
[3]:https://nodejs.org/
[4]:https://github.com/MarceloProjetos
[5]:https://www.mongodb.com/download-center#community
[6]:http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html
[7]:http://www.pipo-store.com/pipo-x9-tv-box-8-9-inch-mini-pc.html
[8]:https://www.python.org/downloads/release/python-2712/
[10]:https://tortoisegit.org/
[11]:http://www.7-zip.org/
[12]:https://www.sublimetext.com/
[13]:https://packagecontrol.io/installation

