# API Server
Ecommerce API made with LoopBack 4.


## Technologies
This project uses:

[Mongo](https://www.mongodb.com/) for a NoSQL database.

[LoopBack 4](https://loopback.io/) For an HTTP Server

[Node](https://nodejs.org/en/) For a JavaScript runtime


## Installation

To install this project simply clone or download the repo:

`git clone https://github.com/czapizzle/m2e-server.git <dir name>`

`cd <dir name>`

`npm install`

`cp .env.example .env` then add in your local Mongo URI **Changing variables in the .env will require you to change it in the `src/datasources/db.datasource.json` file.**


## Database migration
```
npm run migrate
```

### Setup/Development

To develop using this project you can run. The server will require you to be running a local instance of [MongoDB](https://www.mongodb.com/).

`npm start`
