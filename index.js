require('dotenv').config();

import { MariaDB } from './model';

const express = require('express');
const app = express();

const auth = require('./routes/auth');
app.use('/auth', auth);

MariaDB.initializeDataBase();

app.get('/',  (req, res) => {
    const maria = new MariaDB();
    maria.initializeTable();
    res.send('CRUD Rest API Test');
});

app.listen(3000, () => {
    console.log('Server is working: PORT - ', 3000)
})
