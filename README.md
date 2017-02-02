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

## 1-Java in Linux

Primeiro, atualize o índice de pacotes.

    sudo apt-get update
    
Depois, instale o Java. Especificamente, esse comando irá instalar o Java Runtime Environment (JRE).

    sudo apt-get install default-jre

1.PPA repository with installer scripts for the latest Java 8 and 9 PPA.

Open terminal (Ctrl+Alt+T) and run the command

    sudo add-apt-repository ppa:webupd8team/java

Type in your password when it asks and hit Enter.

2. Update and install the installer script:

Run commands to update system package index and install Java installer script:

    sudo apt update; sudo apt install oracle-java8-installer

You may replace oracle-java8-installer with oracle-java9-installer to install Java 9.

While the install process, you have to accept Java license to continue downloading & installing Java binaries.

3. Check the Java version

To check the Java version after installing the package, run command:

    java -version

4. Set Java environment variables

The PPA also contains a package to automatically set Java environment variables, just run command:

    sudo apt install oracle-java8-set-default
    
Gerenciando o Java

Podem haver múltiplas versões do Java em um servidor. Você pode configurar qual versão é a padrão para uso na linha de comando através do uso do update-alternatives, que gerencia quais links simbólicos são usados por diferentes comandos.

    sudo update-alternatives --config java

A saída será parecida com o seguinte. Nesse caso, isso é como a saída se parecerá com todas as versões de Java mencionadas acima instaladas.
Output

There are 5 choices for the alternative java (providing /usr/bin/java).

    Selection    Path                                            Priority   Status
 
    * 0            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      auto mode
    1            /usr/lib/jvm/java-6-oracle/jre/bin/java          1         manual mode
    2            /usr/lib/jvm/java-7-oracle/jre/bin/java          2         manual mode
    3            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode
    4            /usr/lib/jvm/java-8-oracle/jre/bin/java          3         manual mode
    5            /usr/lib/jvm/java-9-oracle/bin/java              4         manual mode

  Press enter to keep the current choice, or type selection number
  
Resumindo a instalação do java em linux...

    sudo apt-get purge openjdk*
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
    sudo apt-get install oracle-java8-installer
    sudo apt-get install oracle-java8-set-default

## 2-Installation NODE-JS
 
**Windows**

Access the site [NodeJS][3]

Download the latest LTS version, follow with the default installation. In this example I used the "node-v6.9.1-x64"

Now install the **phyton**. In this tutorial I used [python-2.7.10][8]

Wait for the installation and restart the machine to continue.

**Linux**

To install Node.js, type the following command in your terminal:

    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
**Upgrading node-js linux**

If you have nodejs already installed and want to update, then first remove current instalation and install it again using scripts above.

    sudo apt-get purge nodejs npm
    
For future references see -> [ Debian / Ubuntu based distributions][14]
    
## 3-Then install the Node package manager, NPM

    sudo apt-get install npm

Create a symbolic link for node, as many Node.js tools use this name to execute.

    sudo ln -s /usr/bin/nodejs /usr/bin/node

Now we should have both the Node and npm commands working:
```	
    node -v
      v6.9.2
    npm -v
      v3.10.9
```
## 3- Create-react-app installation  

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

## 4- Adding Bootstrap

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

## 5- Adding mqtt, lodash and node-uuid

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
## 6-Broker Installation "ActiveMQ" 

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
    
**LINUX**

Open a blank service file called activemq.service.

    sudo nano /etc/systemd/system/activemq.service

Copy and paste in the following, then save and close the file in **/etc/systemd/system/activemq.service**

I managed to get the following working - in /etc/systemd/system/activemq.myinstance.service

    [Unit]
    Description = ActiveMQ
    After = syslog.target network.target

    [Service]
    User=activemq
    PIDFile=/usr/local/activemq/myinstance/data/activemq.pid
    ExecStart=/usr/local/activemq/myinstance/bin/myinstance start
    ExecStop=/usr/local/activemq/myinstance/bin/myinstance stop
    ExecReload=/usr/local/activemq/myinstance/bin/myinstance restart
    Type = forking

    [Install]
    WantedBy = multi-user.target 

or

    [Unit]
    Description=ActiveMQ async message broker
    After=network.target

    [Service]
    PrivateTmp=true
    PIDFile=/opt/activemq/data/activemq-your_server_name.pid
    Type=simple
    #Environment=JAVA_HOME=/usr/jvm/lib/latest
    User=activemq
    Group=activemq
    ExecStart=/opt/activemq/bin/activemq console

    [Install]
    WantedBy=multi-user.target 

Now that our service file is installed and understood, we need to enable it. This will enable it to execute on startup.

    sudo systemctl enable activemq.myinstance.service

Let's manually start the service now to test that it's still working.

    sudo systemctl start activemq.myinstance.service
    
----

## 6-Node-red

**Windows**

Run the following command in the root directory of your Node-RED install

    npm install -g node-red
    npm install -g bcryptjs

Wait finish installation...

Run the following command in root mode. Of the libraries installation.

    npm install -g node-red-node-mongodb

Run the command prompt **"node-red"**

Open <http://localhost:1880>

**Installing Node-RED in Linux**

Use npm to install node-red and a helper utility called node-red-admin.

    sudo npm install -g --unsafe-perm node-red node-red-admin

npm normally installs its packages into your current directory. Here, we use the -g flag to install packages 'globally' so they're placed in standard system locations such as /usr/local/bin. The --unsafe-perm flag helps us avoid some errors that can pop up when npm tries to compile native modules (modules written in a compiled language such as C or C++ vs. JavaScript).

After a bit of downloading and file shuffling, you'll be returned to the normal command line prompt. Let's test our install.

First, we'll need to open up a port on our firewall. Node-RED defaults to using port 1880, so let's allow that.

    sudo ufw allow 1880

And now launch Node-RED itself. No sudo is necessary, as port 1880 is high enough to not require root privileges.

    node-red

Some "Welcome to Node-RED" messages will print to the terminal. On your computer, point a web browser to port 1880 of the server.

Launching Node-RED on Startup

In order to start Node-RED automatically on startup, we'll need to install a node-red.service file instead of the more traditional init script. This is because Ubuntu 16.04 is the first LTS release that uses systemd for its init system. You can find a summary of this and other Ubuntu 16.04 changes in What's New in Ubuntu 16.04.

Open a blank service file called node-red.service.

    sudo nano /etc/systemd/system/node-red.service

Copy and paste in the following, then save and close the file in **/etc/systemd/system/node-red.service**

    [Unit]
    Description=Node-RED
    After=syslog.target network.target

    [Service]
    ExecStart=/usr/local/bin/node-red -v
    Restart=on-failure
    KillSignal=SIGINT

    # log output to syslog as 'node-red'
    SyslogIdentifier=node-red
    StandardOutput=syslog

    # non-root user to run as
    WorkingDirectory=/home/marcelomiranda/
    User=marcelomiranda
    Group=marcelomiranda

    [Install]
    WantedBy=multi-user.target

A full explanation of systemd service files is beyond this tutorial, but you can learn more by reading Systemd Essentials: Working with Services, Units, and the Journal.

That said, let's break down some of the sections in our service file:
        
    /etc/systemd/system/node-red.service

    [Unit]
    Description=Node-RED
    After=syslog.target network.target

This describes our service and indicates that it should be started after networking and syslog are functioning.

    /etc/systemd/system/node-red.service

    [Service]
    ExecStart=/usr/local/bin/node-red-pi --max-old-space-size=128 -v
    Restart=on-failure
    KillSignal=SIGINT

ExecStart is the command needed to start our service. We call node-red-pi instead of plain node-red so we can pass some memory-saving options to Node.js. This should allow it to run well on any reasonably sized server, depending of course on how many flows you create in Node-RED (and how complicated they are). Restart=on-failure means systemd will try to restart Node-RED if it crashes, and KillSignal tells systemd the best way to quit Node-RED when it needs to shut down or restart the process.

    /etc/systemd/system/node-red.service

    # log output to syslog as 'node-red'
    SyslogIdentifier=node-red
    StandardOutput=syslog

This sets the label used when logging, and logs all output to the syslog service.

    /etc/systemd/system/node-red.service

    # non-root user to run as
    WorkingDirectory=/home/marcelomiranda/
    User=marcelomiranda
    Group=marcelomiranda

We want to run Node-RED as our non-root user. The lines above tell systemd to launch Node-RED using our user and group, and from within our home directory.

    /etc/systemd/system/node-red.service

    [Install]
    WantedBy=multi-user.target

WantedBy indicates the targets our service should run under. In this case, when Ubuntu boots into multi-user mode, it will know to also launch our Node-RED service. Muti-user mode is the default startup target.

Now that our service file is installed and understood, we need to enable it. This will enable it to execute on startup.

    sudo systemctl enable node-red

Let's manually start the service now to test that it's still working.

    sudo systemctl start node-red

Point a browser back at the server's port 1880 and verify that Node-RED is back up. If it is, shut it back down until we secure the install in the next step.

    sudo systemctl stop node-red
    
[Reference for more information][15]

**Make node-red update**

    npm cache clean
    npm update -g --unsafe-perm node-red

**Restore a FLOW**

To restore a node-red flow with Ctrl-I command or the menu, "Menu > Import > Clipboard".

Below you will find node-red project.

###Financeiro Node-red Flow
 ```sh
[{"id":"db72e6d3.860ba8","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/contas/incluir/#","qos":"0","broker":"59583542.cf182c","x":290,"y":191.01478385925293,"wires":[["5a5558fa.b2ade"]]},{"id":"5a5558fa.b2ade","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":559,"y":191.01478385925293,"wires":[["f64d228.e4e9be","f67e4fbb.54047"]]},{"id":"e6ca7267.3e23a","type":"debug","z":"24d33ccd.b58f84","name":"Incluir + ID","active":false,"console":"false","complete":"payload","x":1179.2499389648438,"y":192.76478385925293,"wires":[]},{"id":"e1c1bcb6.f6717","type":"mqtt out","z":"24d33ccd.b58f84","name":"contas/carregado/","topic":"financeiro/cadastro/contas/carregado/","qos":"0","retain":"","broker":"59583542.cf182c","x":1201.7261962890625,"y":557.7431774139404,"wires":[]},{"id":"f64d228.e4e9be","type":"mqtt out","z":"24d33ccd.b58f84","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":785.5292663574219,"y":191.29398918151855,"wires":[]},{"id":"f6baa98.bc6d5d8","type":"function","z":"24d33ccd.b58f84","name":"mudar 1 socio apenas","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $set: {\n \"parametros.encoder.fator\": 2225\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3253.710922241211,"y":2151.2537927627563,"wires":[["a427ddf.8d272a"]]},{"id":"a427ddf.8d272a","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"update only one","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3513.710906982422,"y":2151.6537866592407,"wires":[]},{"id":"b4d3b1e8.a9dcf","type":"inject","z":"24d33ccd.b58f84","name":"String vazia","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2955.743698120117,"y":2371.098150253296,"wires":[["24a77ab3.74dd9e"]]},{"id":"b8463708.759848","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"consulta","collection":"contas","operation":"find","x":3474.710868835449,"y":2371.453646659851,"wires":[["f4ecf6fa.17caf"]]},{"id":"f4ecf6fa.17caf","type":"debug","z":"24d33ccd.b58f84","name":"resposta do MongoDB","active":true,"console":"false","complete":"payload","x":3758.8219108581543,"y":2371.5648021698,"wires":[]},{"id":"a50ffaa7.710af8","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"APAGAR TODA A COLLECTION cadastroErros","collection":"cadastroErros","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3374.4883880615234,"y":1774.475817680359,"wires":[]},{"id":"33a0b23e.1c43fe","type":"inject","z":"24d33ccd.b58f84","name":"LIMPAR coleção cadastroErros","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":3017.2419357299805,"y":1775.2028732299805,"wires":[["a50ffaa7.710af8"]]},{"id":"d0414dad.f71b08","type":"inject","z":"24d33ccd.b58f84","name":"Editar socios","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2956.544460296631,"y":2150.9204893112183,"wires":[["f6baa98.bc6d5d8"]]},{"id":"7a7b3969.1599c8","type":"function","z":"24d33ccd.b58f84","name":"indiceErros +1","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $inc: {\n \"os.produzido\": 1\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3286.9329681396484,"y":2278.031469345093,"wires":[["d5120eda.dc7458"]]},{"id":"d5120eda.dc7458","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar","collection":"indiceErros","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3484.9329528808594,"y":2278.431463241577,"wires":[]},{"id":"8d342b1b.82c06","type":"inject","z":"24d33ccd.b58f84","name":"$inc: incrementa","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2963.7665061950684,"y":2277.6981658935547,"wires":[["7a7b3969.1599c8","bca4737a.4a393"]]},{"id":"24a77ab3.74dd9e","type":"function","z":"24d33ccd.b58f84","name":"Paginação ","func":"msg.limit = 5;\nmsg.skip = 0;\nreturn msg;","outputs":1,"noerr":0,"x":3273.155221939087,"y":2371.512929916382,"wires":[["b8463708.759848"]]},{"id":"e6ff8a2c.60e2","type":"comment","z":"24d33ccd.b58f84","name":"Paginação e consulta MongoDB","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2991.9330558776855,"y":2335.3647694587708,"wires":[]},{"id":"5abc84e3.733344","type":"inject","z":"24d33ccd.b58f84","name":"Criar estrutura cadastroErros","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":3007.3773193359375,"y":2017.7815351486206,"wires":[["a797f330.69748"]]},{"id":"8dd867da.1da018","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar","collection":"cadastroErros","payonly":true,"upsert":false,"multi":false,"operation":"store","x":3499.735206604004,"y":2017.8323669433594,"wires":[]},{"id":"a797f330.69748","type":"function","z":"24d33ccd.b58f84","name":"collection inicial cadastroErros","func":"msg.payload = {\n\t\"_id\": 1,\n\t\"log_mesagens\": {\n\t}\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3282.7441940307617,"y":2017.9371538162231,"wires":[["8dd867da.1da018"]]},{"id":"9e0ef87.b3c2788","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"consulta","collection":"contas","operation":"find","x":3376.5995769500732,"y":2451.948173522949,"wires":[["b17e1f7f.896a48"]]},{"id":"f0ce6d01.0140a","type":"function","z":"24d33ccd.b58f84","name":"lê apenas uma conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"AplanadoraN3\" }\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"parametros.encoder.fator\": 1 }\n\n// Ler 1 valor\nmsg.limit = 1;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":3163.710647583008,"y":2451.785203933716,"wires":[["9e0ef87.b3c2788"]]},{"id":"221df172.d62796","type":"inject","z":"24d33ccd.b58f84","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2943.724557876587,"y":2451.448154449463,"wires":[["f0ce6d01.0140a"]]},{"id":"b17e1f7f.896a48","type":"function","z":"24d33ccd.b58f84","name":"parse(contas)","func":"msg.payload=msg.payload[0].parametros.encoder.fator;\nreturn msg;","outputs":1,"noerr":0,"x":3549.766393661499,"y":2452.364872932434,"wires":[["f800ae51.f2362"]]},{"id":"f800ae51.f2362","type":"debug","z":"24d33ccd.b58f84","name":"ler conta x","active":true,"console":"false","complete":"payload","x":3766.0998134613037,"y":2452.3647537231445,"wires":[]},{"id":"9cd76b0a.ecfcc8","type":"comment","z":"24d33ccd.b58f84","name":"Lê apenas um valor","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2948.9326095581055,"y":2416.3648138046265,"wires":[]},{"id":"bca4737a.4a393","type":"function","z":"24d33ccd.b58f84","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3276.266372680664,"y":2313.4757566452026,"wires":[["24a77ab3.74dd9e"]]},{"id":"971acbb4.d8a4d8","type":"comment","z":"24d33ccd.b58f84","name":"Contador Produzidos ++ ","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2968.932548522949,"y":2239.3647260665894,"wires":[]},{"id":"1aa45dc4.44da22","type":"comment","z":"24d33ccd.b58f84","name":"Edita apenas 1 registro do banco com $set","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":3021.710479736328,"y":2112.6981229782104,"wires":[]},{"id":"de8681fb.a51418","type":"comment","z":"24d33ccd.b58f84","name":"2- Cria estrutura inicial das coleções","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":3002.266044616699,"y":1873.0314598083496,"wires":[]},{"id":"9f7bd3d6.210ce8","type":"comment","z":"24d33ccd.b58f84","name":"1- Apagar Cuidado","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2953.8214721679688,"y":1634.2536144256592,"wires":[]},{"id":"bd7e36c2.8989c","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"APAGAR TODA A COLLECTION contas","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3353.932632446289,"y":1726.2535886764526,"wires":[]},{"id":"304b4b04.2c2c64","type":"inject","z":"24d33ccd.b58f84","name":"LIMPAR coleção contas","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2987.5747833251953,"y":1726.2027921676636,"wires":[["bd7e36c2.8989c"]]},{"id":"1169fa77.05928e","type":"inject","z":"24d33ccd.b58f84","name":"Criar estrutura indice erros","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2996.899314880371,"y":2067.298237800598,"wires":[["8e14157d.48f2b"]]},{"id":"5f0f98a8.bee518","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar","collection":"indiceErros","payonly":true,"upsert":false,"multi":true,"operation":"store","x":3499.8126945495605,"y":2066.7936067581177,"wires":[]},{"id":"8e14157d.48f2b","type":"function","z":"24d33ccd.b58f84","name":"collection inicial indice erros","func":"msg.payload = {\n\t\"_id\": \"indice\",\n\t\"indice_mesagens\": 0\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3272.2661895751953,"y":2067.1204690933228,"wires":[["5f0f98a8.bee518"]]},{"id":"bbf754a2.100478","type":"inject","z":"24d33ccd.b58f84","name":"LIMPAR coleção indice erros","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":3007.340103149414,"y":1823.1427068710327,"wires":[["f917ecc4.302b8"]]},{"id":"f917ecc4.302b8","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"APAGAR TODA A COLLECTION indice erros","collection":"indiceErros","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3366.340103149414,"y":1822.8093328475952,"wires":[]},{"id":"ec1a70bc.c24e2","type":"comment","z":"24d33ccd.b58f84","name":"Consulta MongoDB por string","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":3441.4159622192383,"y":1574.0813932418823,"wires":[]},{"id":"59a38b3e.5d37cc","type":"function","z":"24d33ccd.b58f84","name":"Exemplo de consulta","func":"msg.limit = parseInt(msg.req.query.size) || 10;\nmsg.skip = ((parseInt(msg.req.query.page) || 1) - 1) * (parseInt(msg.req.query.page) || 1);\nmsg.payload = {nome: {'$regex' : msg.payload.nome, '$options' : 'i'}}\nreturn msg;","outputs":1,"noerr":0,"x":3419.193778991699,"y":1536.303744316101,"wires":[[]]},{"id":"ce17affc.e20f3","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"APAGAR TODA A COLLECTION socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3353.0380630493164,"y":1677.8053188323975,"wires":[]},{"id":"965d2a48.e9b008","type":"inject","z":"24d33ccd.b58f84","name":"LIMPAR coleção socios","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2986.6802139282227,"y":1677.7545223236084,"wires":[["ce17affc.e20f3"]]},{"id":"c9186098.3d2328","type":"inject","z":"24d33ccd.b58f84","name":"Criar estrutura socios","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2986.466651916504,"y":1920.4481410980225,"wires":[["da4e8373.96122"]]},{"id":"e79a322.167a6d","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"store","x":3497.824249267578,"y":1919.9433603286743,"wires":[]},{"id":"da4e8373.96122","type":"function","z":"24d33ccd.b58f84","name":"collection inicial socios","func":"msg.payload = \n{\n\t\"_id\": \"cdd2f034-3ec9-4d8b-a8c4-b67af29ccc39\",\n\t\"selecionada\": false,\n\t\"banco\": \"NOSSA CAIXA\",\n\t\"conta\": \"00100020003-6\",\n\t\"agencia\": 1653,\n\t\"descricao\": \"Primeiro conta\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":3252.833236694336,"y":1920.048147201538,"wires":[["e79a322.167a6d"]]},{"id":"7c4c5d7e.cf1aac","type":"function","z":"24d33ccd.b58f84","name":"mudar 1 conta apenas","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $set: {\n \"parametros.encoder.fator\": 2225\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3254.1808853149414,"y":2198.5909633636475,"wires":[["e99cc43f.2d27b8"]]},{"id":"e99cc43f.2d27b8","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"update only one","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3514.1808700561523,"y":2198.990957260132,"wires":[]},{"id":"2e8db310.3124fc","type":"inject","z":"24d33ccd.b58f84","name":"Editar Conta","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2957.0144233703613,"y":2198.2576599121094,"wires":[["7c4c5d7e.cf1aac"]]},{"id":"65919557.c8139c","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"consulta","collection":"socios","operation":"find","x":3376.466651916504,"y":2503.233907699585,"wires":[["6e40d9e3.f931e8"]]},{"id":"af5c9f3f.660388","type":"function","z":"24d33ccd.b58f84","name":"lê apenas um socio","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"AplanadoraN3\" }\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"parametros.encoder.fator\": 1 }\n\n// Ler 1 valor\nmsg.limit = 1;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":3153.5777225494385,"y":2503.0709381103516,"wires":[["65919557.c8139c"]]},{"id":"3d6c0da6.84b5f2","type":"inject","z":"24d33ccd.b58f84","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2943.5916328430176,"y":2502.7338886260986,"wires":[["af5c9f3f.660388"]]},{"id":"6e40d9e3.f931e8","type":"function","z":"24d33ccd.b58f84","name":"parse(socios)","func":"msg.payload=msg.payload[0].parametros.encoder.fator;\nreturn msg;","outputs":1,"noerr":0,"x":3549.6334686279297,"y":2503.65060710907,"wires":[["fcc5102b.294858"]]},{"id":"fcc5102b.294858","type":"debug","z":"24d33ccd.b58f84","name":"ler socios x","active":true,"console":"false","complete":"payload","x":3765.9668884277344,"y":2503.6504878997803,"wires":[]},{"id":"9ac1081c.05b788","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/contas/carregar/","qos":"0","broker":"59583542.cf182c","x":285.5276565551758,"y":556.0536651611328,"wires":[["a77b4092.50326","9ff7a1b9.d5c7"]]},{"id":"c037c9f2.d56968","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar conta","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"store","x":1180.2052173614502,"y":250.7536849975586,"wires":[]},{"id":"f67e4fbb.54047","type":"function","z":"24d33ccd.b58f84","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":803.6498107910156,"y":249.8148021697998,"wires":[["2a20f13b.cfb3ae"]]},{"id":"2a20f13b.cfb3ae","type":"json","z":"24d33ccd.b58f84","name":"","x":997.0831604003906,"y":250.29813957214355,"wires":[["c037c9f2.d56968","a7e5b9f9.a30378","e6ca7267.3e23a"]]},{"id":"50f51d79.3e101c","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/contas/alterar/#","qos":"0","broker":"59583542.cf182c","x":286.8665771484375,"y":314.7704105377197,"wires":[["c53eadb8.217478","2b2d5da2.52fe72"]]},{"id":"c53eadb8.217478","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/alterado/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":560.6443328857422,"y":314.77041816711426,"wires":[["2bc7acf8.0a3b6c","f67e4fbb.54047","f4bfe83a.4e72d"]]},{"id":"2bc7acf8.0a3b6c","type":"mqtt out","z":"24d33ccd.b58f84","name":"alterado/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":783.7292060852051,"y":314.6051902770996,"wires":[]},{"id":"50ed15fc.4eec8c","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega lista","collection":"contas","operation":"find","x":783.0220608181426,"y":557.0926021999783,"wires":[["e1c1bcb6.f6717","870f3e76.bea748"]]},{"id":"a77b4092.50326","type":"function","z":"24d33ccd.b58f84","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":565.003547668457,"y":557.2222633361816,"wires":[["50ed15fc.4eec8c","291ec9ec.7d73ee"]]},{"id":"4d32220e.a7d9d4","type":"comment","z":"24d33ccd.b58f84","name":"Adiciona um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":298.20738220214844,"y":150.22223281860352,"wires":[]},{"id":"fe10c025.47fc6","type":"comment","z":"24d33ccd.b58f84","name":"Atualiza lista de contas cadastro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":245.2908172607422,"y":517.6111793518066,"wires":[]},{"id":"a7e5b9f9.a30378","type":"function","z":"24d33ccd.b58f84","name":"Delay 200ms","func":"setTimeout(function() {\n node.send(msg);\n}, 200);\nreturn null;","outputs":1,"noerr":0,"x":1179.7815551757812,"y":308.00001335144043,"wires":[["9674e690.dcb9f8"]]},{"id":"9674e690.dcb9f8","type":"link out","z":"24d33ccd.b58f84","name":"","links":["e23a41ba.c29008","fe42345f.493ef8"],"x":1302.7999362945557,"y":307.6481819152832,"wires":[]},{"id":"e23a41ba.c29008","type":"link in","z":"24d33ccd.b58f84","name":"Atualiza Registro","links":["9674e690.dcb9f8"],"x":405.244215965271,"y":516.5740776062012,"wires":[["a77b4092.50326"]]},{"id":"1224326a.ffa62e","type":"comment","z":"24d33ccd.b58f84","name":"Modifica um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":297.7628707885742,"y":274.6667537689209,"wires":[]},{"id":"51050004.08f0f8","type":"inject","z":"24d33ccd.b58f84","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":345.44566345214844,"y":612.0440101623535,"wires":[["a77b4092.50326"]]},{"id":"870f3e76.bea748","type":"debug","z":"24d33ccd.b58f84","name":"Resposta","active":true,"console":"false","complete":"payload","x":1172.7791748046875,"y":609.3288097381592,"wires":[]},{"id":"291ec9ec.7d73ee","type":"debug","z":"24d33ccd.b58f84","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":825.1332397460938,"y":611.0440196990967,"wires":[]},{"id":"691f6d21.42165c","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/contas/excluir/#","qos":"0","broker":"59583542.cf182c","x":286.6518249511719,"y":402.8333568572998,"wires":[["f45bf7b2.5d49c","470470a0.a96118"]]},{"id":"1c5d3ff6.a5f57","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"deletar conta","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":1179.207275390625,"y":403.05555534362793,"wires":[]},{"id":"430b1724.703d58","type":"function","z":"24d33ccd.b58f84","name":"Indica o ID","func":"msg.payload = {\n\"_id\":msg.payload._id\n}\nreturn msg;","outputs":1,"noerr":0,"x":970.540771484375,"y":403.05558586120605,"wires":[["3258dcb7.091b9c","1c5d3ff6.a5f57","a7e5b9f9.a30378"]]},{"id":"3258dcb7.091b9c","type":"debug","z":"24d33ccd.b58f84","name":"","active":false,"console":"false","complete":"false","x":1179.7999877929688,"y":466.29630851745605,"wires":[]},{"id":"7f9e66d1.ec6aa","type":"mqtt out","z":"24d33ccd.b58f84","name":"excluido/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":781.818603515625,"y":443.44450187683105,"wires":[]},{"id":"f45bf7b2.5d49c","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/excluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":561.0407409667969,"y":403.44447135925293,"wires":[["7f9e66d1.ec6aa","1be8605d.878e88","d043be77.e25d58"]]},{"id":"1be8605d.878e88","type":"json","z":"24d33ccd.b58f84","name":"","x":761.5333251953125,"y":403.76481437683105,"wires":[["430b1724.703d58"]]},{"id":"d043be77.e25d58","type":"debug","z":"24d33ccd.b58f84","name":"excluido","active":false,"console":"false","complete":"true","x":770.083251953125,"y":498.26481437683105,"wires":[]},{"id":"470470a0.a96118","type":"debug","z":"24d33ccd.b58f84","name":"excluir","active":false,"console":"false","complete":"true","x":519.7499694824219,"y":444.76481437683105,"wires":[]},{"id":"2b2d5da2.52fe72","type":"debug","z":"24d33ccd.b58f84","name":"alterar","active":false,"console":"false","complete":"true","x":525.7499694824219,"y":356.76481437683105,"wires":[]},{"id":"f4bfe83a.4e72d","type":"debug","z":"24d33ccd.b58f84","name":"alterado","active":false,"console":"false","complete":"true","x":772.75,"y":362.76481437683105,"wires":[]},{"id":"d83431ac.c0d39","type":"comment","z":"24d33ccd.b58f84","name":"Exclui um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":295.86663818359375,"y":365.88148307800293,"wires":[]},{"id":"f583f258.e4d038","type":"comment","z":"24d33ccd.b58f84","name":"Cadastro de contas","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":755.5407562255859,"y":118,"wires":[]},{"id":"29717504.1d74aa","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/socios/incluir/#","qos":"0","broker":"59583542.cf182c","x":1687.8277587890625,"y":207.84258842468262,"wires":[["6f03f2f8.b52304"]]},{"id":"6f03f2f8.b52304","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1956.8277587890625,"y":207.84258842468262,"wires":[["bd581e31.95088","7fbd3326.fe2c3c"]]},{"id":"c02f5257.7c0be8","type":"debug","z":"24d33ccd.b58f84","name":"Incluir + ID","active":false,"console":"false","complete":"payload","x":2577.0776977539062,"y":209.59258842468262,"wires":[]},{"id":"548ba678.e511b8","type":"mqtt out","z":"24d33ccd.b58f84","name":"socios/carregado/","topic":"financeiro/cadastro/socios/carregado/","qos":"0","retain":"","broker":"59583542.cf182c","x":2555.553970336914,"y":573.5709648132324,"wires":[]},{"id":"bd581e31.95088","type":"mqtt out","z":"24d33ccd.b58f84","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":2183.3570251464844,"y":208.12179374694824,"wires":[]},{"id":"a50ac2bd.a80488","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/socios/carregar/","qos":"0","broker":"59583542.cf182c","x":1683.3554153442383,"y":572.8814697265625,"wires":[["fc10e3f5.24ff48"]]},{"id":"8364364a.8b91e8","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"store","x":2578.0329761505127,"y":267.5814895629883,"wires":[]},{"id":"7fbd3326.fe2c3c","type":"function","z":"24d33ccd.b58f84","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":2201.477569580078,"y":266.6426067352295,"wires":[["d873df97.90d2f"]]},{"id":"d873df97.90d2f","type":"json","z":"24d33ccd.b58f84","name":"","x":2394.910919189453,"y":267.12594413757324,"wires":[["8364364a.8b91e8","7370c388.a2e6f4","c02f5257.7c0be8"]]},{"id":"1e2029c.09c0f56","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/socios/alterar/#","qos":"0","broker":"59583542.cf182c","x":1684.6943359375,"y":331.5982151031494,"wires":[["37c8c199.b3e206","22b53086.2685d"]]},{"id":"37c8c199.b3e206","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/alterado/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1958.4720916748047,"y":331.59822273254395,"wires":[["d93f371d.a24c08","7fbd3326.fe2c3c","7a072c82.22115c"]]},{"id":"d93f371d.a24c08","type":"mqtt out","z":"24d33ccd.b58f84","name":"alterado/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":2181.5569648742676,"y":331.4329948425293,"wires":[]},{"id":"82bd1c39.299788","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega lista","collection":"socios","operation":"find","x":2180.849819607205,"y":573.920406765408,"wires":[["548ba678.e511b8","461f02b0.783b6c"]]},{"id":"fc10e3f5.24ff48","type":"function","z":"24d33ccd.b58f84","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"carregar\";\nreturn msg;","outputs":1,"noerr":0,"x":1962.8313064575195,"y":574.0500679016113,"wires":[["82bd1c39.299788","c2688341.c87a9"]]},{"id":"54c3a8d3.9eea1","type":"comment","z":"24d33ccd.b58f84","name":"Adiciona um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1696.035140991211,"y":167.0500373840332,"wires":[]},{"id":"4f9cf378.a60354","type":"comment","z":"24d33ccd.b58f84","name":"Atualiza pagina","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1688.3685607910156,"y":531.9389934539795,"wires":[]},{"id":"7370c388.a2e6f4","type":"function","z":"24d33ccd.b58f84","name":"Delay 100ms","func":"setTimeout(function() {\n node.send(msg);\n}, 100);\nreturn null;","outputs":1,"noerr":0,"x":2577.6093139648438,"y":324.8278179168701,"wires":[["6053f04e.828148"]]},{"id":"6053f04e.828148","type":"link out","z":"24d33ccd.b58f84","name":"","links":["29312b45.eeb6bc"],"x":2700.627695083618,"y":324.4759864807129,"wires":[]},{"id":"29312b45.eeb6bc","type":"link in","z":"24d33ccd.b58f84","name":"Atualiza Registro","links":["6053f04e.828148"],"x":1803.0719747543335,"y":533.4018821716309,"wires":[["fc10e3f5.24ff48"]]},{"id":"eec31d6b.045d3","type":"comment","z":"24d33ccd.b58f84","name":"Modifica um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1695.5906295776367,"y":291.4945583343506,"wires":[]},{"id":"e112f53e.e7364","type":"inject","z":"24d33ccd.b58f84","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":1740.2734375,"y":623.8718242645264,"wires":[["fc10e3f5.24ff48"]]},{"id":"461f02b0.783b6c","type":"debug","z":"24d33ccd.b58f84","name":"Resposta","active":false,"console":"false","complete":"payload","x":2432.60693359375,"y":627.1565837860107,"wires":[]},{"id":"c2688341.c87a9","type":"debug","z":"24d33ccd.b58f84","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":2222.9609985351562,"y":627.8718242645264,"wires":[]},{"id":"a3af1822.ad3888","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/cadastro/socios/excluir/#","qos":"0","broker":"59583542.cf182c","x":1684.4795837402344,"y":419.6611614227295,"wires":[["e1dc6fd8.0465e","e707263b.a30998"]]},{"id":"81341a3f.322fe","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"deletar socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":2587.0350341796875,"y":419.8833599090576,"wires":[]},{"id":"cd63f9f5.8f9db8","type":"function","z":"24d33ccd.b58f84","name":"Indica o ID","func":"msg.payload = {\n\"_id\":msg.payload._id\n}\nreturn msg;","outputs":1,"noerr":0,"x":2367.3685302734375,"y":419.88339042663574,"wires":[["77b56990.02994","81341a3f.322fe","7370c388.a2e6f4"]]},{"id":"77b56990.02994","type":"debug","z":"24d33ccd.b58f84","name":"","active":false,"console":"false","complete":"false","x":2577.6277465820312,"y":483.12411308288574,"wires":[]},{"id":"a21db1bf.2dcbc","type":"mqtt out","z":"24d33ccd.b58f84","name":"excluido/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":2179.6463623046875,"y":460.27230644226074,"wires":[]},{"id":"e1dc6fd8.0465e","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/excluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1958.8684997558594,"y":420.2722759246826,"wires":[["a21db1bf.2dcbc","1f808d4f.2e35c3","51c032e8.bcf46c"]]},{"id":"1f808d4f.2e35c3","type":"json","z":"24d33ccd.b58f84","name":"","x":2159.361083984375,"y":420.59261894226074,"wires":[["cd63f9f5.8f9db8"]]},{"id":"51c032e8.bcf46c","type":"debug","z":"24d33ccd.b58f84","name":"excluido","active":false,"console":"false","complete":"true","x":2167.9110107421875,"y":515.0926189422607,"wires":[]},{"id":"e707263b.a30998","type":"debug","z":"24d33ccd.b58f84","name":"excluir","active":false,"console":"false","complete":"true","x":1917.5777282714844,"y":461.59261894226074,"wires":[]},{"id":"22b53086.2685d","type":"debug","z":"24d33ccd.b58f84","name":"alterar","active":false,"console":"false","complete":"true","x":1923.5777282714844,"y":373.59261894226074,"wires":[]},{"id":"7a072c82.22115c","type":"debug","z":"24d33ccd.b58f84","name":"alterado","active":false,"console":"false","complete":"true","x":2170.5777587890625,"y":379.59261894226074,"wires":[]},{"id":"9463fdd3.3eb55","type":"comment","z":"24d33ccd.b58f84","name":"Exclui um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1693.6943969726562,"y":382.7092876434326,"wires":[]},{"id":"da8f7236.a69768","type":"comment","z":"24d33ccd.b58f84","name":"Cadastro de Socios","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":2153.3685150146484,"y":136.8278045654297,"wires":[]},{"id":"dedeae27.5978f8","type":"mqtt out","z":"24d33ccd.b58f84","name":"contas/carregado/","topic":"financeiro/lancamento/contas/carregado/","qos":"0","retain":"","broker":"59583542.cf182c","x":1207.5819583468965,"y":797.3564506106907,"wires":[]},{"id":"236ca362.abd284","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/lancamento/contas/carregar/","qos":"0","broker":"59583542.cf182c","x":272.6334186130098,"y":794.6669364505344,"wires":[["b19d6b82.f24b1","3e970cde.00bdec"]]},{"id":"306d5632.8862ba","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega lista","collection":"contas","operation":"find","x":790.8778228759766,"y":794.7058753967285,"wires":[["dedeae27.5978f8","65341a05.d6a06c"]]},{"id":"fe42345f.493ef8","type":"link in","z":"24d33ccd.b58f84","name":"Atualiza Registro","links":["9674e690.dcb9f8"],"x":405.099978023105,"y":753.1873508029514,"wires":[["b19d6b82.f24b1"]]},{"id":"b6637fa3.4fb3a8","type":"inject","z":"24d33ccd.b58f84","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":338.5514407687715,"y":845.6572909884983,"wires":[["b19d6b82.f24b1"]]},{"id":"65341a05.d6a06c","type":"debug","z":"24d33ccd.b58f84","name":"Resposta contas","active":false,"console":"false","complete":"payload","x":1209.6349368625215,"y":848.9420829349094,"wires":[]},{"id":"a03235ea.3ea23","type":"debug","z":"24d33ccd.b58f84","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":831.9890018039277,"y":848.6572928958469,"wires":[]},{"id":"37fac558.347a92","type":"comment","z":"24d33ccd.b58f84","name":"Lancamentos de inclusao","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":766.5293121337891,"y":714.7939491271973,"wires":[]},{"id":"b19d6b82.f24b1","type":"function","z":"24d33ccd.b58f84","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = \"Carregar contas\"\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"banco\": 1, \"conta\": 1 }\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":548.7792621188692,"y":794.9813895755344,"wires":[["a03235ea.3ea23","306d5632.8862ba"]]},{"id":"65ea67ca.fc975","type":"function","z":"24d33ccd.b58f84","name":"Maior que $gt","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {idade:{$gt:20}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3152.7500228881836,"y":2595.448271751404,"wires":[["90745163.d8541"]]},{"id":"71310811.93f1f8","type":"inject","z":"24d33ccd.b58f84","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2934.5221939086914,"y":2595.124053001404,"wires":[["65ea67ca.fc975"]]},{"id":"ecc4c716.f650b8","type":"debug","z":"24d33ccd.b58f84","name":"Resposta test","active":true,"console":"false","complete":"payload","x":3767.6057357788086,"y":2596.4090871810913,"wires":[]},{"id":"90745163.d8541","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"","collection":"test","operation":"find","x":3526.0832748413086,"y":2595.9649953842163,"wires":[["ecc4c716.f650b8"]]},{"id":"2f7f6314.9a9b1c","type":"function","z":"24d33ccd.b58f84","name":"Diferente de $ne","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {banco:{$ne:\"ALTAMIRA\"}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3152.861167907715,"y":2659.898222923279,"wires":[["fc15cc78.1685f8"]]},{"id":"48b23929.bd5778","type":"inject","z":"24d33ccd.b58f84","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2934.6333389282227,"y":2659.574004173279,"wires":[["2f7f6314.9a9b1c"]]},{"id":"a9dad9a5.4ab23","type":"function","z":"24d33ccd.b58f84","name":"Buscar o que estão numa lista $in","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {agencia:{$in:[\"234566\",\"555555\"]}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3211.416648864746,"y":2715.898222923279,"wires":[["fc15cc78.1685f8"]]},{"id":"7686816b.808d28","type":"inject","z":"24d33ccd.b58f84","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2933.188804626465,"y":2715.574004173279,"wires":[["a9dad9a5.4ab23"]]},{"id":"fc15cc78.1685f8","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"","collection":"contas","operation":"count","x":3537.19441986084,"y":2659.415068626404,"wires":[["d899649f.3c7a28"]]},{"id":"d899649f.3c7a28","type":"debug","z":"24d33ccd.b58f84","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":3777.7168197631836,"y":2658.8590383529663,"wires":[]},{"id":"f9ef682.09edb18","type":"function","z":"24d33ccd.b58f84","name":"Buscar não esta numa lista $nin","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {agencia:{$nin:[\"234566\",\"555555\"]}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3200.861167907715,"y":2765.898222923279,"wires":[["fc15cc78.1685f8"]]},{"id":"535d330.71ec2cc","type":"inject","z":"24d33ccd.b58f84","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2933.6333084106445,"y":2764.5739431381226,"wires":[["f9ef682.09edb18"]]},{"id":"b722acf7.42e7f8","type":"function","z":"24d33ccd.b58f84","name":"update valor","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload =  {$set: {\n        \"nome\": \"maria 1\",\n        \"idade\": 123466\n    }}\n\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3140.416648864746,"y":2825.8981618881226,"wires":[["2bd9c2b.7abe7be","58aee290.ceba34"]]},{"id":"88f18290.fef4a8","type":"inject","z":"24d33ccd.b58f84","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2937.416664123535,"y":2824.8981618881226,"wires":[["b722acf7.42e7f8"]]},{"id":"524cdeb1.d31f4","type":"debug","z":"24d33ccd.b58f84","name":"Resposta update test","active":true,"console":"false","complete":"payload","x":3972.416648864746,"y":2824.898222923279,"wires":[]},{"id":"2bd9c2b.7abe7be","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"update idade","collection":"test","payonly":false,"upsert":true,"multi":false,"operation":"update","x":3490.0832748413086,"y":2826.0314626693726,"wires":[]},{"id":"58aee290.ceba34","type":"function","z":"24d33ccd.b58f84","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3489.416648864746,"y":2882.5480642318726,"wires":[["4e6d9a66.1be584"]]},{"id":"4e6d9a66.1be584","type":"function","z":"24d33ccd.b58f84","name":"lê banco e conta","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"Carregar test\";\nreturn msg;","outputs":1,"noerr":0,"x":3681.416648864746,"y":2882.5981130599976,"wires":[["ad42f7b8.3f7fe8"]]},{"id":"ad42f7b8.3f7fe8","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"test.find()","collection":"test","operation":"find","x":3701.0833053588867,"y":2824.7314138412476,"wires":[["524cdeb1.d31f4"]]},{"id":"8b803a01.3c3008","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/lancamento/contas/incluir/#","qos":"0","broker":"59583542.cf182c","x":270.50008731418166,"y":932.1148124270969,"wires":[["c75b1dd5.a82b5"]]},{"id":"c75b1dd5.a82b5","type":"function","z":"24d33ccd.b58f84","name":"Recupera topico ID","func":"node.status({\n    fill:\"blue\",shape:\"ring\",text:\"incluido/\" + msg.topic.split('/')[msg.topic.split('/').length - 1]\n});\n\nvar lancamento = JSON.parse(msg.payload);\n\nreturn {\n    id: msg.id,\n    topic: 'financeiro/lancamento/contas/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //lancamento._id,\n    payload: { \n        _id: lancamento._id, \n        conta: lancamento.conta, \n        data: lancamento.data, \n        cheque: lancamento.cheque, \n        liquidado: lancamento.liquidado, \n        operacao: lancamento.operacao, \n        debito: (lancamento.operacao === 'debito' ? lancamento.valor : 0),\n        credito: (lancamento.operacao === 'credito' ? lancamento.valor : 0),\n        valor: lancamento.valor * (lancamento.operacao === 'credito' ? 1 : -1), \n        observacao: lancamento.observacao \n    }\n};","outputs":"1","noerr":0,"x":556.5000873141817,"y":932.1148124270969,"wires":[["3c467e55.5c04da","10e5cfc8.862e","5fef6676.221e9"]]},{"id":"3c467e55.5c04da","type":"mqtt out","z":"24d33ccd.b58f84","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"59583542.cf182c","x":792.0293536716035,"y":932.3940177493625,"wires":[]},{"id":"5fef6676.221e9","type":"mongodb out","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"salvar lancamentos","collection":"lancamentos","payonly":true,"upsert":false,"multi":false,"operation":"store","x":813.5001373291016,"y":984.1149635314941,"wires":[]},{"id":"f517849a.3d1d88","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega valores","collection":"lancamentos","operation":"aggregate","x":806.7775344848633,"y":1994.475788116455,"wires":[["92d6009d.956a68","8e12c7a7.42921","8577ef0d.c95848"]]},{"id":"591ba3de.6bf0f4","type":"debug","z":"24d33ccd.b58f84","name":"total","active":false,"console":"false","complete":"payload","x":1399.6663665771484,"y":2148.186734199524,"wires":[]},{"id":"904420f7.f7ffc","type":"function","z":"24d33ccd.b58f84","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = [\n    {\n       $group: {\n            _id: \"$conta\",\n            debito:{ $sum: \"$debito\" },\n            credito:{ $sum: \"$credito\" },\n            valor: {  $sum: \"$valor\"},\n            count: { $sum: 1 }\n        },\n    }\n]\n\nreturn msg;","outputs":1,"noerr":0,"x":605.7775039672852,"y":1994.7757148742676,"wires":[["f517849a.3d1d88"]]},{"id":"a9c23578.eda6f8","type":"inject","z":"24d33ccd.b58f84","name":"Totais","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":437.66086196899414,"y":2035.1091613769531,"wires":[["904420f7.f7ffc"]]},{"id":"90f758a8.0f118","type":"function","z":"24d33ccd.b58f84","name":"Valor total","func":"if(msg.payload !== null || msg.payload !== undefined){\n    msg.payload = 'R$ ' + msg.payload.valor.toFixed(2).replace('.', ',');\n    node.status({fill: \"yellow\", shape: \"ring\", text: msg.payload});\n} else {\n    msg.payload = \"0,00\";\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1160.3331146240234,"y":2148.603482246399,"wires":[["591ba3de.6bf0f4"]]},{"id":"2c9d891f.54f3f6","type":"function","z":"24d33ccd.b58f84","name":"Debitos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload.debito).toFixed(2);\n    let y = 'R$ ' + x.toString().replace('.', ',');\n    msg.payload = y;\n    node.status({fill:\"red\",shape:\"ring\",text:y});\n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1158.3331146240234,"y":2048.953579902649,"wires":[["34a98768.540d48"]]},{"id":"ee33fff9.f92be8","type":"function","z":"24d33ccd.b58f84","name":"Creditos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload.credito).toFixed(2);\n    let y = 'R$ ' + x.toString().replace('.', ',');\n    msg.payload = y\n    node.status({fill:\"green\",shape:\"ring\",text:y});\n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n    \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1159.3331146240234,"y":2100.953579902649,"wires":[["5c2c511c.832958"]]},{"id":"34a98768.540d48","type":"debug","z":"24d33ccd.b58f84","name":"debito","active":false,"console":"false","complete":"payload","x":1400.3331146240234,"y":2048.953579902649,"wires":[]},{"id":"5c2c511c.832958","type":"debug","z":"24d33ccd.b58f84","name":"credito","active":false,"console":"false","complete":"payload","x":1400.3331146240234,"y":2100.953579902649,"wires":[]},{"id":"f8d76b75.a6534","type":"debug","z":"24d33ccd.b58f84","name":"saldo","active":false,"console":"false","complete":"payload","x":1401.3331146240234,"y":2198.9535188674927,"wires":[]},{"id":"207c579e.5fc4a8","type":"function","z":"24d33ccd.b58f84","name":"Saldo","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload.debito);\n    let y = parseFloat(msg.payload.credito);\n    let z = (y - x).toFixed(2);\n    node.status({fill:\"yellow\",shape:\"ring\",text:z});\n    msg.payload = 'R$ ' + z.toString().replace('.', ',');\n    \n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1151.9998626708984,"y":2199.3702669143677,"wires":[["f8d76b75.a6534"]]},{"id":"72ebfe00.d59e3","type":"function","z":"24d33ccd.b58f84","name":"Numero de lancamentos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseInt(msg.payload.count);\n    node.status({fill:\"yellow\",shape:\"ring\",text:x});\n    msg.payload = x;\n}\nelse{\n    msg.payload = 0;\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1212.3331146240234,"y":2255.9535188674927,"wires":[["a5022432.22b2f8"]]},{"id":"a5022432.22b2f8","type":"debug","z":"24d33ccd.b58f84","name":"Numero de lancamentos","active":false,"console":"false","complete":"payload","x":1463.6663665771484,"y":2255.536831855774,"wires":[]},{"id":"32eded81.acba22","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega lancamentos","collection":"lancamentos","operation":"find","x":729.7497940063477,"y":2415.5146198272705,"wires":[["f2b536a7.17d618"]]},{"id":"b77e4150.1aa3","type":"function","z":"24d33ccd.b58f84","name":"lê lancamento","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = \"Carrega Lancamento\"\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"conta\": 1, \"data\": 1, \"cheque\":1, \"liquidado\":1, \"operacao\":1, \"valor\":1, \"observacao\":1}\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":476.65123324924025,"y":2415.79007297092,"wires":[["32eded81.acba22"]]},{"id":"44b7c06e.ae0dc","type":"inject","z":"24d33ccd.b58f84","name":"Lê 20 até lancamentos","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":246.9719696044922,"y":2415.6535205841064,"wires":[["b77e4150.1aa3"]]},{"id":"f2b536a7.17d618","type":"debug","z":"24d33ccd.b58f84","name":"lancamentos contas","active":false,"console":"false","complete":"payload","x":967.7497940063477,"y":2415.7645587921143,"wires":[]},{"id":"a279bb0f.7b6188","type":"inject","z":"24d33ccd.b58f84","name":"conta pelo ID","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":216.74976348876953,"y":2532.5644855499268,"wires":[["e2e91616.c9301"]]},{"id":"e2e91616.c9301","type":"function","z":"24d33ccd.b58f84","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"9280aff5-619b-4e87-a82a-f31da6347a8d\"}\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"banco\": 1, \"conta\": 1 }\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":477.9775848388672,"y":2532.888584136963,"wires":[["c5f4f999.0b05f"]]},{"id":"c5f4f999.0b05f","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega conta pelo ID","collection":"contas","operation":"find","x":731.0761455959746,"y":2532.613069958157,"wires":[["ea74d7a8.e05348","d0ff474d.af96e"]]},{"id":"ea74d7a8.e05348","type":"debug","z":"24d33ccd.b58f84","name":"resposta do mongo","active":false,"console":"false","complete":"payload","x":963.8539276123047,"y":2577.5645275115967,"wires":[]},{"id":"cea42f11.9b87a","type":"debug","z":"24d33ccd.b58f84","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":1231.4999237060547,"y":2532.849317550659,"wires":[]},{"id":"d0ff474d.af96e","type":"function","z":"24d33ccd.b58f84","name":"Numero de lancamentos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = msg.payload[0].banco;\n    let y = msg.payload[0].conta;\n    node.status({fill:\"yellow\",shape:\"ring\",text:x + \" - \" + y});\n    msg.payload = (x + \" - \" + y);\n}\nelse{\n    msg.payload = 0;\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":983.4164276123047,"y":2532.6311779022217,"wires":[["cea42f11.9b87a"]]},{"id":"989d6d11.a18c2","type":"http in","z":"24d33ccd.b58f84","name":"lancamentos","url":"/api/lancamentos","method":"get","swaggerDoc":"","x":242.74974060058594,"y":2764.748022079468,"wires":[[]]},{"id":"f0da964a.273a88","type":"http response","z":"24d33ccd.b58f84","name":"","x":1343.749771118164,"y":2836.748022079468,"wires":[]},{"id":"b05a55f0.135c88","type":"function","z":"24d33ccd.b58f84","name":"filtro","func":"\n//msg.payload = \"SELECT RCB.*, RCB_PED.numero AS pedido FROM RCB LEFT OUTER JOIN RCB_PED ON RCB.nosso_numero = RCB_PED.nosso_numero\"; \nmsg.payload = '';\nmsg.limit= 50;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":422.74974060058594,"y":2764.748022079468,"wires":[["7d6883bf.877784"]]},{"id":"19e3fb07.2ee3ad","type":"function","z":"24d33ccd.b58f84","name":"conta","func":"\nmsg.payload = { \"_id\": msg.payload.conta }\nmsg.limit = 100;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":1342.749740600586,"y":2753.748022079468,"wires":[["d8c541e.d6e39c"]]},{"id":"3241723e.d0e56e","type":"function","z":"24d33ccd.b58f84","name":"lancamentos","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    return [\n        {\n            lancamentos: msg.payload.map( x => \n            {\n                return {\n                    _id: x._id,\n                \tconta: x.conta,\n                \tdata: x.data,\n                \tcheque: x.cheque,\n                \tliquidado: x.liquidado,\n                \t//operacao: x.operacao,\n                \tvalor: x.debito > 0 ? x.valor * -1 : x.valor,\n                \tobservacao: x.observacao,\n                }\n            })\n        }, \n    null];\n} else {\n    return [null, msg];\n}","outputs":"2","noerr":0,"x":842.7497406005859,"y":2764.748022079468,"wires":[["9af0cee2.7ea5b","81ac031e.723988"],["ae902685.faf578"]]},{"id":"9af0cee2.7ea5b","type":"function","z":"24d33ccd.b58f84","name":"loop","func":"if (msg.index === undefined) {\n    msg.index = 0;\n    msg.payload = msg.lancamentos[msg.index];\n    return [msg, null];\n} else {\n    msg.index++;\n    if (msg.index < msg.lancamentos.length) {\n        msg.payload = msg.lancamentos[msg.index];    \n        return [msg, null]\n    }\n    msg.payload = msg.lancamentos;\n    return [null, msg];\n}\n","outputs":"2","noerr":0,"x":1162.749740600586,"y":2759.748022079468,"wires":[["19e3fb07.2ee3ad"],["affce212.c8c588"]]},{"id":"886de234.b63e38","type":"function","z":"24d33ccd.b58f84","name":"result","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    msg.lancamentos[msg.index].conta = msg.payload[0];    \n} else {\n    msg.lancamentos[msg.index].conta = {\n        \"_id\": \"00000000-0000-0000-0000-0000000000\",\n        \"selecionada\": false,\n        \"banco\": \"????????\",\n        \"conta\": \"?????\",\n        \"agencia\": \"????????\",\n        \"descricao\": \"???????????????\"\n    }\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"x":1358.305160522461,"y":2678.6368865966797,"wires":[["9af0cee2.7ea5b"]]},{"id":"7d6883bf.877784","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"lancamentos","collection":"lancamentos","operation":"find","x":622.7497406005859,"y":2764.748022079468,"wires":[["3241723e.d0e56e","338bcb27.184c14"]]},{"id":"d8c541e.d6e39c","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"contas","collection":"contas","operation":"find","x":1502.749740600586,"y":2753.748022079468,"wires":[["886de234.b63e38","e55d2ebc.f816a8"]]},{"id":"affce212.c8c588","type":"debug","z":"24d33ccd.b58f84","name":"Final","active":true,"console":"false","complete":"payload","x":1342.4872283935547,"y":2796.71763420105,"wires":[]},{"id":"338bcb27.184c14","type":"debug","z":"24d33ccd.b58f84","name":"lancamentos","active":false,"console":"false","complete":"payload","x":842.7497406005859,"y":2804.748022079468,"wires":[]},{"id":"8b272544.c94a38","type":"inject","z":"24d33ccd.b58f84","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":252.74974060058594,"y":2824.748022079468,"wires":[["b05a55f0.135c88"]]},{"id":"e55d2ebc.f816a8","type":"debug","z":"24d33ccd.b58f84","name":"","active":false,"console":"false","complete":"false","x":1672.749755859375,"y":2753.3843994140625,"wires":[]},{"id":"7bf6bee3.561b3","type":"http response","z":"24d33ccd.b58f84","name":"","x":1044.749771118164,"y":2847.748022079468,"wires":[]},{"id":"f6c4e95c.38016","type":"http response","z":"24d33ccd.b58f84","name":"","x":1051.3183135986328,"y":2960.3333492279053,"wires":[]},{"id":"eeed40f6.3ad2b8","type":"catch","z":"24d33ccd.b58f84","name":"","scope":null,"x":661.3183135986328,"y":2980.3333492279053,"wires":[["287235d6.e028d2","c09a8a23.6a39a"]]},{"id":"287235d6.e028d2","type":"debug","z":"24d33ccd.b58f84","name":"","active":true,"console":"false","complete":"false","x":891.3183135986328,"y":3000.3333492279053,"wires":[]},{"id":"c09a8a23.6a39a","type":"function","z":"24d33ccd.b58f84","name":"erro","func":"msg.statusCode = 500;\n\nreturn msg;","outputs":1,"noerr":0,"x":871.3183135986328,"y":2960.3333492279053,"wires":[["f6c4e95c.38016"]]},{"id":"ae902685.faf578","type":"debug","z":"24d33ccd.b58f84","name":"Lancamentos Vazio","active":true,"console":"false","complete":"payload","x":1083.449722290039,"y":2803.947973251343,"wires":[]},{"id":"81ac031e.723988","type":"debug","z":"24d33ccd.b58f84","name":"modificado","active":true,"console":"false","complete":"lancamentos","x":1024.4330596923828,"y":2697.748022079468,"wires":[]},{"id":"92d6009d.956a68","type":"split","z":"24d33ccd.b58f84","name":"","splt":"\\n","x":982.7671375274658,"y":2048.735376358032,"wires":[["90f758a8.0f118","2c9d891f.54f3f6","ee33fff9.f92be8","207c579e.5fc4a8","72ebfe00.d59e3"]]},{"id":"9ff7a1b9.d5c7","type":"debug","z":"24d33ccd.b58f84","name":"comando","active":true,"console":"false","complete":"payload","x":544.3332977294922,"y":509.36667251586914,"wires":[]},{"id":"3e970cde.00bdec","type":"debug","z":"24d33ccd.b58f84","name":"Lancamento contas","active":true,"console":"false","complete":"payload","x":561.083415561252,"y":750.9833331637913,"wires":[]},{"id":"4351854e.6bfb24","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/lancamento/contas/saldo/carregar/","qos":"0","broker":"59583542.cf182c","x":320.24971771240234,"y":1994.6331958770752,"wires":[["904420f7.f7ffc"]]},{"id":"8e12c7a7.42921","type":"mqtt out","z":"24d33ccd.b58f84","name":"","topic":"financeiro/lancamento/contas/saldo/carregado/","qos":"0","retain":"","broker":"59583542.cf182c","x":1276.6942138671875,"y":1994.1610107421875,"wires":[]},{"id":"8577ef0d.c95848","type":"debug","z":"24d33ccd.b58f84","name":"resposta de cada conta","active":false,"console":"false","complete":"payload","x":1058.8054733276367,"y":1954.5776538848877,"wires":[]},{"id":"10e5cfc8.862e","type":"debug","z":"24d33ccd.b58f84","name":"lancamento conta","active":true,"console":"false","complete":"true","x":811.0835113525391,"y":890.9500465393066,"wires":[]},{"id":"2125bb89.2a0254","type":"function","z":"24d33ccd.b58f84","name":"MAP Exemplo","func":"var index = 0;\n\nmsg.payload = ['a','b','c','d','e','f'].map( (item, index, list) => \n    \"test_\" + item + ' (' + index + \"), total: \" + (index % 2 ? list[index - 1] : '_')\n);\n\nreturn msg","outputs":1,"noerr":0,"x":878.8830871582031,"y":3073.666456222534,"wires":[["14386a5b.ee4b4e"]]},{"id":"f40b1dc1.d28d88","type":"inject","z":"24d33ccd.b58f84","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":666.8830871582031,"y":3072.666456222534,"wires":[["2125bb89.2a0254"]]},{"id":"14386a5b.ee4b4e","type":"debug","z":"24d33ccd.b58f84","name":"","active":true,"console":"false","complete":"false","x":1098.8830871582031,"y":3073.666456222534,"wires":[]},{"id":"3e398986.16e18e","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/consulta/posicao/periodo/","qos":"0","broker":"59583542.cf182c","x":271.02915954589844,"y":1127.4582252502441,"wires":[["7e8c2043.0c51e"]]},{"id":"7e8c2043.0c51e","type":"function","z":"24d33ccd.b58f84","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":572.7827377319336,"y":1128.0157413482666,"wires":[["7fd908e2.597c48"]]},{"id":"7fd908e2.597c48","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega lista","collection":"contas","operation":"find","x":790.8012508816191,"y":1127.8860802120632,"wires":[["f010d567.54034","e25e6729.d8487"]]},{"id":"e25e6729.d8487","type":"debug","z":"24d33ccd.b58f84","name":"Resposta","active":false,"console":"false","complete":"payload","x":1180.558364868164,"y":1180.1222877502441,"wires":[]},{"id":"f010d567.54034","type":"mqtt out","z":"24d33ccd.b58f84","name":"contas/carregado/","topic":"financeiro/cadastro/contas/carregado/","qos":"0","retain":"","broker":"59583542.cf182c","x":1209.505386352539,"y":1128.5366554260254,"wires":[]},{"id":"1b8f09e8.77f6c6","type":"comment","z":"24d33ccd.b58f84","name":"Atualiza lista de contas consultas por periodo","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":778.2791900634766,"y":1083.7082557678223,"wires":[]},{"id":"ff6332ab.e4837","type":"debug","z":"24d33ccd.b58f84","name":"tipo de consulta","active":true,"console":"false","complete":"payload","x":561.6959228515625,"y":1429.3125610351562,"wires":[]},{"id":"ed68314e.092bc","type":"mqtt in","z":"24d33ccd.b58f84","name":"","topic":"financeiro/lancamento/contas/consultar/","qos":"0","broker":"59583542.cf182c","x":251.74444580078125,"y":1382.361083984375,"wires":[["ff6332ab.e4837","7dcce0c.c6e0da"]]},{"id":"a1c8ea69.3ba4","type":"http response","z":"24d33ccd.b58f84","name":"","x":3712.666606903076,"y":3594.999673843384,"wires":[]},{"id":"cc6eaf02.f4a7a8","type":"http in","z":"24d33ccd.b58f84","name":"Index","url":"/","method":"get","swaggerDoc":"","x":2962.110964457194,"y":3595.1107357872856,"wires":[["df133bff.0d31e8","1fd99a04.c3e33e"]]},{"id":"df133bff.0d31e8","type":"file in","z":"24d33ccd.b58f84","name":"index.HTML","filename":"/home/marcelomiranda/react-node-red/build/index.html","format":"utf8","x":3350.222080230713,"y":3595.221848487854,"wires":[["9b3a7b2d.8d985","a72ea630.609e48"]]},{"id":"8e9bb340.474b88","type":"http response","z":"24d33ccd.b58f84","name":"","x":3713.111092885336,"y":3715.66632270813,"wires":[]},{"id":"afa2424a.d4a25","type":"function","z":"24d33ccd.b58f84","name":"Text/CSS","func":"msg.headers = { \"Content-type\" : \"text/css\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":3551.66650390625,"y":3715.55517578125,"wires":[["8e9bb340.474b88"]]},{"id":"3df1126f.2852a6","type":"comment","z":"24d33ccd.b58f84","name":"HTML","info":"","x":2961.666591644287,"y":3558.9996490478516,"wires":[]},{"id":"eb94dfe0.32a948","type":"comment","z":"24d33ccd.b58f84","name":"CSS folder","info":"","x":2972.555404663086,"y":3679.110908508301,"wires":[]},{"id":"a1b60daf.24b5b","type":"comment","z":"24d33ccd.b58f84","name":"JAVASCRIPT folder","info":"","x":3001.9999046325684,"y":3758.555422782898,"wires":[]},{"id":"862d0e97.9106a","type":"http response","z":"24d33ccd.b58f84","name":"","x":3713.1110547383632,"y":3796.1107425689697,"wires":[]},{"id":"e0d0864.21c2978","type":"http in","z":"24d33ccd.b58f84","name":"Scripts","url":"/static/js/:file","method":"get","swaggerDoc":"","x":2962.5554122924805,"y":3796.2218045128716,"wires":[["1f3399bd.845cf6","1fd99a04.c3e33e"]]},{"id":"d54d3ba5.b2d6a8","type":"comment","z":"24d33ccd.b58f84","name":"media folder","info":"","x":2981.7775840759277,"y":3845.221820831299,"wires":[]},{"id":"7d462f36.2660e","type":"http response","z":"24d33ccd.b58f84","name":"","x":3712.3332837422695,"y":3880.5553455352783,"wires":[]},{"id":"bdf78773.830288","type":"http in","z":"24d33ccd.b58f84","name":"fonts","url":"/static/media/:file","method":"get","swaggerDoc":"","x":2961.7776412963867,"y":3880.66640747918,"wires":[["4a1baf2c.6c599","1fd99a04.c3e33e"]]},{"id":"9c169359.be0d28","type":"function","z":"24d33ccd.b58f84","name":"webfont","func":"msg.headers = { \"Content-type\" : \"font/opentype\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":3553.555435180664,"y":3880.444232940674,"wires":[["7d462f36.2660e"]]},{"id":"9b3a7b2d.8d985","type":"function","z":"24d33ccd.b58f84","name":"Text/HTML","func":"msg.headers = { \"Content-type\" : \"text/html\" }\n\nreturn msg;","outputs":1,"noerr":0,"x":3560.499858856201,"y":3595.0208225250244,"wires":[["a1c8ea69.3ba4"]]},{"id":"ab75b0a7.1ccdb8","type":"http in","z":"24d33ccd.b58f84","name":"CSS Files","url":"/static/css/:file","method":"get","swaggerDoc":"","x":2973.462905883789,"y":3715.2849530114067,"wires":[["8139e62c.87a25","1fd99a04.c3e33e"]]},{"id":"8139e62c.87a25","type":"function","z":"24d33ccd.b58f84","name":"files","func":"msg.filename = '//home//marcelomiranda//react-node-red//build//static//css//' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":3205.6851501464844,"y":3715.0627850426567,"wires":[["88cb0e94.02dd88"]]},{"id":"88cb0e94.02dd88","type":"file in","z":"24d33ccd.b58f84","name":"","filename":"","format":"","x":3371.907386779785,"y":3715.1739529503716,"wires":[["afa2424a.d4a25","2c6408d.77c3b78"]]},{"id":"1f3399bd.845cf6","type":"function","z":"24d33ccd.b58f84","name":"files","func":"msg.filename = '//home//marcelomiranda//react-node-red//build//static//js//' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":3205.6851501464844,"y":3797.6183270348442,"wires":[["4a5e4af9.efa1ec"]]},{"id":"4a1baf2c.6c599","type":"function","z":"24d33ccd.b58f84","name":"files","func":"msg.filename = '//home//marcelomiranda//react-node-red//build//static//media//' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":3209.018455505371,"y":3880.39602555169,"wires":[["3109699b.86781e"]]},{"id":"4a5e4af9.efa1ec","type":"file in","z":"24d33ccd.b58f84","name":"","filename":"","format":"","x":3372.351837158203,"y":3797.0627850426567,"wires":[["ee98ec95.257b2","862d0e97.9106a"]]},{"id":"ee98ec95.257b2","type":"debug","z":"24d33ccd.b58f84","name":"FIles JS","active":false,"console":"false","complete":"filename","x":3552.2407417297363,"y":3835.840615166558,"wires":[]},{"id":"3109699b.86781e","type":"file in","z":"24d33ccd.b58f84","name":"","filename":"","format":"","x":3374.574005126953,"y":3880.1737469567192,"wires":[["188a9e8b.b62fe9","9c169359.be0d28"]]},{"id":"188a9e8b.b62fe9","type":"debug","z":"24d33ccd.b58f84","name":"Fonts Files","active":false,"console":"false","complete":"filename","x":3565.4629096984863,"y":3924.9515770806206,"wires":[]},{"id":"2aedfc94.388b9c","type":"http response","z":"24d33ccd.b58f84","name":"","x":3712.1111386617026,"y":3632.5626629723442,"wires":[]},{"id":"566bccfd.8bf224","type":"http in","z":"24d33ccd.b58f84","name":"Bootstrap","url":"/","method":"get","swaggerDoc":"","x":2970.5554962158203,"y":3632.673724916246,"wires":[["f5a417a7.56db8","1fd99a04.c3e33e"]]},{"id":"f5a417a7.56db8","type":"file in","z":"24d33ccd.b58f84","name":"boostrap.min","filename":"/home/marcelomiranda/react-node-red/build/boostrap.min","format":"utf8","x":3348.6666119893393,"y":3632.7848376168145,"wires":[["1a47c519.aafd03"]]},{"id":"1a47c519.aafd03","type":"function","z":"24d33ccd.b58f84","name":"Text/CSS","func":"msg.headers = { \"Content-type\" : \"text/css\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":3550.68514251709,"y":3632.340415848626,"wires":[["2aedfc94.388b9c"]]},{"id":"2c6408d.77c3b78","type":"debug","z":"24d33ccd.b58f84","name":"CSS files","active":false,"console":"false","complete":"true","x":3552.5740661621094,"y":3760.3960369957817,"wires":[]},{"id":"5d6db1bb.11151","type":"comment","z":"24d33ccd.b58f84","name":"Servidor WEB","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":3390.129550933838,"y":3542.4514532089233,"wires":[]},{"id":"1fd99a04.c3e33e","type":"debug","z":"24d33ccd.b58f84","name":"recebeu","active":false,"console":"false","complete":"true","x":3159.166591644287,"y":3536.883005142212,"wires":[]},{"id":"a72ea630.609e48","type":"debug","z":"24d33ccd.b58f84","name":"saida","active":false,"console":"false","complete":"true","x":3561.416591644287,"y":3525.13303565979,"wires":[]},{"id":"617d79b0.42c66","type":"file in","z":"24d33ccd.b58f84","name":"index.HTML","filename":"/home/marcelomiranda/react-node-red/build/index.html","format":"utf8","x":1470.7142181396484,"y":2323.0951204299927,"wires":[["d2d8ddbc.0633b"]]},{"id":"e67b1fb4.d4d798","type":"inject","z":"24d33ccd.b58f84","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":1228.2142588297525,"y":2321.428535143534,"wires":[["617d79b0.42c66"]]},{"id":"d2d8ddbc.0633b","type":"debug","z":"24d33ccd.b58f84","name":"saida","active":true,"console":"false","complete":"true","x":1690.7142181396484,"y":2323.0951204299927,"wires":[]},{"id":"7dcce0c.c6e0da","type":"function","z":"24d33ccd.b58f84","name":"set mongo comand","func":"var p = JSON.parse(msg.payload);\nvar msg2 = {};\nmsg2.payload = p.conferir;\n\nif (p.data){\n    msg.payload=  [\n            { \"$group\": {\n                  \"_id\": \"procuraData\",\n                \"debito\": { \"$sum\": {\n                        \"$cond\": {\n                                if: { \n                                    $and: [ \n                                        { \"$eq\": [ \"$data\" , p.data ] }, \n                                        { \"$eq\": [ \"$conta\", p.conta] }, \n                                    ] \n                                },then:\"$debito\" , else: 0 }\n                }            },\n                \"credito\": { \"$sum\": {\n                        \"$cond\": {\n                                if: { \n                                    $and: [ \n                                        { \"$eq\": [ \"$data\" , p.data ] }, \n                                        { \"$eq\": [ \"$conta\", p.conta] }, \n                                    ] \n                                },then:\"$credito\" , else: 0 }\n                }            },\n                \"valor\": { \"$sum\": {\n                        \"$cond\": {\n                                if: { \n                                    $and: [ \n                                        { \"$eq\": [ \"$data\" , p.data ] }, \n                                        { \"$eq\": [ \"$conta\", p.conta] }, \n                                    ] \n                                },then:\"$valor\" , else: 0 }\n                }            },\n                \"count\": { \"$sum\": {\n                        \"$cond\": {\n                                if: { \n                                    $and: [ \n                                        { \"$eq\": [ \"$data\" , p.data ] }, \n                                        { \"$eq\": [ \"$conta\", p.conta] }, \n                                    ] \n                                },then:1 , else: 0 }\n                }            } \n            }}\n    ]\n    msg2.payload = p.conta.toString(); \n\n} else {\n    msg.payload= [\n            { \"$group\": {\n                  \"_id\": \"procura\",\n                \"debito\": { \"$sum\": {\n                        \"$cond\": [ { \"$eq\": [ \"$conta\", p.conta ] }, \"$debito\"  , 0 ]} },\n                \"credito\": { \"$sum\": {\n                        \"$cond\": [ { \"$eq\": [ \"$conta\", p.conta ] }, \"$credito\" , 0 ]} },\n                \"valor\": { \"$sum\": {\n                        \"$cond\": [ { \"$eq\": [ \"$conta\", p.conta ] }, \"$valor\"   , 0 ]} },       \n                \"count\": { \"$sum\": {\n                        \"$cond\": [ { \"$eq\": [ \"$conta\", p.conta ] }, 1          , 0 ]} }\n              }}\n    ]\n}              \n    return [msg, msg2];\n\n\n      /*{\n        \"$filter\": {\n               \"input\": \"$conta\",\n               \"as\": \"conta\",\n                \"$cond\": [ { \"$eq\": [ \"$conta\", p.conta]}, \"sim\"    ,\"nao\"]}\n        },\n        { \"$group\": {\n            \"_id\": \"data\",\n            \"debito\": { \"$sum\": {\"$cond\": [{\"$and\": { \"$eq\": [ \"$data\", p.data ], \"$eq\": [ \"$conta\", p.conta]} } , \"$debito\"  , 0 ]} },\n            \"credito\":{ \"$sum\": {\"$cond\": [{\"$and\": { \"$eq\": [ \"$data\", p.data ], \"$eq\": [ \"$conta\", p.conta]} } , \"$credito\" , 0 ]} },\n            \"valor\" : { \"$sum\": {\"$cond\": [{\"$and\": { \"$eq\": [ \"$data\", p.data ], \"$eq\": [ \"$conta\", p.conta]} } , \"$valor\"   , 0 ]} },\n            \"count\" : { \"$sum\": {\"$cond\": [{\"$and\": { \"$eq\": [ \"$data\", p.data ], \"$eq\": [ \"$conta\", p.conta]} } , \"$cond\"    , 0 ]} },\n        }}*/\n\n// MongoBuster\n/*db.lancamentos.aggregate({\n       $group: {\n            _id: 'procura',\n            debito:{ $sum: {\n                    \"$cond\": [ { \"$eq\": [ \"$conta\", \"9efb1ad7-c65c-46e7-9d3e-e66f1e2b33e3\" ] }, \"$debito\", 0 ]}},\n            credito:{ $sum: {\n                    \"$cond\": [ { \"$eq\": [ \"$conta\", \"9efb1ad7-c65c-46e7-9d3e-e66f1e2b33e3\" ] }, \"$credito\", 0 ]}},\n            valor: {  $sum: {\n                    \"$cond\": [ { \"$eq\": [ \"$conta\", \"9efb1ad7-c65c-46e7-9d3e-e66f1e2b33e3\" ] }, \"$valor\", 0 ]}},\n            count: { $sum: {\n                    \"$cond\": [ { \"$eq\": [ \"$conta\", \"9efb1ad7-c65c-46e7-9d3e-e66f1e2b33e3\" ] }, 1, 0 ]}},\n        },\n    })*/","outputs":"2","noerr":0,"x":572,"y":1382,"wires":[["d6494ee5.5706a8"],["d099430a.52b6"]]},{"id":"5af0a080.12489","type":"debug","z":"24d33ccd.b58f84","name":"retorno lanacamento","active":true,"console":"false","complete":"payload","x":1035.4285888671875,"y":1376.2857666015625,"wires":[]},{"id":"c7119fb3.6c42a8","type":"function","z":"24d33ccd.b58f84","name":"Variaveis Globais","func":"//Estado inicial da maquina é não inicializada MaqInicializada=0\nglobal.set(\"ComandoMaquina\",0);//liberamensagens do bloco libera maquina\nglobal.set(\"MotorPrensa\",0);\nglobal.set(\"MotorLigado\",0);\nglobal.set(\"MotorInvertido\",0);\nglobal.set(\"Desbobinador\",0);\nglobal.set(\"Indice_Mongo\",0);\nglobal.set(\"TamanhoDesejadoPeca_KEYBOARD\",0);\nglobal.set(\"TamanhoRealPeca_KEYBOARD\",0);\nglobal.set(\"FatorEncoder\",9909);\nglobal.set(\"ModBus\",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);\nvar start = new Date().getTime();\nglobal.set(\"tempo\",start);\n\nvar mensagens = [];\n\nmensagens['LER_CLP_MODBUS'] = { type: 'error', message: ' CLP não responde. Verifique as conexões de rede.' };\nmensagens['EMERGENCIA'] = { type: 'error', message: ' Emergencia acionada!' };\nmensagens['FALTA_FASE'] = { type: 'error', message: ' Falta de Fase' };\nmensagens['BOMBA_HIDRAULICA'] = { type: 'error', message: ' Térmico da Bomba Hidraulica' };\nmensagens['MARTELO_PRENSA'] = { type: 'error', message: ' Térmico do Motor do Martelo Prensa' };\nmensagens['PRESSAO_AR'] = { type: 'warning', message: 'Pressao do Ar Baixa!' };\nmensagens['INVERSOR'] = { type: 'error', message: ' Erro no Inversor' };\nmensagens['SERVO'] = { type: 'error', message: ' Erro no Servo' };\nmensagens['CHAVE_GERAL_DESLIGADA'] = { type: 'warning', message: ' Chave Geral Desligada' };\nmensagens['CHAVE_GERAL_LIGADA'] = { type: 'warning', message: ' Chave Geral ligada' };\nmensagens['MAQUINA_NAO_LIBERADA'] = { type: 'warning', message: ' Maquina Não Liberada' };\nmensagens['MAQUINA_LIBERADA'] = { type: 'warning', message: ' Maquina Liberada' };\nmensagens['ERRO_POSICIONAMENTO']= { type: 'error', message: ' Erro Posicionamento' };\nmensagens['SEGURAN_PRENSA'] = { type: 'info', message: ' Segurança da Prensa' };\nmensagens['APLAN_ABERTA'] = { type: 'info', message: ' Aplanadora Aberda' };\n\nglobal.set(\"mensagens\",mensagens);\nmsg= {payload: \"{MAQUINA_OFF:0}\"};\nreturn msg;","outputs":1,"noerr":0,"x":3084.2857627868652,"y":3418.09508562088,"wires":[["e667ad44.f34d7"]]},{"id":"5d15c3a6.ea5c1c","type":"function","z":"24d33ccd.b58f84","name":"Erro comunicação","func":"var mensagens = global.get(\"mensagens\");\n//var modbus = global.get(\"ModBus\");\n\nmsg.payload = mensagens['LER_CLP_MODBUS'];\nmsg.payload.time= new Date();\n\n//global.set('ModBus', modbus);\nreturn msg;","outputs":1,"noerr":0,"x":2808.995143890381,"y":3358.4392323493958,"wires":[["c7119fb3.6c42a8"]]},{"id":"fc8f51ab.6ff338","type":"link out","z":"24d33ccd.b58f84","name":"Atualizacao dos 32 registradores ModBus","links":["5a7c746d.ddca74","278b8d9f.332cc2","3292c332.e62afc","17d59d24.8682a3","fded0008.003bb8","91bb35aa.506f38","7a9f7416.07fd14","ffc2b971.50fa4","777bd47b.b983dc","a99b0250.54b63"],"x":3463.7650966644287,"y":3328.0264225006104,"wires":[]},{"id":"70b817b7.4fac6","type":"switch","z":"24d33ccd.b58f84","name":"i<7","property":"i","propertyType":"msg","rules":[{"t":"eq","v":"0","vt":"str"},{"t":"eq","v":"1","vt":"str"},{"t":"eq","v":"2","vt":"str"},{"t":"eq","v":"3","vt":"str"},{"t":"eq","v":"4","vt":"str"},{"t":"eq","v":"5","vt":"str"},{"t":"else"}],"checkall":"true","outputs":7,"x":2978.1212730407715,"y":3215.082113265991,"wires":[["f5d6cd0.098d3b"],["e0462430.5e43d8"],["a7106286.19a74"],["53f96a4.8037214"],["9889695a.08b71"],["41fff06c.866528"],["e0564aa6.b559e8"]]},{"id":"9ee1ee4e.4ee858","type":"function","z":"24d33ccd.b58f84","name":"i++","func":"msg.i++;\n\nreturn msg;","outputs":1,"noerr":0,"x":3118.9821701049805,"y":2980.165439605713,"wires":[["70b817b7.4fac6"]]},{"id":"f5d6cd0.098d3b","type":"function","z":"24d33ccd.b58f84","name":"ALARMES E MENSAGENS HTML","func":"var mensagens = global.get(\"mensagens\");\nvar modbus = msg.payload;\nvar msg2 ={\n //_msgid: msg._msgid,\n payload: msg.payload\n};\n\n//msg.payload = msg.i;\n\nif (msg2.payload[0] & (1 << 0)) {\n msg2.payload = mensagens['EMERGENCIA'];\n} else if (msg2.payload[0] & (1 << 1)) {\n msg2.payload = mensagens['FALTA_FASE'];\n} else if (msg2.payload[0] & (1 << 2)) {\n msg2.payload = mensagens['BOMBA_HIDRAULICA'];\n} else if (msg2.payload[0] & (1 << 3)) {\n msg2.payload = mensagens['MARTELO_PRENSA'];\n} else if (msg2.payload[0] & (1 << 4)) {\n msg2.payload = mensagens['PRESSAO_AR'];\n} else if (msg2.payload[0] & (1 << 5)) {\n msg2.payload = mensagens['INVERSOR'];\n} else if (msg2.payload[0] & (1 << 6)) {\n msg2.payload = mensagens['SERVO'];\n} else if ((msg2.payload[0] & (1 << 7)))/*||(msg.payload[2] &= ~(1 << 11)))*/ {\n msg2.payload = mensagens['CHAVE_GERAL_DESLIGADA'];\n} else if (msg2.payload[0] & (1 << 9)) {\n msg2.payload = mensagens['ERRO_POSICIONAMENTO'];\n} else if (msg2.payload[0] & (1 << 10)) {\n msg2.payload = mensagens['SEGURAN_PRENSA'];\n} else if (msg2.payload[1] & (1 << 12)) {\n msg2.payload = mensagens['APLAN_ABERTA'];\n} else if (msg2.payload[0] & (1 << 8)) {\n msg2.payload = mensagens['MAQUINA_NAO_LIBERADA'];\n} else {\n if((global.get(\"MotorInvertido\"))==1){\n msg2.payload = { type: 'info', message: ' Motor Invertido!!!'};\n }else{\n msg2.payload = { type: 'info', message: ' Maquina OK'};\n }\n \n}\n\n\nmsg2.payload.time= new Date();\nreturn [msg, msg2];","outputs":"2","noerr":0,"x":3252.6627922058105,"y":3106.6654624938965,"wires":[["9ee1ee4e.4ee858"],["eb814dfd.c851b"]]},{"id":"a6ba4721.4e09a8","type":"function","z":"24d33ccd.b58f84","name":"loop leitura i=0","func":"global.set(\"ModBus\",msg.payload);\nmsg.i =0;\nreturn msg;","outputs":1,"noerr":0,"x":2800.454521179199,"y":3214.8877124786377,"wires":[["70b817b7.4fac6"]]},{"id":"e0462430.5e43d8","type":"function","z":"24d33ccd.b58f84","name":"APLANADORA FECHADA HTML","func":"var msg2 ={\n //_msgid: msg._msgid,\n payload: global.get(\"ModBus\")\n};\n\n//msg.payload = msg.i;\n\nif (msg2.payload[1] & (1 << 12)) {\n msg2= {\n payload: { \n APLANADORA_FECHADA:0\n }\n };\n } else{\n msg2= {\n payload: {\n APLANADORA_FECHADA:1\n }\n };\n }\n\nreturn [msg, msg2];","outputs":"2","noerr":0,"x":3252.763008117676,"y":3142.460048675537,"wires":[["9ee1ee4e.4ee858"],[]]},{"id":"a7106286.19a74","type":"function","z":"24d33ccd.b58f84","name":"ATUALIZA MAQ LIGADA HTML","func":"var msg2 ={\n //_msgid: msg._msgid,\n payload: global.get(\"ModBus\")\n};\n\n//msg.payload = msg.i;\nif (msg2.payload[2] & (1 << 11 )) {\n msg2= {\n payload: { \n MAQUINA_ON:1\n }\n };\n } else{\n msg2= {\n payload: {\n MAQUINA_ON:0\n }\n };\n }\n\nreturn [msg, msg2];","outputs":"2","noerr":0,"x":3242.2599487304688,"y":3179.693232536316,"wires":[["9ee1ee4e.4ee858"],[]]},{"id":"e0564aa6.b559e8","type":"function","z":"24d33ccd.b58f84","name":"Loop Finished","func":"msg.payload=global.get(\"ModBus\");\nreturn msg;","outputs":1,"noerr":0,"x":3192.5934524536133,"y":3327.915467739105,"wires":[["757a42c9.313c64"]]},{"id":"757a42c9.313c64","type":"function","z":"24d33ccd.b58f84","name":"Delay 300ms","func":"setTimeout(function() {\n node.send(msg);\n}, 300);\nreturn null;","outputs":1,"noerr":0,"x":3360.8823776245117,"y":3327.67103767395,"wires":[["fc8f51ab.6ff338"]]},{"id":"e667ad44.f34d7","type":"function","z":"24d33ccd.b58f84","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3358.853889465332,"y":3418.0138988494873,"wires":[[]]},{"id":"cd4f68a0.1aea6","type":"link in","z":"24d33ccd.b58f84","name":"loop escrita","links":["66208d3c.8011a4"],"x":3986.982421875,"y":3287.437713623047,"wires":[["81c67029.239f08"]]},{"id":"81c67029.239f08","type":"function","z":"24d33ccd.b58f84","name":"Delay 100ms","func":"setTimeout(function() {\n node.send(msg);\n}, 100);\nreturn null;","outputs":1,"noerr":0,"x":4092.982421875,"y":3287.387725830078,"wires":[[]]},{"id":"81ca6f21.ae218","type":"debug","z":"24d33ccd.b58f84","name":"consulta","active":false,"console":"false","complete":"payload","x":3979.553955078125,"y":3433.2092666625977,"wires":[]},{"id":"ff9f46cc.00a74","type":"debug","z":"24d33ccd.b58f84","name":"loop6","active":false,"console":"false","complete":"true","x":3907.609390258789,"y":3175.032145500183,"wires":[]},{"id":"53f96a4.8037214","type":"function","z":"24d33ccd.b58f84","name":"ATUALIZA MAQ ERRO POS HTML","func":"//M19\nvar msg2 ={ payload: global.get(\"ModBus\")};\n\nmsg2 = {\n payload: {\n ERRO_POS: msg2.payload[19] \n }\n};\n\n \nreturn [msg, msg2];","outputs":"2","noerr":0,"x":3252.482421875,"y":3215.25439453125,"wires":[["9ee1ee4e.4ee858"],[]]},{"id":"9889695a.08b71","type":"function","z":"24d33ccd.b58f84","name":"ATUALIZA MAQ POS ATUAL HTML","func":"//M5\nvar msg2 ={ payload: global.get(\"ModBus\")};\n\nmsg2= {\n payload:{\n POS_ATUAL: msg2.payload[5] \n \n}};\n\n \nreturn [msg, msg2];","outputs":"2","noerr":0,"x":3261.482421875,"y":3253.25439453125,"wires":[["9ee1ee4e.4ee858"],[]]},{"id":"41fff06c.866528","type":"function","z":"24d33ccd.b58f84","name":"ATUALIZA MAQ","func":"//M5\nvar msg2 ={ payload: global.get(\"ModBus\")};\n\nvar ciclos = msg2.payload[23];\nvar Mciclos =((1000)*(msg2.payload[24]));\n\n\nmsg2= {\n payload:{\n PRENSA_CICLOS:(ciclos+Mciclos)\n}};\n\n \nreturn [msg, msg2];","outputs":"2","noerr":0,"x":3191.782470703125,"y":3290.9544067382812,"wires":[["9ee1ee4e.4ee858"],[]]},{"id":"567c29d2.c642a","type":"delay","z":"24d33ccd.b58f84","name":"","pauseType":"delay","timeout":"2","timeoutUnits":"seconds","rate":"1","nbRateUnits":"","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":2838.9324340820312,"y":3417.5377502441406,"wires":[["c7119fb3.6c42a8"]]},{"id":"1fb884a6.b584c3","type":"function","z":"24d33ccd.b58f84","name":"indice +1","func":"//Carrega variavel global indice em y\nvar y = global.get(\"Indice_Mongo\");\n\n//monta a mensagem\nmsg.query = { _id: 'indice' }\nmsg.payload = {\n $set: {\n \"indice_mesagens\": parseInt(y)\n }\n}\n\nreturn msg;\n","outputs":1,"noerr":0,"x":3926.528633117676,"y":3041.879961013794,"wires":[[]]},{"id":"eb814dfd.c851b","type":"function","z":"24d33ccd.b58f84","name":"mudar 1 item apenas","func":"var x = msg.payload;\n\nvar y = global.get(\"Indice_Mongo\");\n\nif (y <= 999){\n msg.query = { _id: y };\n msg.payload = {\n $set: {\n \"log_mesagens\": x\n }\n };\n y++;\n global.set(\"Indice_Mongo\",y);\n} else{\n global.set(\"Indice_Mongo\",1);\n msg.query = { _id: 1 };\n msg.payload = {\n $set: {\n \"log_mesagens\": x\n }\n };\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3651.059700012207,"y":3113.61669921875,"wires":[["ff9f46cc.00a74","1fb884a6.b584c3"]]},{"id":"12adcef9.bd9891","type":"exec","z":"24d33ccd.b58f84","command":"\"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe\"","addpay":false,"append":"","useSpawn":false,"timer":"","name":"chrome","x":117.5,"y":3092.5,"wires":[["d3d27a4d.576e5"],["c13249cc.ae06b"],["6329372d.f29bf8"]]},{"id":"d3d27a4d.576e5","type":"function","z":"24d33ccd.b58f84","name":"toString()","func":"msg.payload = msg.payload.toString()\nreturn msg;","outputs":1,"noerr":0,"x":294.1667175292969,"y":3029.7999877929688,"wires":[["3db8e10b.3ac4e6"]]},{"id":"3db8e10b.3ac4e6","type":"debug","z":"24d33ccd.b58f84","name":"output","active":true,"console":"false","complete":"payload","x":453.1667175292969,"y":3029.7999877929688,"wires":[]},{"id":"c13249cc.ae06b","type":"function","z":"24d33ccd.b58f84","name":"rc","func":"if (msg.control && (msg.control.state == 'end' || msg.control.state == 'error')) return { payload: msg.control.rc }","outputs":1,"noerr":0,"x":286.1667175292969,"y":3093.7999877929688,"wires":[["fa95c6f1.9a4158"]]},{"id":"fa95c6f1.9a4158","type":"debug","z":"24d33ccd.b58f84","name":"rc","active":true,"console":"false","complete":"payload","x":446.1667175292969,"y":3093.7999877929688,"wires":[]},{"id":"6329372d.f29bf8","type":"function","z":"24d33ccd.b58f84","name":"toString()","func":"msg.payload = msg.payload.toString()\nreturn msg;","outputs":1,"noerr":0,"x":291.1667175292969,"y":3155.7999877929688,"wires":[["ede85ab7.46b618"]]},{"id":"ede85ab7.46b618","type":"debug","z":"24d33ccd.b58f84","name":"output2","active":true,"console":"false","complete":"payload","x":469.1667175292969,"y":3156.7999877929688,"wires":[]},{"id":"d6494ee5.5706a8","type":"mongodb in","z":"24d33ccd.b58f84","mongodb":"93de4217.3481c","name":"Carrega valores","collection":"lancamentos","operation":"aggregate","x":801.0000610351562,"y":1375.9999389648438,"wires":[["5af0a080.12489"]]},{"id":"d536dda5.24108","type":"inject","z":"24d33ccd.b58f84","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":351.5,"y":1427,"wires":[["7dcce0c.c6e0da"]]},{"id":"c9a21999.2b782","type":"comment","z":"24d33ccd.b58f84","name":"Consultas Pesquisar","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":707.75,"y":1338.75,"wires":[]},{"id":"d099430a.52b6","type":"debug","z":"24d33ccd.b58f84","name":"","active":true,"console":"false","complete":"false","x":793.125,"y":1430.5,"wires":[]},{"id":"59583542.cf182c","type":"mqtt-broker","z":"24d33ccd.b58f84","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"93de4217.3481c","type":"mongodb","z":"","hostname":"127.0.0.1","port":"27017","db":"db","name":""}]
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
 * Copyright JS Foundation and other contributors, http://js.foundation
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

    // Colourise the console output of the debug node
    //debugUseColors: true,

    // The file containing the flows. If not set, it defaults to flows_<hostname>.json
    //flowFile: 'flows.json',

    // To enabled pretty-printing of the flow within the flow file, set the following
    //  property to true:
    //flowFilePretty: true,

    // By default, credentials are encrypted in storage using a generated key. To
    // specify your own secret, set the following property.
    // If you want to disable encryption of credentials, set this property to false.
    // Note: once you set this property, do not change it - doing so will prevent
    // node-red from being able to decrypt your existing credentials and they will be
    // lost.
    //credentialSecret: "a-secret-key",

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

    // The maximum size of HTTP request that will be accepted by the runtime api.
    // Default: 5mb
    //apiMaxLength: '5mb',

    // If you installed the optional node-red-dashboard you can set it's path
    // relative to httpRoot
    //ui: { path: "ui" },

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

    // The following property can be used to cause insecure HTTP connections to
    // be redirected to HTTPS.
    //requireHttps: true

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
    //    // Handle/reject the request, or pass it on to the http in node by calling next();
    //    // Optionally skip our rawBodyParser by setting this to true;
    //    //req.skipRawBodyParser = true;
    //    next();
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

Put username: "admin" and password ... 

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

    use db 					                  <--Create a database called db. If exists it enters in the collection.
    db.createCollection('parametros')	<--Create a collection called parametros
    db.createCollection('log_erro')		<--Create a collection called log_erro
    db.createCollection('indice')		  <--Create a collection called indice
    db.createCollection('lancamentos')		<--Create a collection called lancamentos
    db.createCollection('contas')		  <--Create a collection called contas
    show dbs 				                  <--Show names of banks and their sizes
    show collections			            <--Displays the collections in the current bank
    exit					                    <--Exit to mongo shell or **Ctrl + C**

Installing the service for MongoDB automatically start on Windows **boot**.

Enter the directory where is installed the binaries and run the command.

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --config "c:\data\mongod.cfg" --install
    
If your system is Windows 32bits

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --journal --config "c:\data\mongod.cfg" --install
    
I use as webadmin the "**mongobooster**"

** MongoDB in Linux **

Step 1 — Adding the MongoDB Repository

MongoDB is already included in Ubuntu package repositories, but the official MongoDB repository provides most up-to-date version and is the recommended way of installing the software. In this step, we will add this official repository to our server.

Ubuntu ensures the authenticity of software packages by verifying that they are signed with GPG keys, so we first have to import they key for the official MongoDB repository.
    
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

After successfully importing the key, you will see the output:

    gpg: Total number processed: 1
    gpg:               imported: 1  (RSA: 1)
    
Create a /etc/apt/sources.list.d/mongodb-org-3.4.list file for MongoDB.
**Ubuntu 16.04**

    echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

**Debian 8 “Jessie”**

    echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list


Reload local package database.

Issue the following command to reload the local package database:

    sudo apt-get update


Install the MongoDB packages.

    sudo apt-get install -y mongodb-org
    
We'll create a unit file to manage the MongoDB service. Create a configuration file named mongodb.service in the /etc/systemd/system directory using nano or your favorite text editor.

    sudo nano /etc/systemd/system/mongodb.service

Paste in the following contents, then save and close the file.

    [Unit]
    Description=High-performance, schema-free document-oriented database
    After=network.target

    [Service]
    User=mongodb
    ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

    [Install]
    WantedBy=multi-user.target

Next, start the newly created service with systemctl
    
    sudo systemctl start mongodb

While there is no output to this command, you can also use systemctl to check that the service has started properly.

    sudo systemctl status mongodb

The last step is to enable automatically starting MongoDB when the system starts.

    sudo systemctl enable mongodb
    
In most cases, MongoDB should be accessed only from certain trusted locations, such as another server hosting an application. To accomplish this task, you can allow access on MongoDB's default port while specifying the IP address of another server that will be explicitly allowed to connect.

    sudo ufw allow from your_other_server_ip/32 to any port 27017

You can verify the change in firewall settings with ufw.

    sudo ufw status
    
How to Install MongoDB on Ubuntu 
  https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

** How to inicialize all programs on boot **
On windows with file.bat

    REM ACTIVEMQ START
    start /MIN /D "c:\Desenvolvimento\apache-activemq-5.14.1-bin\bin" cmd /k activemq start

    REM NODE-RED
    start /MIN /D "c:\Program Files\nodejs" cmd /k node-red -v

    REM REACT-CREAT-APP
    start /D "c:\Desenvolvimento\git\React\react-node-red" cmd /k npm start

On linux
    
    https://www.vivaolinux.com.br/dica/Colocando-script-na-inicializacao-do-Linux-(Ubuntu-Debian)
    
** GIT Ubuntu **
    
    git commit -a
    git push origin master


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
[14]:https://github.com/nodesource/distributions#debinstall
[15]:https://www.digitalocean.com/community/tutorials/how-to-connect-your-internet-of-things-with-node-red-on-ubuntu-16-04

