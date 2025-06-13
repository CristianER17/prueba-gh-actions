const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});
app.get('/', async (req,res)=> {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Hora en PostgreSQL: ${result.rows[0].now}`);
    } catch (error) {
        res.status(500).send('Error en la base de datos');
    }
});
app.listen(3000, ()=>console.log('Servidor en puerto 3000'));