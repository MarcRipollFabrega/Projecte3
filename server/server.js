/*****************************************************/
/* CARREGUEM LES LLIBRERIES NECESARIES */
/***************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

//Dades de conexió
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/********************************************************************************/
/***************************RUTES**********************************************/
/*******************************************************************************/
// RUTA PER REGISTRAR USUARIS A LA BBDD
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO usuaris (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Error en el registre');
        } else {
            res.status(200).send('Usuari registrat correctament');
        }
    });
});

// RUTA PER INICIAR SESSIÓ I CONSULAR A LA BBDD
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM usuaris WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, result) => {
        if (err || result.length === 0) {
            res.status(401).send('Usuari o contrasenya incorrectes');
        } else {
            res.status(200).send('Inici de sessió correcta');
        }
    });
});
// RUTA PER GUARDAR ELS NOUS REGISTRES QUE INTRODUIEX L'USUARI A TRAVES DEL FORMULARI GUARDAR
app.post('/api/datos', (req, res) => {
    const datos =  req.body; //|| words; //Llegeix les dades del formulari i del array 
    const sql = 'INSERT INTO vocabulari (tema, angles, castella,descripcio) VALUES ?';
    const valores = datos.map(d => [d.tema, d.angles, d.castella, d.descripcio]);
  
    db.query(sql, [valores], (error, result) => {
      if (error) throw error;
      res.send('Datos insertados: ' + result.affectedRows);
    });
  });

  // RUTA PER ACCEDIR A LA TAULA DE VOCABULARI
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM vocabulari'; 
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Servido a http://localhost:${PORT}`);
});