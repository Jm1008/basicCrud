const express = require("express");
const prodController = require("./prodControllers/prodController");
const routes = express.Router();

routes.get('/',prodController.raiz);
routes.get('/produtos', prodController.produtos);
routes.get('/vendas', prodController.vendas);

module.exports = routes;