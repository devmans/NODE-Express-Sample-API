module.exports = {
  HOST: "xx.xx.xx.xx",
  USER: "postgres",
  PASSWORD: "xx@@2023@@",
  DB: "xxxx",
  dialect: "postgres",
  PORT: '5444',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
