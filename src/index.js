const express = require('express');
const path = require('path');
const connection = require('./connection');
const app = express();
const usuarioRouter = require('./routes/usuarios');
const loggedMiddelware = require('./middelwares/logged')

// Settings
app.set('title', 'aplicacion hecha en node.js');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Middelwars
app.use(loggedMiddelware.isLogged);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/usuarios' ,usuarioRouter); // Utiliza usuarioRouter como middleware

app.listen(app.get('port') , () => {
  console.log(app.get('title') + ' corriendo en el puerto ' + app.get('port'));
});
