// index.js

const express = require("express")
const app = express();
const ScreamingArchitecture = require('./config/index');

const sequelizeOptions = {
  // Specify your Sequelize options here
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'your_database',
};

const screamingArchitecture = new ScreamingArchitecture(sequelizeOptions);

// Load all models from the root directory
screamingArchitecture.loadModels('.');

app.listen(8080, () => {
  console.log("running");
});