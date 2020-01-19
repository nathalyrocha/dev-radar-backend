const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://nathaly:app123@cluster0-a4baw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Querys Params: request.query (filtro, ordenacao, paginacao, ...)
// Routes Params: request.params (identificar um recurso na alteracao ou remocao)
// Body: request.body (dados para criacao ou alteracao de um registro)

// MongoDB (nao-relacional)



server.listen(3000);