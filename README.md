# WP-TS-REACT-HAPI-BOILERPLATE

## General notes

This is the boilerplate that I use to start my own projects with **Node**, **React**, **Fomantic/Semantic UI** and **Hapi** which I prefer over **Expresion**. It uses **Webpack** to package not only the client but also de server side. 

The project is set-up to use **Jest** for unit testing. Finally I refer **Typescript** over plain Javascript, so this empty project is prepared to use typescript as the programming language.

The main commands available through **npm** are:

* test: runs all unit tests
* bs: *build server* - packs all files under src/server and places the result under dist/server. Development mode.
* bc: *build client* - packs all files under src/client and places the result under dist/public/js. Development mode.
* build: packs client and server files. Development mode.
* ds: *dist server* - packs all files under src/server and places the result under dist/server. Production mode.
* dc: *dist client* - packs all files under src/client and places the result under dist/public/js. Production mode.
* dist: packs client and server files. Production mode.
* reload: launch webpack-dev-server on port 8080. Redirects REST calls to port 80. Allows client to reload itself when changes in the code are detected. 
* start: runs the file under dist/server

When used to start a new application, remember to edit the file index.html to add the application's name to the HTML main page.

## Running the boilerplate

You need to have node 12.X installed in your system. After cloning this repository run the following commands from a command shell inside the project root directory:

npm install
rpm run build
npm start

After the server prints its information about from where it is serving data, you can open a web browser and connect to http://localhost:8080.
