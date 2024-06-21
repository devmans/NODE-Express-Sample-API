const configMgt = require("../config/db.configMainDB.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  configMgt.DB,
  configMgt.USER,
  configMgt.PASSWORD,
  {
    host: configMgt.HOST, port: configMgt.PORT,
    dialect: configMgt.dialect,
    pool: {
      max: configMgt.pool.max,
      min: configMgt.pool.min,
      acquire: configMgt.pool.acquire,
      idle: configMgt.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;