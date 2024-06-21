const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// const db = require("./app/models/index-app");
//  const Role = db.role;
// db.sequelize.sync({force: false}).then(() => {
//             //  // console.log('Drop and Resync Db');
//             //   //initial();
// });

// simple route
app.get("/dashboard", (req, res) => {
  res.json({ message: "dashboard APIs ----  Ver1.0.0." });
});



require('./app/routes/dashboard.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
