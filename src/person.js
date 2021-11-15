const express = require('express');
const { Client } = require('pg');

const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  
  const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
  }

  const client = new Client(config);

  await client.connect();

  const responseBD = await client.query('SELECT * FROM person;');
  console.log('Respuesta Base de Datos', responseBD);
  await client.end();

  return res.json({
    personList: responseBD.rows
  });
});

router.get('/usandoPool', async (req, res) => {
  
  const responseBD = await db.query('SELECT * FROM person;');
  console.log('Respuesta Base de Datos', responseBD);

  return res.json({
    personList: responseBD.rows
  });
});

router.post('/', async (req, res) => {
  if (!req.body.first_name || !req.body.last_name 
    || !req.body.date_of_birth || !req.body.gender) {
      return res.json({
        success: false,
        message: 'Missing data'
      });
    }

  const responseBD = await db.query(
    'INSERT INTO person (first_name, last_name, gender, date_of_birth) VALUES ($1, $2, $3, $4)',
    [req.body.first_name, req.body.last_name, req.body.gender, req.body.date_of_birth]
  );  
  console.log(responseBD);

  return res.json({ 
    success: true
  });
});

module.exports = {
  router: router
}

const personas = [
  {
    id: 1,
    first_name: 'Diego',
    last_name: 'Caceres',
    gender: 'male',
    date_of_birth: '1990-12-27'
  },
  {
    id: 2,
    first_name: 'Pablo',
    last_name: 'Silva',
    gender: 'male',
    date_of_birth: '1980-09-14'
  },
  {
    id: 3,
    first_name: 'Laura',
    last_name: 'Perez',
    gender: 'female',
    date_of_birth: '1990-08-12'
  }
];