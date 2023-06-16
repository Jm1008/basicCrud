const express = require('express');
const routes = require('./routes');

const app = express();
app.use(routes);
app.listen(5173, ()=>console.log('Server Rodando na porta 5173'));