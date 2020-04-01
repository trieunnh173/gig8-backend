const express = require("express");
const router = express.Router();
const homeController = require('../controller/clients/homeController');

function routes(app) {
  router.get('/', (req, res) => {
    return homeController.getHomePage(req, res, app)
  });
  return router;
};

module.exports = routes;