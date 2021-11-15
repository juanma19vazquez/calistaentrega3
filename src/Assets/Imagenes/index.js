const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { Client } = require('pg');

const { router: personRouter } = require('./routes/person');

const app = express();
const PORT =  4000;

app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Solo en desarrollo
app.use(cors());

app.use('/person', personRouter);

app.get('/ping', async (request, response) => {
  
  const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'claseIntroduccion'
  }

  const client = new Client(config);
  await client.connect();

  const responseBD = await client.query('SELECT * FROM person;');
  console.log('Respuesta Base de Datos', responseBD);
  await client.end();

  return response.send('Pong!');
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});