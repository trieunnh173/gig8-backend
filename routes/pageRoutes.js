const express = require("express");
const router = express.Router();
const homeController = require('../controller/clients/homeController');
const categoryDetailController = require('../controller/clients/CategoryDetailController');

function routes(app) {
  router.get('/', (req, res) => {
    return homeController.getHomePage(req, res, app)
  });

  router.get('/categories/:category/:detail', (req, res) => {
    return categoryDetailController.getCategoryDetail(req, res, app)
  });

  return router;
};

module.exports = routes;