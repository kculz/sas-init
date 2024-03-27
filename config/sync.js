// config/sync.js

const Sequelize = require('sequelize');
const ScreamingArchitecture = require('./index');

const sequelizeOptions = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
};

const screamingArchitecture = new ScreamingArchitecture(sequelizeOptions);

// Create the database
screamingArchitecture.sequelize
  .query(`CREATE DATABASE IF NOT EXISTS your_database;`)
  .then(() => {
    // Database created or already exists
    screamingArchitecture.loadModels('..');

    const shouldRecreateDatabase = true;
    const syncOptions = shouldRecreateDatabase ? { force: true } : {};

    screamingArchitecture
      .synchronizeModels(syncOptions)
      .then(() => {
        console.log('Models synchronized successfully.');
      })
      .catch((error) => {
        console.error('Failed to synchronize models:', error);
      });
  })
  .catch((error) => {
    console.error('Failed to create database:', error);
  });