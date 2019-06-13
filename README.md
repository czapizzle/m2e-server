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

Add in your local Mongo URI **Change variable in the `src/datasources/db.datasource.json` and `database.json` files.**


## Database migration
```
npm run migrate
```

## Starting the project

The server will require you to be running a local instance of [MongoDB](https://www.mongodb.com/).
```
npm start
```
