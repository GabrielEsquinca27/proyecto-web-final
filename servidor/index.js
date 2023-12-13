const express = require("express");
const mysql = require("mysql");
const app = express();

let user = "";

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "proyectoweb"
});

conexion.connect(function(err) {
  if(err) {
      console.error("Error al conectar a la base de datos:", err);
      throw err;
  }
  console.log("Conectado a la BD");
});

app.get("/", function(req, res) {

});

app.get("/sesion", (req, res) => {
  if (user == "") {
  }else {
    res.json({ message: user });
  }
});

app.get("/cerrarsesion", function(req, res) {
  user = "";
  console.log("¡Sesión finalizada!");
});


app.post("/citas", function (req, res) {
  const datos = req.body;
  const telefono = datos.telefono;
  const fecha = datos.fecha;
  const hora = datos.hora;
  const servicio = datos.servicio;
  let idUsuario = "";
  let idServicio;

  const queryID = "SELECT id FROM usuarios WHERE nombre = '" + user + "'";
  conexion.query(queryID, function (error, rows) {
    let id = "";
    if (error) {
      res.status(500).json({ message: "¡Error al consultar la base de datos!" });
      console.log("ERROR");
    } else {
      if (rows.length > 0) {
        idUsuario = rows[0].id;
      } else {
        console.log("ERROR");
      }
    }
    
    if (servicio == "Consulta médica") {
      idServicio = 1;
    } else if (servicio == "Laboratorio clínico") {
      idServicio = 2;
    } else if (servicio == "Cirugía"){
      idServicio = 3;
    } else if (servicio == "Rehabilitación") {
      idServicio = 4;
    } else if (servicio == "Telemedicina") {
      idServicio = 5;
    } else {
    }

    const querySql = "INSERT INTO citas (idusuario, telefono, fecha, hora, idservicio) VALUES ('" + idUsuario + "', '" + telefono + "', '" + fecha + "', '" + hora + "', '" + idServicio + "')";

    conexion.query(querySql, function (error) {
      if (error) {
          console.error("¡Error al insertar la cita en la base de datos!");
          res.status(500).json({ message: "¡Error al programar la cita!" });
      } else {
          console.log("¡Cita programada correctamente!");
          res.status(200).json({ message: "¡Cita programada correctamente!" });
      }
    });

  });
});

app.post("/registrar", function(req, res) {
  const datos = req.body;
  const nombre = datos.nom;
  const email = datos.email;
  const pss = datos.pass;

  const consultar = "SELECT * FROM usuarios WHERE nombre = '"+ nombre +"' ";
  
  conexion.query(consultar, function (error, row) {
    if (error) {
      res.status(500).json({ message: "¡Error al consultar la base de datos!" });
    } else {
      if (row.length > 0) {
        console.log("¡El usuario ya existe!");
        res.status(400).json({ message: "¡El usuario ya existe!" });
      } else {
        const querySql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('" + nombre + "', '" + email + "', '" + pss + "')";
        conexion.query(querySql, function (error) {
          if (error) {
            res.status(500).json({ message: "¡Error al insertar los datos!" });
          } else {
            console.log("¡Registro exitoso!");
            res.status(200).json({ message: "¡Registro exitoso!" });
          }
        });
      }
    }
  });
});

app.post("/iniciarsesion", function (req, res) {
  const datos = req.body;
  const nombre = datos.nom;
  const pss = datos.pass;

  const querySql = "SELECT * FROM usuarios WHERE nombre = '" + nombre + "' AND contrasena = '" + pss + "'";

  conexion.query(querySql, function (error, row) {
    if (error) {
        res.status(500).json({ message: "¡Error al consultar la base de datos!" });
    } else {
      if (row.length > 0) {
        console.log("¡Inicio de sesión exitoso!");
        res.status(200).json({ message: "¡Inicio de sesión exitoso!" });
        user = nombre;
      } else {
        console.log("¡Usuario o contraseña incorrectos!");
        res.status(401).json({ message: "¡Usuario o contraseña incorrectos!" });
      }
    }
  });
});

app.post("/contacto", function (req, res) {
  const datos = req.body;
  const nombre = datos.nom;
  const apellido = datos.lsname;
  const correo = datos.email;
  const mensaje = datos.message;

  const querySql = "INSERT INTO contacto (nombre, apellido, correo, mensaje) VALUES (?, ?, ?, ?)";
  const values = [nombre, apellido, correo, mensaje];

  conexion.query(querySql, values, function (error) {
    if (error) {
      console.error("¡Error al insertar el mensaje!", error);
      res.status(500).json({ message: "¡Error al enviar el mensaje!" });
    } else {
      console.log("¡Mensaje enviado correctamente a la base de datos!");
      res.status(200).json({ message: "" });
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor en el puerto 3001...");
});
