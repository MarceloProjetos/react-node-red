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
[{"id":"4e06ac9d.2d2f6c","type":"subflow","name":"Servidor WEB REACT","info":"","in":[],"out":[]},{"id":"9a11c02d.e4655","type":"http response","z":"4e06ac9d.2d2f6c","name":"","x":881.0000152587891,"y":143.11666870117188,"wires":[]},{"id":"c9ca5985.f045a","type":"http in","z":"4e06ac9d.2d2f6c","name":"Index","url":"/","method":"get","swaggerDoc":"","x":130.44437281290675,"y":143.22773064507373,"wires":[["96eaf854.ac84f"]]},{"id":"96eaf854.ac84f","type":"file in","z":"4e06ac9d.2d2f6c","name":"index.HTML","filename":"C:/Desenvolvimento/git/React/react-node-red/build/index.html","format":"utf8","x":518.5554885864258,"y":143.3388433456421,"wires":[["ec069e1a.48eaa"]]},{"id":"7229197.1a41a68","type":"http response","z":"4e06ac9d.2d2f6c","name":"","x":881.4445012410488,"y":263.78331756591797,"wires":[]},{"id":"533846d9.217eb8","type":"function","z":"4e06ac9d.2d2f6c","name":"Text/CSS","func":"msg.headers = { \"Content-type\" : \"text/css\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":719.9999122619629,"y":263.6721706390381,"wires":[["7229197.1a41a68"]]},{"id":"96b4f59b.fb6bd","type":"comment","z":"4e06ac9d.2d2f6c","name":"HTML","info":"","x":130,"y":107.11664390563965,"wires":[]},{"id":"a5cdfab5.df7a48","type":"comment","z":"4e06ac9d.2d2f6c","name":"CSS folder","info":"","x":140.88881301879883,"y":227.22790336608887,"wires":[]},{"id":"d3e1da2d.9faae","type":"comment","z":"4e06ac9d.2d2f6c","name":"JAVASCRIPT folder","info":"","x":170.33331298828125,"y":306.67241764068604,"wires":[]},{"id":"4693cdc5.dfe684","type":"http response","z":"4e06ac9d.2d2f6c","name":"","x":881.4444630940761,"y":344.2277374267578,"wires":[]},{"id":"66244040.b1409","type":"http in","z":"4e06ac9d.2d2f6c","name":"Scripts","url":"/static/js/:file","method":"get","swaggerDoc":"","x":130.88882064819336,"y":344.3387993706597,"wires":[["7e71e724.cd49f"]]},{"id":"804aa582.350a9","type":"comment","z":"4e06ac9d.2d2f6c","name":"media folder","info":"","x":150.11099243164062,"y":393.3388156890869,"wires":[]},{"id":"fc124209.f6e248","type":"http response","z":"4e06ac9d.2d2f6c","name":"","x":880.6666920979824,"y":428.6723403930664,"wires":[]},{"id":"baa50a45.58ba4","type":"http in","z":"4e06ac9d.2d2f6c","name":"fonts","url":"/static/media/:file","method":"get","swaggerDoc":"","x":130.1110496520996,"y":428.78340233696827,"wires":[["47c50b5d.3886fc"]]},{"id":"c196594e.1a425","type":"function","z":"4e06ac9d.2d2f6c","name":"webfont","func":"msg.headers = { \"Content-type\" : \"font/opentype\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":721.888843536377,"y":428.5612277984619,"wires":[["fc124209.f6e248"]]},{"id":"ec069e1a.48eaa","type":"function","z":"4e06ac9d.2d2f6c","name":"Text/HTML","func":"msg.headers = { \"Content-type\" : \"text/html\" }\n\nreturn msg;","outputs":1,"noerr":0,"x":728.8332672119141,"y":143.1378173828125,"wires":[["9a11c02d.e4655"]]},{"id":"b1bf4578.82ab5","type":"http in","z":"4e06ac9d.2d2f6c","name":"CSS Files","url":"/static/css/:file","method":"get","swaggerDoc":"","x":141.79631423950195,"y":263.4019478691948,"wires":[["d89cc8cb.8a7068"]]},{"id":"d89cc8cb.8a7068","type":"function","z":"4e06ac9d.2d2f6c","name":"files","func":"msg.filename = 'C:\\\\Desenvolvimento\\\\git\\\\React\\\\react-node-red\\\\build\\\\static\\\\css\\\\' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":374.01855850219727,"y":263.1797799004448,"wires":[["ed74366b.6852e"]]},{"id":"ed74366b.6852e","type":"file in","z":"4e06ac9d.2d2f6c","name":"","filename":"","format":"","x":540.240795135498,"y":263.2909478081597,"wires":[["533846d9.217eb8","77e4bc53.6c525c"]]},{"id":"7e71e724.cd49f","type":"function","z":"4e06ac9d.2d2f6c","name":"files","func":"msg.filename = 'C:\\\\Desenvolvimento\\\\git\\\\React\\\\react-node-red\\\\build\\\\static\\\\js\\\\' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":374.01855850219727,"y":345.7353218926323,"wires":[["6877f87a.e2e42"]]},{"id":"47c50b5d.3886fc","type":"function","z":"4e06ac9d.2d2f6c","name":"files","func":"msg.filename = 'C:\\\\Desenvolvimento\\\\git\\\\React\\\\react-node-red\\\\build\\\\static\\\\media\\\\' + msg.req.params.file;\nreturn msg;","outputs":1,"noerr":0,"x":377.351863861084,"y":428.51302040947803,"wires":[["28487c9e.9b0a2c"]]},{"id":"6877f87a.e2e42","type":"file in","z":"4e06ac9d.2d2f6c","name":"","filename":"","format":"","x":540.685245513916,"y":345.1797799004448,"wires":[["52932e5a.fba58","4693cdc5.dfe684"]]},{"id":"52932e5a.fba58","type":"debug","z":"4e06ac9d.2d2f6c","name":"FIles JS","active":false,"console":"false","complete":"filename","x":720.5741500854492,"y":383.9576100243462,"wires":[]},{"id":"28487c9e.9b0a2c","type":"file in","z":"4e06ac9d.2d2f6c","name":"","filename":"","format":"","x":542.907413482666,"y":428.2907418145073,"wires":[["e638760c.6bfff","c196594e.1a425"]]},{"id":"e638760c.6bfff","type":"debug","z":"4e06ac9d.2d2f6c","name":"Fonts Files","active":false,"console":"false","complete":"filename","x":733.7963180541992,"y":473.0685719384087,"wires":[]},{"id":"ee963e1e.17b8a8","type":"http response","z":"4e06ac9d.2d2f6c","name":"","x":880.4445470174155,"y":180.67965783013233,"wires":[]},{"id":"1eb55df1.563392","type":"http in","z":"4e06ac9d.2d2f6c","name":"Bootstrap","url":"/","method":"get","swaggerDoc":"","x":138.8889045715332,"y":180.7907197740342,"wires":[["1f6818a2.30b07f"]]},{"id":"1f6818a2.30b07f","type":"file in","z":"4e06ac9d.2d2f6c","name":"boostrap.min","filename":"C:/Desenvolvimento/git/React/react-node-red/build/boostrap.min","format":"utf8","x":517.0000203450522,"y":180.90183247460254,"wires":[["c75b7412.c65d58"]]},{"id":"c75b7412.c65d58","type":"function","z":"4e06ac9d.2d2f6c","name":"Text/CSS","func":"msg.headers = { \"Content-type\" : \"text/css\" }\n \nreturn msg;","outputs":1,"noerr":0,"x":719.0185508728027,"y":180.45741070641407,"wires":[["ee963e1e.17b8a8"]]},{"id":"77e4bc53.6c525c","type":"debug","z":"4e06ac9d.2d2f6c","name":"CSS files","active":false,"console":"false","complete":"true","x":720.9074745178223,"y":308.5130318535698,"wires":[]},{"id":"97e6fcc5.2f96a8","type":"comment","z":"4e06ac9d.2d2f6c","name":"Servidor WEB","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":558.4629592895508,"y":90.56844806671143,"wires":[]},{"id":"a62d4be1.d0b9a","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/contas/incluir/#","qos":"0","broker":"5b29e174.c129c","x":269.11668395996094,"y":124.01478004455566,"wires":[["add0c027.d922c"]]},{"id":"add0c027.d922c","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":538.1166839599609,"y":124.01478004455566,"wires":[["81d4b7c3.082778","33f4c3df.2d267c"]]},{"id":"f67ae4cd.ee3e8","type":"debug","z":"4ae74d11.25520c","name":"Incluir + ID","active":false,"console":"false","complete":"payload","x":1158.3666229248047,"y":125.76478004455566,"wires":[]},{"id":"23273737.b90af","type":"mqtt out","z":"4ae74d11.25520c","name":"contas/carregado/","topic":"financeiro/cadastro/contas/carregado/","qos":"0","retain":"","broker":"5b29e174.c129c","x":1180.8428802490234,"y":490.74317359924316,"wires":[]},{"id":"81d4b7c3.082778","type":"mqtt out","z":"4ae74d11.25520c","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":764.6459503173828,"y":124.29398536682129,"wires":[]},{"id":"cbec48fe.f8c888","type":"function","z":"4ae74d11.25520c","name":"mudar 1 socio apenas","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $set: {\n \"parametros.encoder.fator\": 2225\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3232.827606201172,"y":2084.253788948059,"wires":[["e7d446d6.326628"]]},{"id":"e7d446d6.326628","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"update only one","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3492.827590942383,"y":2084.6537828445435,"wires":[]},{"id":"987c70a8.fe4058","type":"inject","z":"4ae74d11.25520c","name":"String vazia","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2934.860382080078,"y":2304.0981464385986,"wires":[["f047d899.dd7cd"]]},{"id":"4c202b5e.3b40d4","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"consulta","collection":"contas","operation":"find","x":3453.82755279541,"y":2304.453642845154,"wires":[["bee5464e.406028"]]},{"id":"bee5464e.406028","type":"debug","z":"4ae74d11.25520c","name":"resposta do MongoDB","active":true,"console":"false","complete":"payload","x":3737.9385948181152,"y":2304.5647983551025,"wires":[]},{"id":"4079c0f7.cad5a","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"APAGAR TODA A COLLECTION cadastroErros","collection":"cadastroErros","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3353.6050720214844,"y":1707.4758138656616,"wires":[]},{"id":"d8833634.a05eb8","type":"inject","z":"4ae74d11.25520c","name":"LIMPAR coleção cadastroErros","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2996.3586196899414,"y":1708.2028694152832,"wires":[["4079c0f7.cad5a"]]},{"id":"d918c2e.2e0ef4","type":"inject","z":"4ae74d11.25520c","name":"Editar socios","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2935.661144256592,"y":2083.920485496521,"wires":[["cbec48fe.f8c888"]]},{"id":"1f97f2ad.65d655","type":"function","z":"4ae74d11.25520c","name":"indiceErros +1","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $inc: {\n \"os.produzido\": 1\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3266.0496520996094,"y":2211.0314655303955,"wires":[["bc99a2c9.c7b618"]]},{"id":"bc99a2c9.c7b618","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar","collection":"indiceErros","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3464.0496368408203,"y":2211.43145942688,"wires":[]},{"id":"36a92246.7b100e","type":"inject","z":"4ae74d11.25520c","name":"$inc: incrementa","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2942.8831901550293,"y":2210.6981620788574,"wires":[["1f97f2ad.65d655","5ce09e64.719378"]]},{"id":"f047d899.dd7cd","type":"function","z":"4ae74d11.25520c","name":"Paginação ","func":"msg.limit = 5;\nmsg.skip = 0;\nreturn msg;","outputs":1,"noerr":0,"x":3252.271905899048,"y":2304.5129261016846,"wires":[["4c202b5e.3b40d4"]]},{"id":"772954d9.c416dc","type":"comment","z":"4ae74d11.25520c","name":"Paginação e consulta MongoDB","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2971.0497398376465,"y":2268.3647656440735,"wires":[]},{"id":"1d8c66e6.158831","type":"inject","z":"4ae74d11.25520c","name":"Criar estrutura cadastroErros","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2986.4940032958984,"y":1950.7815313339233,"wires":[["8000b11f.26d0c8"]]},{"id":"13a81ddb.cea1f2","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar","collection":"cadastroErros","payonly":true,"upsert":false,"multi":false,"operation":"store","x":3478.851890563965,"y":1950.832363128662,"wires":[]},{"id":"8000b11f.26d0c8","type":"function","z":"4ae74d11.25520c","name":"collection inicial cadastroErros","func":"msg.payload = {\n\t\"_id\": 1,\n\t\"log_mesagens\": {\n\t}\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3261.8608779907227,"y":1950.9371500015259,"wires":[["13a81ddb.cea1f2"]]},{"id":"7dc44c70.c5ef34","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"consulta","collection":"contas","operation":"find","x":3355.716260910034,"y":2384.948169708252,"wires":[["df587f5f.e44db8"]]},{"id":"713dbaaf.a960dc","type":"function","z":"4ae74d11.25520c","name":"lê apenas uma conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"AplanadoraN3\" }\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"parametros.encoder.fator\": 1 }\n\n// Ler 1 valor\nmsg.limit = 1;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":3142.8273315429688,"y":2384.7852001190186,"wires":[["7dc44c70.c5ef34"]]},{"id":"b806579d.528a4","type":"inject","z":"4ae74d11.25520c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2922.841241836548,"y":2384.4481506347656,"wires":[["713dbaaf.a960dc"]]},{"id":"df587f5f.e44db8","type":"function","z":"4ae74d11.25520c","name":"parse(contas)","func":"msg.payload=msg.payload[0].parametros.encoder.fator;\nreturn msg;","outputs":1,"noerr":0,"x":3528.88307762146,"y":2385.364869117737,"wires":[["d7582747.1bb818"]]},{"id":"d7582747.1bb818","type":"debug","z":"4ae74d11.25520c","name":"ler conta x","active":true,"console":"false","complete":"payload","x":3745.2164974212646,"y":2385.3647499084473,"wires":[]},{"id":"873d1800.891828","type":"comment","z":"4ae74d11.25520c","name":"Lê apenas um valor","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2928.0492935180664,"y":2349.364809989929,"wires":[]},{"id":"5ce09e64.719378","type":"function","z":"4ae74d11.25520c","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3255.383056640625,"y":2246.4757528305054,"wires":[["f047d899.dd7cd"]]},{"id":"d5e03a75.a5c4e","type":"comment","z":"4ae74d11.25520c","name":"Contador Produzidos ++ ","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2948.04923248291,"y":2172.364722251892,"wires":[]},{"id":"a9631cee.d062c8","type":"comment","z":"4ae74d11.25520c","name":"Edita apenas 1 registro do banco com $set","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":3000.827163696289,"y":2045.6981191635132,"wires":[]},{"id":"17a96b3b.55287d","type":"comment","z":"4ae74d11.25520c","name":"2- Cria estrutura inicial das coleções","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2981.38272857666,"y":1806.0314559936523,"wires":[]},{"id":"e72bfcc3.1d8528","type":"comment","z":"4ae74d11.25520c","name":"1- Apagar Cuidado","info":"#Resultados de paginação usando skip e limit\n\nMuitas vezes, ao lidar com conjuntos de resultados de dados, \nsó queremos recuperar um subconjunto por vez, talvez para fornecer \nresultados por página da Web. Em MySQL, em geral fazemos isso \nusando a palavra-chave LIMIT. \nÉ fácil replicar essa funcionalidade no MongoDB \nusando msg.skip e msg.limit. \nPara retornar os primeiros cinco documentos na \ncoleção, podemos executar a seguinte operação:\n> msg.limit = 5;<\n\nPara pular resultados, use o seguinte comando:\n\n> msg.skip = 5;<\n\nCom ele é possível iguinorar os primeiros cinco\nregistros. ","x":2932.9381561279297,"y":1567.253610610962,"wires":[]},{"id":"4179943d.018ab4","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"APAGAR TODA A COLLECTION contas","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3333.04931640625,"y":1659.2535848617554,"wires":[]},{"id":"7901c815.203a68","type":"inject","z":"4ae74d11.25520c","name":"LIMPAR coleção contas","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2966.6914672851562,"y":1659.2027883529663,"wires":[["4179943d.018ab4"]]},{"id":"1409157c.8789a3","type":"inject","z":"4ae74d11.25520c","name":"Criar estrutura indice erros","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2976.015998840332,"y":2000.2982339859009,"wires":[["4f335471.8478e4"]]},{"id":"a27cef95.aaa8f","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar","collection":"indiceErros","payonly":true,"upsert":false,"multi":true,"operation":"store","x":3478.9293785095215,"y":1999.7936029434204,"wires":[]},{"id":"4f335471.8478e4","type":"function","z":"4ae74d11.25520c","name":"collection inicial indice erros","func":"msg.payload = {\n\t\"_id\": \"indice\",\n\t\"indice_mesagens\": 0\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3251.3828735351562,"y":2000.1204652786255,"wires":[["a27cef95.aaa8f"]]},{"id":"658f51ae.267b68","type":"inject","z":"4ae74d11.25520c","name":"LIMPAR coleção indice erros","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2986.456787109375,"y":1756.1427030563354,"wires":[["4dd9a879.cb0a28"]]},{"id":"4dd9a879.cb0a28","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"APAGAR TODA A COLLECTION indice erros","collection":"indiceErros","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3345.456787109375,"y":1755.809329032898,"wires":[]},{"id":"ad14f1ea.05f628","type":"comment","z":"4ae74d11.25520c","name":"Consulta MongoDB por string","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":3420.532646179199,"y":1507.081389427185,"wires":[]},{"id":"a2d247f0.79c2d8","type":"function","z":"4ae74d11.25520c","name":"Exemplo de consulta","func":"msg.limit = parseInt(msg.req.query.size) || 10;\nmsg.skip = ((parseInt(msg.req.query.page) || 1) - 1) * (parseInt(msg.req.query.page) || 1);\nmsg.payload = {nome: {'$regex' : msg.payload.nome, '$options' : 'i'}}\nreturn msg;","outputs":1,"noerr":0,"x":3398.31046295166,"y":1469.3037405014038,"wires":[[]]},{"id":"f85d5a9a.755d18","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"APAGAR TODA A COLLECTION socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":3332.1547470092773,"y":1610.8053150177002,"wires":[]},{"id":"4c27f09c.911268","type":"inject","z":"4ae74d11.25520c","name":"LIMPAR coleção socios","topic":"","payload":"{}","payloadType":"json","repeat":"","crontab":"","once":false,"x":2965.7968978881836,"y":1610.7545185089111,"wires":[["f85d5a9a.755d18"]]},{"id":"b01275fe.f9845","type":"inject","z":"4ae74d11.25520c","name":"Criar estrutura socios","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2965.583335876465,"y":1853.4481372833252,"wires":[["46dc2c1d.720834"]]},{"id":"f8b57287.1db59","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"store","x":3476.940933227539,"y":1852.943356513977,"wires":[]},{"id":"46dc2c1d.720834","type":"function","z":"4ae74d11.25520c","name":"collection inicial socios","func":"msg.payload = \n{\n\t\"_id\": \"cdd2f034-3ec9-4d8b-a8c4-b67af29ccc39\",\n\t\"selecionada\": false,\n\t\"banco\": \"NOSSA CAIXA\",\n\t\"conta\": \"00100020003-6\",\n\t\"agencia\": 1653,\n\t\"descricao\": \"Primeiro conta\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":3231.949920654297,"y":1853.0481433868408,"wires":[["f8b57287.1db59"]]},{"id":"9ac1f592.def3f","type":"function","z":"4ae74d11.25520c","name":"mudar 1 conta apenas","func":"msg.query = { _id: 'AplanadoraN3' }\nmsg.payload = {\n $set: {\n \"parametros.encoder.fator\": 2225\n }\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":3233.2975692749023,"y":2131.59095954895,"wires":[["260c9eb7.eb3d22"]]},{"id":"260c9eb7.eb3d22","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"update only one","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"update","x":3493.2975540161133,"y":2131.9909534454346,"wires":[]},{"id":"877fbe85.038fa8","type":"inject","z":"4ae74d11.25520c","name":"Editar Conta","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":2936.1311073303223,"y":2131.257656097412,"wires":[["9ac1f592.def3f"]]},{"id":"e63779b.7eaab88","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"consulta","collection":"socios","operation":"find","x":3355.583335876465,"y":2436.2339038848877,"wires":[["63313a0a.de24f4"]]},{"id":"4998b649.336488","type":"function","z":"4ae74d11.25520c","name":"lê apenas um socio","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"AplanadoraN3\" }\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"parametros.encoder.fator\": 1 }\n\n// Ler 1 valor\nmsg.limit = 1;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":3132.6944065093994,"y":2436.0709342956543,"wires":[["e63779b.7eaab88"]]},{"id":"f1303a44.1d4e88","type":"inject","z":"4ae74d11.25520c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2922.7083168029785,"y":2435.7338848114014,"wires":[["4998b649.336488"]]},{"id":"63313a0a.de24f4","type":"function","z":"4ae74d11.25520c","name":"parse(socios)","func":"msg.payload=msg.payload[0].parametros.encoder.fator;\nreturn msg;","outputs":1,"noerr":0,"x":3528.7501525878906,"y":2436.6506032943726,"wires":[["145f330b.505665"]]},{"id":"145f330b.505665","type":"debug","z":"4ae74d11.25520c","name":"ler socios x","active":true,"console":"false","complete":"payload","x":3745.0835723876953,"y":2436.650484085083,"wires":[]},{"id":"b5fd7a8b.d601b","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/contas/carregar/","qos":"0","broker":"5b29e174.c129c","x":264.6443405151367,"y":489.05366134643555,"wires":[["953e91af.24d18","33044f3.765163"]]},{"id":"2364eb01.df9954","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar conta","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"store","x":1159.3219013214111,"y":183.75368118286133,"wires":[]},{"id":"33f4c3df.2d267c","type":"function","z":"4ae74d11.25520c","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":782.7664947509766,"y":182.81479835510254,"wires":[["920788c6.f5f79"]]},{"id":"920788c6.f5f79","type":"json","z":"4ae74d11.25520c","name":"","x":976.1998443603516,"y":183.2981357574463,"wires":[["2364eb01.df9954","eb848fe0.c53ae","f67ae4cd.ee3e8"]]},{"id":"8d886039.5215d8","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/contas/alterar/#","qos":"0","broker":"5b29e174.c129c","x":265.98326110839844,"y":247.77040672302246,"wires":[["a163377c.16b958","33fd897e.ad28e6"]]},{"id":"a163377c.16b958","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/alterado/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":539.7610168457031,"y":247.770414352417,"wires":[["b95b7dcd.12dbf","33f4c3df.2d267c","5f203c61.af2274"]]},{"id":"b95b7dcd.12dbf","type":"mqtt out","z":"4ae74d11.25520c","name":"alterado/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":762.845890045166,"y":247.60518646240234,"wires":[]},{"id":"eac471a7.a6e2c8","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega lista","collection":"contas","operation":"find","x":762.1387447781035,"y":490.092598385281,"wires":[["23273737.b90af","5a1133a4.241afc"]]},{"id":"953e91af.24d18","type":"function","z":"4ae74d11.25520c","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":544.120231628418,"y":490.2222595214844,"wires":[["eac471a7.a6e2c8","9259c90b.47dfe8"]]},{"id":"f88f1f47.3311f8","type":"comment","z":"4ae74d11.25520c","name":"Adiciona um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":277.3240661621094,"y":83.22222900390625,"wires":[]},{"id":"38cd961d.01a8f2","type":"comment","z":"4ae74d11.25520c","name":"Atualiza lista de contas cadastro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":224.40750122070312,"y":450.6111755371094,"wires":[]},{"id":"eb848fe0.c53ae","type":"function","z":"4ae74d11.25520c","name":"Delay 200ms","func":"setTimeout(function() {\n node.send(msg);\n}, 200);\nreturn null;","outputs":1,"noerr":0,"x":1158.8982391357422,"y":241.00000953674316,"wires":[["e2b644d1.a6dca8"]]},{"id":"e2b644d1.a6dca8","type":"link out","z":"4ae74d11.25520c","name":"","links":["708fb03.800f2d","1744ee58.673f6a"],"x":1281.9166202545166,"y":240.64817810058594,"wires":[]},{"id":"708fb03.800f2d","type":"link in","z":"4ae74d11.25520c","name":"Atualiza Registro","links":["e2b644d1.a6dca8"],"x":384.36089992523193,"y":449.5740737915039,"wires":[["953e91af.24d18"]]},{"id":"cc9c420a.6e8d28","type":"comment","z":"4ae74d11.25520c","name":"Modifica um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":276.87955474853516,"y":207.66674995422363,"wires":[]},{"id":"432a2cf3.d5126c","type":"inject","z":"4ae74d11.25520c","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":324.5623474121094,"y":545.0440063476562,"wires":[["953e91af.24d18"]]},{"id":"5a1133a4.241afc","type":"debug","z":"4ae74d11.25520c","name":"Resposta","active":true,"console":"false","complete":"payload","x":1151.8958587646484,"y":542.3288059234619,"wires":[]},{"id":"9259c90b.47dfe8","type":"debug","z":"4ae74d11.25520c","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":804.2499237060547,"y":544.0440158843994,"wires":[]},{"id":"e9c0352d.670bc8","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/contas/excluir/#","qos":"0","broker":"5b29e174.c129c","x":265.7685089111328,"y":335.83335304260254,"wires":[["78bd23dc.b9c074","1b27759.c32018a"]]},{"id":"cb5be293.996198","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"deletar conta","collection":"contas","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":1158.323959350586,"y":336.05555152893066,"wires":[]},{"id":"65a9e72d.521de","type":"function","z":"4ae74d11.25520c","name":"Indica o ID","func":"msg.payload = {\n\"_id\":msg.payload._id\n}\nreturn msg;","outputs":1,"noerr":0,"x":949.6574554443359,"y":336.0555820465088,"wires":[["5fb1caf8.bea484","cb5be293.996198","eb848fe0.c53ae"]]},{"id":"5fb1caf8.bea484","type":"debug","z":"4ae74d11.25520c","name":"","active":false,"console":"false","complete":"false","x":1158.9166717529297,"y":399.2963047027588,"wires":[]},{"id":"65355402.cf2c84","type":"mqtt out","z":"4ae74d11.25520c","name":"excluido/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":760.9352874755859,"y":376.4444980621338,"wires":[]},{"id":"78bd23dc.b9c074","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/contas/excluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":540.1574249267578,"y":336.44446754455566,"wires":[["65355402.cf2c84","17a4b0da.ba33ff","6d0088c1.3a67d"]]},{"id":"17a4b0da.ba33ff","type":"json","z":"4ae74d11.25520c","name":"","x":740.6500091552734,"y":336.7648105621338,"wires":[["65a9e72d.521de"]]},{"id":"6d0088c1.3a67d","type":"debug","z":"4ae74d11.25520c","name":"excluido","active":false,"console":"false","complete":"true","x":749.1999359130859,"y":431.2648105621338,"wires":[]},{"id":"1b27759.c32018a","type":"debug","z":"4ae74d11.25520c","name":"excluir","active":false,"console":"false","complete":"true","x":498.8666534423828,"y":377.7648105621338,"wires":[]},{"id":"33fd897e.ad28e6","type":"debug","z":"4ae74d11.25520c","name":"alterar","active":false,"console":"false","complete":"true","x":504.8666534423828,"y":289.7648105621338,"wires":[]},{"id":"5f203c61.af2274","type":"debug","z":"4ae74d11.25520c","name":"alterado","active":false,"console":"false","complete":"true","x":751.8666839599609,"y":295.7648105621338,"wires":[]},{"id":"f10a3a28.a14ab","type":"comment","z":"4ae74d11.25520c","name":"Exclui um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":274.9833221435547,"y":298.88147926330566,"wires":[]},{"id":"81e2bc27.fa7e88","type":"comment","z":"4ae74d11.25520c","name":"Cadastro de contas","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":734.6574401855469,"y":50.999996185302734,"wires":[]},{"id":"7f374925.6057a8","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/socios/incluir/#","qos":"0","broker":"5b29e174.c129c","x":1666.9444427490234,"y":140.84258460998535,"wires":[["f2dca393.140e18"]]},{"id":"f2dca393.140e18","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1935.9444427490234,"y":140.84258460998535,"wires":[["e1c81f81.f9b2c","afd04411.adb998"]]},{"id":"1b1bab7.2d2acd5","type":"debug","z":"4ae74d11.25520c","name":"Incluir + ID","active":false,"console":"false","complete":"payload","x":2556.194381713867,"y":142.59258460998535,"wires":[]},{"id":"48bce490.7adb9c","type":"mqtt out","z":"4ae74d11.25520c","name":"socios/carregado/","topic":"financeiro/cadastro/socios/carregado/","qos":"0","retain":"","broker":"5b29e174.c129c","x":2534.670654296875,"y":506.57096099853516,"wires":[]},{"id":"e1c81f81.f9b2c","type":"mqtt out","z":"4ae74d11.25520c","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":2162.4737091064453,"y":141.12178993225098,"wires":[]},{"id":"d2e66b23.5a9e28","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/socios/carregar/","qos":"0","broker":"5b29e174.c129c","x":1662.4720993041992,"y":505.88146591186523,"wires":[["b8a2530a.328718"]]},{"id":"af739540.9088","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"store","x":2557.1496601104736,"y":200.58148574829102,"wires":[]},{"id":"afd04411.adb998","type":"function","z":"4ae74d11.25520c","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":2180.594253540039,"y":199.64260292053223,"wires":[["e3517fd3.6f249"]]},{"id":"e3517fd3.6f249","type":"json","z":"4ae74d11.25520c","name":"","x":2374.027603149414,"y":200.12594032287598,"wires":[["af739540.9088","5ce27797.cbb218","1b1bab7.2d2acd5"]]},{"id":"2dbddcfa.ee37bc","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/socios/alterar/#","qos":"0","broker":"5b29e174.c129c","x":1663.811019897461,"y":264.59821128845215,"wires":[["93dfd3e4.047c5","f4c69aa2.9461d8"]]},{"id":"93dfd3e4.047c5","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/alterado/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1937.5887756347656,"y":264.5982189178467,"wires":[["e700619e.8d52e","afd04411.adb998","fdf78069.d4999"]]},{"id":"e700619e.8d52e","type":"mqtt out","z":"4ae74d11.25520c","name":"alterado/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":2160.6736488342285,"y":264.43299102783203,"wires":[]},{"id":"4f63b298.276bb4","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega lista","collection":"socios","operation":"find","x":2159.966503567166,"y":506.9204029507107,"wires":[["48bce490.7adb9c","6dd7751a.ec69ac"]]},{"id":"b8a2530a.328718","type":"function","z":"4ae74d11.25520c","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"carregar\";\nreturn msg;","outputs":1,"noerr":0,"x":1941.9479904174805,"y":507.05006408691406,"wires":[["4f63b298.276bb4","458db97e.0d566"]]},{"id":"6ec6f8e0.c538d","type":"comment","z":"4ae74d11.25520c","name":"Adiciona um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1675.1518249511719,"y":100.05003356933594,"wires":[]},{"id":"3b86e318.7ab8cc","type":"comment","z":"4ae74d11.25520c","name":"Atualiza pagina","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1667.4852447509766,"y":464.9389896392822,"wires":[]},{"id":"5ce27797.cbb218","type":"function","z":"4ae74d11.25520c","name":"Delay 100ms","func":"setTimeout(function() {\n node.send(msg);\n}, 100);\nreturn null;","outputs":1,"noerr":0,"x":2556.7259979248047,"y":257.82781410217285,"wires":[["8d66c18b.eaea28"]]},{"id":"8d66c18b.eaea28","type":"link out","z":"4ae74d11.25520c","name":"","links":["85516b98.32761"],"x":2679.744379043579,"y":257.4759826660156,"wires":[]},{"id":"85516b98.32761","type":"link in","z":"4ae74d11.25520c","name":"Atualiza Registro","links":["8d66c18b.eaea28"],"x":1782.1886587142944,"y":466.4018783569336,"wires":[["b8a2530a.328718"]]},{"id":"1dc7098c.59732e","type":"comment","z":"4ae74d11.25520c","name":"Modifica um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1674.7073135375977,"y":224.49455451965332,"wires":[]},{"id":"49884b7a.c0cd44","type":"inject","z":"4ae74d11.25520c","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":1719.390121459961,"y":556.8718204498291,"wires":[["b8a2530a.328718"]]},{"id":"6dd7751a.ec69ac","type":"debug","z":"4ae74d11.25520c","name":"Resposta","active":false,"console":"false","complete":"payload","x":2411.723617553711,"y":560.1565799713135,"wires":[]},{"id":"458db97e.0d566","type":"debug","z":"4ae74d11.25520c","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":2202.077682495117,"y":560.8718204498291,"wires":[]},{"id":"593d00ec.1ab1c","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/cadastro/socios/excluir/#","qos":"0","broker":"5b29e174.c129c","x":1663.5962677001953,"y":352.6611576080322,"wires":[["c53d21e5.127258","5f75a1f.6f0d2e"]]},{"id":"9fbfdc60.ece158","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"deletar socios","collection":"socios","payonly":true,"upsert":false,"multi":false,"operation":"delete","x":2566.1517181396484,"y":352.88335609436035,"wires":[]},{"id":"ff80ba2.8503fc8","type":"function","z":"4ae74d11.25520c","name":"Indica o ID","func":"msg.payload = {\n\"_id\":msg.payload._id\n}\nreturn msg;","outputs":1,"noerr":0,"x":2346.4852142333984,"y":352.8833866119385,"wires":[["9d626cba.d2ba5","9fbfdc60.ece158","5ce27797.cbb218"]]},{"id":"9d626cba.d2ba5","type":"debug","z":"4ae74d11.25520c","name":"","active":false,"console":"false","complete":"false","x":2556.744430541992,"y":416.1241092681885,"wires":[]},{"id":"be39a8ad.bab6b8","type":"mqtt out","z":"4ae74d11.25520c","name":"excluido/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":2158.7630462646484,"y":393.2723026275635,"wires":[]},{"id":"c53d21e5.127258","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/cadastro/socios/excluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //msg.payload._id,\n        payload: msg.payload\n    }\n];","outputs":"1","noerr":0,"x":1937.9851837158203,"y":353.27227210998535,"wires":[["be39a8ad.bab6b8","9e188565.66237","dd6a1455.7a2638"]]},{"id":"9e188565.66237","type":"json","z":"4ae74d11.25520c","name":"","x":2138.477767944336,"y":353.5926151275635,"wires":[["ff80ba2.8503fc8"]]},{"id":"dd6a1455.7a2638","type":"debug","z":"4ae74d11.25520c","name":"excluido","active":false,"console":"false","complete":"true","x":2147.0276947021484,"y":448.0926151275635,"wires":[]},{"id":"5f75a1f.6f0d2e","type":"debug","z":"4ae74d11.25520c","name":"excluir","active":false,"console":"false","complete":"true","x":1896.6944122314453,"y":394.5926151275635,"wires":[]},{"id":"f4c69aa2.9461d8","type":"debug","z":"4ae74d11.25520c","name":"alterar","active":false,"console":"false","complete":"true","x":1902.6944122314453,"y":306.5926151275635,"wires":[]},{"id":"fdf78069.d4999","type":"debug","z":"4ae74d11.25520c","name":"alterado","active":false,"console":"false","complete":"true","x":2149.6944427490234,"y":312.5926151275635,"wires":[]},{"id":"b6b3984e.c425d8","type":"comment","z":"4ae74d11.25520c","name":"Exclui um registro","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":1672.8110809326172,"y":315.70928382873535,"wires":[]},{"id":"11d6a774.835021","type":"comment","z":"4ae74d11.25520c","name":"Cadastro de Socios","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":2132.4851989746094,"y":69.82780075073242,"wires":[]},{"id":"f1564014.d8fe8","type":"subflow:4e06ac9d.2d2f6c","z":"4ae74d11.25520c","name":"","x":213.199951171875,"y":2039.0478992462158,"wires":[]},{"id":"92adc14.51e9fc","type":"mqtt out","z":"4ae74d11.25520c","name":"contas/carregado/","topic":"financeiro/lancamento/contas/carregado/","qos":"0","retain":"","broker":"5b29e174.c129c","x":1186.6986423068574,"y":730.3564467959934,"wires":[]},{"id":"211a676b.2fc228","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/lancamento/contas/carregar/","qos":"0","broker":"5b29e174.c129c","x":251.75010257297072,"y":727.6669326358372,"wires":[["728ccb67.aa2b14","cf1b957.f44f468"]]},{"id":"f87f7dd.806358","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega lista","collection":"contas","operation":"find","x":769.9945068359375,"y":727.7058715820312,"wires":[["92adc14.51e9fc","1e0ace8f.6d9111"]]},{"id":"1744ee58.673f6a","type":"link in","z":"4ae74d11.25520c","name":"Atualiza Registro","links":["e2b644d1.a6dca8"],"x":384.21666198306593,"y":686.1873469882541,"wires":[["728ccb67.aa2b14"]]},{"id":"181fa5ac.e1da5a","type":"inject","z":"4ae74d11.25520c","name":"Carregar manual","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":317.66812472873244,"y":778.657287173801,"wires":[["728ccb67.aa2b14"]]},{"id":"1e0ace8f.6d9111","type":"debug","z":"4ae74d11.25520c","name":"Resposta contas","active":false,"console":"false","complete":"payload","x":1188.7516208224824,"y":781.9420791202122,"wires":[]},{"id":"6cba2fba.2f47d","type":"debug","z":"4ae74d11.25520c","name":"comando para o mongo","active":false,"console":"false","complete":"payload","x":811.1056857638887,"y":781.6572890811497,"wires":[]},{"id":"9411f5c0.2a12c8","type":"comment","z":"4ae74d11.25520c","name":"Lancamentos de inclusao","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":745.64599609375,"y":647.7939453125,"wires":[]},{"id":"728ccb67.aa2b14","type":"function","z":"4ae74d11.25520c","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = \"Carregar contas\"\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"banco\": 1, \"conta\": 1 }\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":527.8959460788301,"y":727.9813857608372,"wires":[["6cba2fba.2f47d","f87f7dd.806358"]]},{"id":"3d50944d.894c4c","type":"function","z":"4ae74d11.25520c","name":"Maior que $gt","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {idade:{$gt:20}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3131.8667068481445,"y":2528.4482679367065,"wires":[["9dad5313.e98fc"]]},{"id":"97a5d7a0.43ce7","type":"inject","z":"4ae74d11.25520c","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2913.6388778686523,"y":2528.1240491867065,"wires":[["3d50944d.894c4c"]]},{"id":"604604b.4a60f7c","type":"debug","z":"4ae74d11.25520c","name":"Resposta test","active":true,"console":"false","complete":"payload","x":3746.7224197387695,"y":2529.409083366394,"wires":[]},{"id":"9dad5313.e98fc","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"","collection":"test","operation":"find","x":3505.1999588012695,"y":2528.964991569519,"wires":[["604604b.4a60f7c"]]},{"id":"c2d2b2ca.34d6c8","type":"function","z":"4ae74d11.25520c","name":"Diferente de $ne","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {banco:{$ne:\"ALTAMIRA\"}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3131.977851867676,"y":2592.8982191085815,"wires":[["21b46dc8.6550aa"]]},{"id":"9945ccc3.32cd4","type":"inject","z":"4ae74d11.25520c","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2913.7500228881836,"y":2592.5740003585815,"wires":[["c2d2b2ca.34d6c8"]]},{"id":"42e7a837.53e248","type":"function","z":"4ae74d11.25520c","name":"Buscar o que estão numa lista $in","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {agencia:{$in:[\"234566\",\"555555\"]}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3190.533332824707,"y":2648.8982191085815,"wires":[["21b46dc8.6550aa"]]},{"id":"4a2de05d.fab94","type":"inject","z":"4ae74d11.25520c","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2912.305488586426,"y":2648.5740003585815,"wires":[["42e7a837.53e248"]]},{"id":"21b46dc8.6550aa","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"","collection":"contas","operation":"count","x":3516.311103820801,"y":2592.4150648117065,"wires":[["e6b2b7a9.0fef18"]]},{"id":"e6b2b7a9.0fef18","type":"debug","z":"4ae74d11.25520c","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":3756.8335037231445,"y":2591.859034538269,"wires":[]},{"id":"8e8c04f7.36c87","type":"function","z":"4ae74d11.25520c","name":"Buscar não esta numa lista $nin","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = {agencia:{$nin:[\"234566\",\"555555\"]}}\n\n//msg.operation  = 'find';\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\n//msg.projection = \"idade:{$gt:10}\"\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3179.977851867676,"y":2698.8982191085815,"wires":[["21b46dc8.6550aa"]]},{"id":"111bd38d.5aeecc","type":"inject","z":"4ae74d11.25520c","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2912.7499923706055,"y":2697.5739393234253,"wires":[["8e8c04f7.36c87"]]},{"id":"fedb0e73.bc7598","type":"function","z":"4ae74d11.25520c","name":"update valor","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload =  {$set: {\n        \"nome\": \"maria 1\",\n        \"idade\": 123466\n    }}\n\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":3119.533332824707,"y":2758.8981580734253,"wires":[["1134122f.e02706","50fdbccf.c66114"]]},{"id":"23e907d8.f842d","type":"inject","z":"4ae74d11.25520c","name":"testar query","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":2916.533348083496,"y":2757.8981580734253,"wires":[["fedb0e73.bc7598"]]},{"id":"5fbe4b3e.3353e4","type":"debug","z":"4ae74d11.25520c","name":"Resposta update test","active":true,"console":"false","complete":"payload","x":3951.533332824707,"y":2757.8982191085815,"wires":[]},{"id":"1134122f.e02706","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"update idade","collection":"test","payonly":false,"upsert":true,"multi":false,"operation":"update","x":3469.1999588012695,"y":2759.0314588546753,"wires":[]},{"id":"50fdbccf.c66114","type":"function","z":"4ae74d11.25520c","name":"Delay 50ms","func":"setTimeout(function() {\n node.send(msg);\n}, 50);\nreturn null;","outputs":1,"noerr":0,"x":3468.533332824707,"y":2815.5480604171753,"wires":[["e992d21c.9ad048"]]},{"id":"e992d21c.9ad048","type":"function","z":"4ae74d11.25520c","name":"lê banco e conta","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nmsg.payload = \"Carregar test\";\nreturn msg;","outputs":1,"noerr":0,"x":3660.533332824707,"y":2815.5981092453003,"wires":[["e3936574.abde78"]]},{"id":"e3936574.abde78","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"test.find()","collection":"test","operation":"find","x":3680.1999893188477,"y":2757.7314100265503,"wires":[["5fbe4b3e.3353e4"]]},{"id":"7e3f2d7a.e16dac","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/lancamento/contas/incluir/#","qos":"0","broker":"5b29e174.c129c","x":249.6167712741426,"y":865.1148086123997,"wires":[["235d06bb.3cc60a"]]},{"id":"235d06bb.3cc60a","type":"function","z":"4ae74d11.25520c","name":"Recupera topico ID","func":"node.status({\n    fill:\"blue\",shape:\"ring\",text:\"incluido/\" + msg.topic.split('/')[msg.topic.split('/').length - 1]\n});\n\nvar lancamento = JSON.parse(msg.payload);\n\nreturn {\n    id: msg.id,\n    topic: 'financeiro/lancamento/contas/incluido/' + msg.topic.split('/')[msg.topic.split('/').length - 1], //lancamento._id,\n    payload: { \n        _id: lancamento._id, \n        conta: lancamento.conta, \n        data: lancamento.data, \n        cheque: lancamento.cheque, \n        liquidado: lancamento.liquidado, \n        operacao: lancamento.operacao, \n        debito: (lancamento.operacao === 'debito' ? lancamento.valor : 0),\n        credito: (lancamento.operacao === 'credito' ? lancamento.valor : 0),\n        valor: lancamento.valor * (lancamento.operacao === 'credito' ? 1 : -1), \n        observacao: lancamento.observacao \n    }\n};","outputs":"1","noerr":0,"x":535.6167712741426,"y":865.1148086123997,"wires":[["1c1732e0.797165","60bf573b.e8d1","ca086132.cb68b"]]},{"id":"1c1732e0.797165","type":"mqtt out","z":"4ae74d11.25520c","name":"incluido/+id","topic":"","qos":"0","retain":"","broker":"5b29e174.c129c","x":771.1460376315645,"y":865.3940139346653,"wires":[]},{"id":"ca086132.cb68b","type":"mongodb out","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"salvar lancamentos","collection":"lancamentos","payonly":true,"upsert":false,"multi":false,"operation":"store","x":792.6168212890625,"y":917.1149597167969,"wires":[]},{"id":"5cbe5f4.121382","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega valores","collection":"lancamentos","operation":"aggregate","x":688.1166076660156,"y":1554.6980457305908,"wires":[["63cf0563.9f15ac","9ca01eac.de5","8687932b.b7c738"]]},{"id":"a30b5d16.9f5558","type":"debug","z":"4ae74d11.25520c","name":"total","active":false,"console":"false","complete":"payload","x":1281.005439758301,"y":1708.4089918136597,"wires":[]},{"id":"a7f21e26.c8776","type":"function","z":"4ae74d11.25520c","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = [\n    {\n       $group: {\n            _id: \"$conta\",\n            debito:{ $sum: \"$debito\" },\n            credito:{ $sum: \"$credito\" },\n            valor: {  $sum: \"$valor\"},\n            count: { $sum: 1 }\n        },\n    }\n]\n\nreturn msg;","outputs":1,"noerr":0,"x":487.1165771484375,"y":1554.9979724884033,"wires":[["5cbe5f4.121382"]]},{"id":"9a05c783.ffff5","type":"inject","z":"4ae74d11.25520c","name":"Totais","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":318.9999351501465,"y":1595.3314189910889,"wires":[["a7f21e26.c8776"]]},{"id":"e2e5b19.ee90b5","type":"function","z":"4ae74d11.25520c","name":"Valor total","func":"if(msg.payload !== null || msg.payload !== undefined){\n    msg.payload = 'R$ ' + msg.payload.valor.toFixed(2).replace('.', ',');\n    node.status({fill: \"yellow\", shape: \"ring\", text: msg.payload});\n} else {\n    msg.payload = \"0,00\";\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1041.6721878051758,"y":1708.8257398605347,"wires":[["a30b5d16.9f5558"]]},{"id":"d1c84f48.d981","type":"function","z":"4ae74d11.25520c","name":"Debitos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload.debito).toFixed(2);\n    let y = 'R$ ' + x.toString().replace('.', ',');\n    msg.payload = y;\n    node.status({fill:\"red\",shape:\"ring\",text:y});\n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1039.6721878051758,"y":1609.1758375167847,"wires":[["25f53b4c.b169dc"]]},{"id":"4a1f9759.ec9a2","type":"function","z":"4ae74d11.25520c","name":"Creditos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload.credito).toFixed(2);\n    let y = 'R$ ' + x.toString().replace('.', ',');\n    msg.payload = y\n    node.status({fill:\"green\",shape:\"ring\",text:y});\n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n    \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1040.6721878051758,"y":1661.1758375167847,"wires":[["6882036c.b8900c"]]},{"id":"25f53b4c.b169dc","type":"debug","z":"4ae74d11.25520c","name":"debito","active":false,"console":"false","complete":"payload","x":1281.672187805176,"y":1609.1758375167847,"wires":[]},{"id":"6882036c.b8900c","type":"debug","z":"4ae74d11.25520c","name":"credito","active":false,"console":"false","complete":"payload","x":1281.672187805176,"y":1661.1758375167847,"wires":[]},{"id":"cd95e0dd.60d96","type":"debug","z":"4ae74d11.25520c","name":"saldo","active":false,"console":"false","complete":"payload","x":1282.672187805176,"y":1759.1757764816284,"wires":[]},{"id":"33efb286.b6bc76","type":"function","z":"4ae74d11.25520c","name":"Saldo","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseFloat(msg.payload.debito);\n    let y = parseFloat(msg.payload.credito);\n    let z = (y - x).toFixed(2);\n    node.status({fill:\"yellow\",shape:\"ring\",text:z});\n    msg.payload = 'R$ ' + z.toString().replace('.', ',');\n    \n}\nelse{\n    msg.payload = \"0,00\";\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1033.3389358520508,"y":1759.5925245285034,"wires":[["cd95e0dd.60d96"]]},{"id":"d29accfb.29ca","type":"function","z":"4ae74d11.25520c","name":"Numero de lancamentos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = parseInt(msg.payload.count);\n    node.status({fill:\"yellow\",shape:\"ring\",text:x});\n    msg.payload = x;\n}\nelse{\n    msg.payload = 0;\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":1093.6721878051758,"y":1816.1757764816284,"wires":[["5f2d32b9.14eebc"]]},{"id":"5f2d32b9.14eebc","type":"debug","z":"4ae74d11.25520c","name":"Numero de lancamentos","active":false,"console":"false","complete":"payload","x":1345.005439758301,"y":1815.7590894699097,"wires":[]},{"id":"17f774f1.dada1b","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega lancamentos","collection":"lancamentos","operation":"find","x":708.8666152954102,"y":2103.514720916748,"wires":[["cf701545.0003c8"]]},{"id":"4e728843.d70e9","type":"function","z":"4ae74d11.25520c","name":"lê lancamento","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = \"Carrega Lancamento\"\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"conta\": 1, \"data\": 1, \"cheque\":1, \"liquidado\":1, \"operacao\":1, \"valor\":1, \"observacao\":1}\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":455.76805453830275,"y":2103.7901740603975,"wires":[["17f774f1.dada1b"]]},{"id":"be5b19f3.e129b8","type":"inject","z":"4ae74d11.25520c","name":"Lê 20 até lancamentos","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":226.0887908935547,"y":2103.653621673584,"wires":[["4e728843.d70e9"]]},{"id":"cf701545.0003c8","type":"debug","z":"4ae74d11.25520c","name":"lancamentos contas","active":false,"console":"false","complete":"payload","x":946.8666152954102,"y":2103.764659881592,"wires":[]},{"id":"f7c1e76a.7e6c18","type":"inject","z":"4ae74d11.25520c","name":"conta pelo ID","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":195.86658477783203,"y":2220.5645866394043,"wires":[["93e6f988.72faf8"]]},{"id":"93e6f988.72faf8","type":"function","z":"4ae74d11.25520c","name":"lê banco e conta","func":"// Para ler um registro primeiro especificar \"_id\" no payload\nmsg.payload = { \"_id\": \"9280aff5-619b-4e87-a82a-f31da6347a8d\"}\n\n// No parametro projection 1 ou zero significa ler ou inguinorar resultado\nmsg.projection = { \"banco\": 1, \"conta\": 1 }\n\n// Ler 1 valor\nmsg.limit = parseInt(msg.payload.per_page) || 20;\n\n// Pular 0 resultados\nmsg.skip = 0;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":457.0944061279297,"y":2220.8886852264404,"wires":[["c441766b.77eaf"]]},{"id":"c441766b.77eaf","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega conta pelo ID","collection":"contas","operation":"find","x":710.1929668850371,"y":2220.6131710476348,"wires":[["f2ec5cf0.143f9","77d7308f.f1a108"]]},{"id":"f2ec5cf0.143f9","type":"debug","z":"4ae74d11.25520c","name":"resposta do mongo","active":false,"console":"false","complete":"payload","x":942.9707489013672,"y":2265.564628601074,"wires":[]},{"id":"232a9687.3bce72","type":"debug","z":"4ae74d11.25520c","name":"Resposta contas","active":true,"console":"false","complete":"payload","x":1210.6167449951172,"y":2220.8494186401367,"wires":[]},{"id":"77d7308f.f1a108","type":"function","z":"4ae74d11.25520c","name":"Numero de lancamentos","func":"if(msg.payload !== null || msg.payload !== undefined){\n    let x = msg.payload[0].banco;\n    let y = msg.payload[0].conta;\n    node.status({fill:\"yellow\",shape:\"ring\",text:x + \" - \" + y});\n    msg.payload = (x + \" - \" + y);\n}\nelse{\n    msg.payload = 0;\n    node.status({fill:\"red\",shape:\"ring\",text:\"Erro Payload\"});\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":962.5332489013672,"y":2220.631278991699,"wires":[["232a9687.3bce72"]]},{"id":"21a6c50b.639aba","type":"http in","z":"4ae74d11.25520c","name":"lancamentos","url":"/api/lancamentos","method":"get","swaggerDoc":"","x":221.86656188964844,"y":2452.7481231689453,"wires":[[]]},{"id":"df0d7129.60d0c","type":"http response","z":"4ae74d11.25520c","name":"","x":1322.8665924072266,"y":2524.7481231689453,"wires":[]},{"id":"3948f84a.8fb5d8","type":"function","z":"4ae74d11.25520c","name":"filtro","func":"\n//msg.payload = \"SELECT RCB.*, RCB_PED.numero AS pedido FROM RCB LEFT OUTER JOIN RCB_PED ON RCB.nosso_numero = RCB_PED.nosso_numero\"; \nmsg.payload = '';\nmsg.limit= 50;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":401.86656188964844,"y":2452.7481231689453,"wires":[["3447f45e.b1870c"]]},{"id":"ce3588d6.c78b48","type":"function","z":"4ae74d11.25520c","name":"conta","func":"\nmsg.payload = { \"_id\": msg.payload.conta }\nmsg.limit = 100;\nmsg.skip = 0;\n\nreturn msg;","outputs":1,"noerr":0,"x":1321.8665618896484,"y":2441.7481231689453,"wires":[["3ebe8bab.8a0c34"]]},{"id":"700b2cee.9772ac","type":"function","z":"4ae74d11.25520c","name":"lancamentos","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    return [\n        {\n            lancamentos: msg.payload.map( x => \n            {\n                return {\n                    _id: x._id,\n                \tconta: x.conta,\n                \tdata: x.data,\n                \tcheque: x.cheque,\n                \tliquidado: x.liquidado,\n                \t//operacao: x.operacao,\n                \tvalor: x.debito > 0 ? x.valor * -1 : x.valor,\n                \tobservacao: x.observacao,\n                }\n            })\n        }, \n    null];\n} else {\n    return [null, msg];\n}","outputs":"2","noerr":0,"x":821.8665618896484,"y":2452.7481231689453,"wires":[["977df933.647648","403c4614.89042"],["42371aee.bdff5c"]]},{"id":"977df933.647648","type":"function","z":"4ae74d11.25520c","name":"loop","func":"if (msg.index === undefined) {\n    msg.index = 0;\n    msg.payload = msg.lancamentos[msg.index];\n    return [msg, null];\n} else {\n    msg.index++;\n    if (msg.index < msg.lancamentos.length) {\n        msg.payload = msg.lancamentos[msg.index];    \n        return [msg, null]\n    }\n    msg.payload = msg.lancamentos;\n    return [null, msg];\n}\n","outputs":"2","noerr":0,"x":1141.8665618896484,"y":2447.7481231689453,"wires":[["ce3588d6.c78b48"],["398a47d3.d2dd8"]]},{"id":"a0d576b9.cd106","type":"function","z":"4ae74d11.25520c","name":"result","func":"if (Array.isArray(msg.payload) && msg.payload.length > 0) {\n    msg.lancamentos[msg.index].conta = msg.payload[0];    \n} else {\n    msg.lancamentos[msg.index].conta = {\n        \"_id\": \"00000000-0000-0000-0000-0000000000\",\n        \"selecionada\": false,\n        \"banco\": \"????????\",\n        \"conta\": \"?????\",\n        \"agencia\": \"????????\",\n        \"descricao\": \"???????????????\"\n    }\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"x":1337.4219818115234,"y":2366.636987686157,"wires":[["977df933.647648"]]},{"id":"3447f45e.b1870c","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"lancamentos","collection":"lancamentos","operation":"find","x":601.8665618896484,"y":2452.7481231689453,"wires":[["700b2cee.9772ac","95a3aec9.2b53f"]]},{"id":"3ebe8bab.8a0c34","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"contas","collection":"contas","operation":"find","x":1481.8665618896484,"y":2441.7481231689453,"wires":[["a0d576b9.cd106","cd483af5.44311"]]},{"id":"398a47d3.d2dd8","type":"debug","z":"4ae74d11.25520c","name":"Final","active":true,"console":"false","complete":"payload","x":1321.6040496826172,"y":2484.7177352905273,"wires":[]},{"id":"95a3aec9.2b53f","type":"debug","z":"4ae74d11.25520c","name":"lancamentos","active":false,"console":"false","complete":"payload","x":821.8665618896484,"y":2492.7481231689453,"wires":[]},{"id":"47d21aa5.b16d34","type":"inject","z":"4ae74d11.25520c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":231.86656188964844,"y":2512.7481231689453,"wires":[["3948f84a.8fb5d8"]]},{"id":"cd483af5.44311","type":"debug","z":"4ae74d11.25520c","name":"","active":false,"console":"false","complete":"false","x":1651.8665771484375,"y":2441.38450050354,"wires":[]},{"id":"948bb76f.4f9aa8","type":"http response","z":"4ae74d11.25520c","name":"","x":1023.8665924072266,"y":2535.7481231689453,"wires":[]},{"id":"5df8202c.4afe88","type":"http response","z":"4ae74d11.25520c","name":"","x":1030.4351348876953,"y":2648.333450317383,"wires":[]},{"id":"14ab9e5d.1f5452","type":"catch","z":"4ae74d11.25520c","name":"","scope":null,"x":640.4351348876953,"y":2668.333450317383,"wires":[["8958f7e1.9cce88","5971d34b.9597d4"]]},{"id":"8958f7e1.9cce88","type":"debug","z":"4ae74d11.25520c","name":"","active":true,"console":"false","complete":"false","x":870.4351348876953,"y":2688.333450317383,"wires":[]},{"id":"5971d34b.9597d4","type":"function","z":"4ae74d11.25520c","name":"erro","func":"msg.statusCode = 500;\n\nreturn msg;","outputs":1,"noerr":0,"x":850.4351348876953,"y":2648.333450317383,"wires":[["5df8202c.4afe88"]]},{"id":"42371aee.bdff5c","type":"debug","z":"4ae74d11.25520c","name":"Lancamentos Vazio","active":true,"console":"false","complete":"payload","x":1062.5665435791016,"y":2491.9480743408203,"wires":[]},{"id":"403c4614.89042","type":"debug","z":"4ae74d11.25520c","name":"modificado","active":true,"console":"false","complete":"lancamentos","x":1003.5498809814453,"y":2385.7481231689453,"wires":[]},{"id":"63cf0563.9f15ac","type":"split","z":"4ae74d11.25520c","name":"","splt":"\\n","x":864.1062107086182,"y":1608.957633972168,"wires":[["e2e5b19.ee90b5","d1c84f48.d981","4a1f9759.ec9a2","33efb286.b6bc76","d29accfb.29ca"]]},{"id":"33044f3.765163","type":"debug","z":"4ae74d11.25520c","name":"comando","active":true,"console":"false","complete":"payload","x":523.4499816894531,"y":442.3666687011719,"wires":[]},{"id":"cf1b957.f44f468","type":"debug","z":"4ae74d11.25520c","name":"Lancamento contas","active":true,"console":"false","complete":"payload","x":540.2000995212129,"y":683.983329349094,"wires":[]},{"id":"bba4a236.68418","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/lancamento/contas/saldo/carregar/","qos":"0","broker":"5b29e174.c129c","x":201.5887908935547,"y":1554.855453491211,"wires":[["a7f21e26.c8776"]]},{"id":"9ca01eac.de5","type":"mqtt out","z":"4ae74d11.25520c","name":"","topic":"financeiro/lancamento/contas/saldo/carregado/","qos":"0","retain":"","broker":"5b29e174.c129c","x":1158.0332870483398,"y":1554.3832683563232,"wires":[]},{"id":"8687932b.b7c738","type":"debug","z":"4ae74d11.25520c","name":"resposta de cada conta","active":true,"console":"false","complete":"payload","x":1087.1445922851562,"y":1510.799921989441,"wires":[]},{"id":"60bf573b.e8d1","type":"debug","z":"4ae74d11.25520c","name":"lancamento conta","active":false,"console":"false","complete":"true","x":790.2001953125,"y":823.9500427246094,"wires":[]},{"id":"ec431b89.d9863","type":"function","z":"4ae74d11.25520c","name":"MAP Exemplo","func":"var index = 0;\n\nmsg.payload = ['a','b','c','d','e','f'].map( (item, index, list) => \n    \"test_\" + item + ' (' + index + \"), total: \" + (index % 2 ? list[index - 1] : '_')\n);\n\nreturn msg","outputs":1,"noerr":0,"x":857.9999084472656,"y":2761.6665573120117,"wires":[["eb06b04e.72fd88"]]},{"id":"7423f99e.64cd88","type":"inject","z":"4ae74d11.25520c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":645.9999084472656,"y":2760.6665573120117,"wires":[["ec431b89.d9863"]]},{"id":"eb06b04e.72fd88","type":"debug","z":"4ae74d11.25520c","name":"","active":true,"console":"false","complete":"false","x":1077.9999084472656,"y":2761.6665573120117,"wires":[]},{"id":"a93a32c.87fe6d","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/consulta/posicao/periodo/","qos":"0","broker":"5b29e174.c129c","x":250.14584350585938,"y":1060.4582214355469,"wires":[["e7fb94f7.47447"]]},{"id":"e7fb94f7.47447","type":"function","z":"4ae74d11.25520c","name":"carrega 20 contas","func":"msg.limit = parseInt(msg.payload.per_page) || 20;\nmsg.skip = ((msg.payload.page || 1) - 1) * (msg.payload.per_page || 1);\nreturn msg;","outputs":1,"noerr":0,"x":551.8994216918945,"y":1061.0157375335693,"wires":[["7b551380.70e33c"]]},{"id":"7b551380.70e33c","type":"mongodb in","z":"4ae74d11.25520c","mongodb":"fe425578.945b8","name":"Carrega lista","collection":"contas","operation":"find","x":769.9179348415801,"y":1060.886076397366,"wires":[["52960689.287168","100cc8a9.042ce7"]]},{"id":"100cc8a9.042ce7","type":"debug","z":"4ae74d11.25520c","name":"Resposta","active":true,"console":"false","complete":"payload","x":1159.675048828125,"y":1113.1222839355469,"wires":[]},{"id":"52960689.287168","type":"mqtt out","z":"4ae74d11.25520c","name":"contas/carregado/","topic":"financeiro/cadastro/contas/carregado/","qos":"0","retain":"","broker":"5b29e174.c129c","x":1188.6220703125,"y":1061.5366516113281,"wires":[]},{"id":"f5c93a2b.cef118","type":"comment","z":"4ae74d11.25520c","name":"Atualiza lista de contas consultas por periodo","info":"$options => i for case insensitive search\n\nStart with string\n\ndb.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}})\nEnd with string\n\ndb.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}})\nContains string\n\ndb.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}})\nDoesn't Contains string\n\ndb.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})\nKeep this as a bookmark, and a reference for any other alterations you may need. http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/","x":757.3958740234375,"y":1016.708251953125,"wires":[]},{"id":"30cc4755.334548","type":"debug","z":"4ae74d11.25520c","name":"tipo de consulta","active":true,"console":"false","complete":"payload","x":570.5626220703125,"y":1249.8124389648438,"wires":[]},{"id":"abda8f37.2a0998","type":"mqtt in","z":"4ae74d11.25520c","name":"","topic":"financeiro/lancamento/contas/consultar/","qos":"0","broker":"5b29e174.c129c","x":246.86111450195312,"y":1249.361083984375,"wires":[["30cc4755.334548"]]},{"id":"5b29e174.c129c","type":"mqtt-broker","z":"4ae74d11.25520c","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"fe425578.945b8","type":"mongodb","z":"","hostname":"127.0.0.1","port":"27017","db":"db","name":""}]
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

