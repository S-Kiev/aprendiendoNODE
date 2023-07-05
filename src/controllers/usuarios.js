//Para MongoDB
const Usuario = require('../models/usuarios');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    console.log('Usuarios:', usuarios);
    res.render('usuarios', { usuarios });
  } catch (err) {
    console.error('Ha ocurrido un error', err);
    res.status(500).send('Error al obtener los usuarios');
  }
};


const getCrearUsuario =(req, res) => {
  res.render('crearusuarios');
}

const getModificarUsuario = async (req, res) => {
  try {
    const param = req.params.id;
    const usuario = await Usuario.findById(param);
    console.log(usuario);
    res.render('modificarusuarios', { usuario });
  } catch (err) {
    console.error('Ha ocurrido un error', err);
    res.status(500).send('Error al obtener el usuario');
  }
};


const getBorrarUsuario = async (req, res) => {
  try {
    const param = req.params.id;
    const result = await Usuario.findById(param);
    console.log(result);
    res.render('borrarusuarios', { usuario: result });
  } catch (err) {
    console.log('Ha ocurrido un error', err);
  }
};


const crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario({
      nombre: req.body.nombre,
      edad: req.body.edad
    });
    await usuario.save();
    console.log('Usuario Registrado');
    res.redirect('/usuarios/todos');
  } catch (err) {
    console.error('Ha ocurrido un error', err);
    res.status(500).send('Error al crear el usuario');
  }
};


const modificarUsuario = async (req, res) => {
  try {
    const param = req.params.id;
    const data = req.body;
    await Usuario.findOneAndUpdate({ _id: param }, data);
    console.log('Usuario actualizado correctamente');
    res.redirect('/usuarios/todos');
  } catch (err) {
    console.error('Ha ocurrido un error', err);
    res.status(500).send('Error al actualizar el usuario');
  }
};


const eliminarUsuario = async (req, res) => {
  try {
    const param = req.params.id;
    await Usuario.deleteOne({ _id: param });
    console.log('Usuario ELIMINADO correctamente');
    res.redirect('/usuarios/todos');
  } catch (err) {
    console.log('Ha ocurrido un error', err);
    res.status(500).send('Error al eliminar el usuario');
  }
};


module.exports = { getUsuarios, getCrearUsuario, getModificarUsuario, getBorrarUsuario, crearUsuario, modificarUsuario, eliminarUsuario }


/*
//Para Postgres

const connection = require('../connection');


const getUsuarios = (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Ha ocurrido un error', err);
        res.status(500).send('Error al obtener los usuarios');
      } else {
        const usuarios = JSON.parse(JSON.stringify(result.rows));
        console.log('Usuarios:', usuarios);
        res.render('usuarios', { usuarios: usuarios });
      }
    });
  };
  

const getCrearUsuario =(req, res) => {
    res.render('crearusuarios');
}

const getModificarUsuario = (req, res) => {
  const param = req.params.id;
  const sql = 'SELECT * FROM usuarios WHERE id = $1';
  connection.query(sql, [param], (err, result) => {
      if (err) {
          console.log('Ha ocurrido un error', err);
      } else {
          console.log(result);
          res.render('modificarusuarios', { usuario: result.rows[0] });
      }
  });
}


const getBorrarUsuario =(req, res) => {
  const param = req.params.id;
  const sql = 'SELECT * FROM usuarios WHERE id = $1';
  connection.query(sql, [param], (err, result) => {
      if (err) {
          console.log('Ha ocurrido un error', err);
      } else {
          console.log(result);
          res.render('borrarusuarios', { usuario: result.rows[0] });
      }
  });
}

const crearUsuario = (req, res) => {
    const sql = 'INSERT INTO usuarios (nombre, edad) VALUES ($1, $2)';
    const data = [req.body.nombre, req.body.edad];
    
    connection.query(sql, data, (err, result) => {
      if (err) {
        console.error('Ha ocurrido un error', err);
        res.status(500).send('Error al crear el usuario');
      } else {
        console.log('Usuario Registrado');
        res.redirect('/usuarios/todos');
      }
    });
  };
  

const modificarUsuario = (req, res) =>{
  const param = req.params.id;
  const sql = 'UPDATE usuarios SET nombre = $1, edad = $2 WHERE id = $3';
  const values = [req.body.nombre, req.body.edad, param];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log('Ha ocurrido un error', err);
    } else {
      console.log('Usuario actualizado correctamente');
      res.redirect('/usuarios/todos');
    }
  });
}

const eliminarUsuario = (req, res) =>{
  const param = req.params.id;
  const sql = 'DELETE FROM usuarios WHERE id = $1';
  connection.query(sql, [param], (err, result) => {
    if (err) {
      console.log('Ha ocurrido un error', err);
    } else {
      console.log('Usuario ELIMINADO correctamente');
      res.redirect('/usuarios/todos');
    }
  });
}

module.exports = { getUsuarios, getCrearUsuario, getModificarUsuario, getBorrarUsuario, crearUsuario, modificarUsuario, eliminarUsuario }

*/