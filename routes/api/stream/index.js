const routes = require('express').Router();
const addRule = require('./addRule');
const deleteRule = require('./deleteRule');
const getRules = require('./getRules');

routes.get('/rules',getRules);
routes.post('/rules',addRule);
routes.delete('/rules',deleteRule);

module.exports = routes;