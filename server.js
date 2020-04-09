const express = require('express');
const next = require("next");
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: './views'
});
const handle = app.getRequestHandler();

dotEnv.config();
app
  .prepare()
  .then(() => {
    const server = express();
    const pageRoutes = require('./routes/pageRoutes');
    //db connectivity
    dbConnection();

    //cors
    server.use(cors());

    //request payload middleware
    server.use(express.json());

    server.use(express.urlencoded({
      extended: true
    }));

    //assets
    server.use('/assets', express.static(__dirname + '/views/assets'));

    //Api routes
    server.use('/api/v1/product', require('./routes/productRoutes'));
    server.use('/api/v1/user', require('./routes/userRoutes'));
    server.use('/api/v1/category', require('./routes/categoryRoutes'));

    // API Documents
    if (process.env.NODE_ENV != 'production') {
      server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    server.use('/', pageRoutes(app));

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })

    // error handle middlaware
    server.use(function (err, req, res, next) {
      console.error(err.stack)
      res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
      })
    })
  }).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });