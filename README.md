# Anglers-Hub

Anglers-Hub is a Single Page Application build with MERN Stack.

# Stack

Database: MongoDB - [install](https://docs.mongodb.com/manual/installation/), [docs](https://docs.mongodb.com/manual/tutorial/getting-started/),

Server: Node.js + Express

Front-End: React - [docs](https://react.dev/reference/react).

# Set up and usage

## Database:

To set up database MongoDB Tools should be installed on the machine. In console run the following command:

**`
mongorestore --db=anglers-hub <path to db files>
`**

Dump files can be found [here](https://github.com/KostaKostov15/Anglers-Hub/tree/main/db/anglers-hub)


## Server: 

To start server, from inside the [server dir](https://github.com/KostaKostov15/Anglers-Hub/tree/main/server).
Run following commands in terminal:

**`
npm install
`**

**`
npm start
`**

Server starts on http://localhost:3000/

## Client:

To start client side view, form inside the [client dir](https://github.com/KostaKostov15/Anglers-Hub/tree/main/client).
Run following commands in terminal:

**`
npm install
`**

**`
npm run dev
`**

App starts on http://localhost:5173/
