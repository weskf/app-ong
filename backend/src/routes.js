const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota de Login
routes.post('/sessions', SessionController.create);

//Rotas para listar e cadastrar Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rotas para listar, deletar e cadastrar Casos
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
