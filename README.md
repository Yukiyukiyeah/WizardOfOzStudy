# WizardOfOzStudy
A small prototype for WizardOfOzStudy following the guide:https://gist.github.com/martinsik/2031681

##  Requirements

- node.js
- Websocket
- Express

## Instruction

Clone the repository

```
$ git clone https://github.com/Yukiyukiyeah/WizardOfOzStudy.git
```



Install node.js following this guide:

 http://www.runoob.com/nodejs/nodejs-install-setup.html

Install WebSocket & Express

```
$ sudo npm install websocket
$ sudo npm install express
```

Enter the place you put the file and open the server

```
$ node chat-server.js
```

and the sever is running at port 1337. You could enter `localhost:1337/public/index.html` to visit the website.

Open Visualgo.html in separate windows，enter 'Chat' and enter your name, then you can start playing the user or the wizard.

If you want to visit the server from another computer, make sure they are in the same local area network. Find your local ip by enter`ifconfig`in terminal.

**Then you have to go to public/chat-frontend.js and change the code`var connection = new WebSocket('ws://[server ip]:1337');`

Then, enter the `[server ip]:1337` in your browser and visit the website. 

