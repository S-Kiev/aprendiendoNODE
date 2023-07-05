//Para MongoDB
const mongoose = require('mongoose');
const { mongo_database, mongodb } = require('./config');

const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db)=>{
  console.log('Conexion a MongoDB existosa')
}).catch((err)=>{
  console.log('Ha ocurrido un error: ' + err)
});

module.exports = connection



/*
//Para Postgres
const { Client } = require('pg');
const { postgres_database } = require('./config');

const client = new Client(postgres_database);

client.connect()
  .then((conn) => {
    console.log('Conexión exitosa a la base de datos');
    return conn;
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });

  module.exports = client;

*/

