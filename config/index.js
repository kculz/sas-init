// config/index.js

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

class ScreamingArchitecture {
  constructor(sequelizeOptions) {
    this.sequelize = new Sequelize(sequelizeOptions);
  }

  loadModels(directory) {
    const normalizedPath = path.join(__dirname, directory);
    const files = fs.readdirSync(normalizedPath);

    files.forEach((file) => {
      const filePath = path.join(normalizedPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        this.loadModels(path.join(directory, file));
      } else if (file === 'model.js') {
        const model = require(filePath);
        model.init(this.sequelize); // Pass the Sequelize instance
      }
    });
  }

  synchronizeModels(options) {
    return this.sequelize.sync(options);
  }
}

module.exports = ScreamingArchitecture;