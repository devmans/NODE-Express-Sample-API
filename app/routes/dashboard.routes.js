const { authJwt } = require("../middleware");
const controller = require("../controllers/dashboard.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/dashboard-api/generateToken",
       controller.generateToken
  );

 app.get(
    "/dashboard-api/fetchSignals",
     [authJwt.verifyToken],
       controller.getSignalsFromState
  );


};