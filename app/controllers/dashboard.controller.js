const db = require("../models/index-main");
const config = require("../config/auth.config");

const Sequelize = db.Sequelize;
const sequelize = db.sequelize;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.generateToken = (req, res) => {
  // FieldOfficer.findOne({
  //   where: {
  //     fo_code: req.body.fo_code
  //   }
  // })
  //   .then(user => {
  //     if (!user) {
  //       return res.status(404).send({ message: "User Not found." });
  //     }

  //     var passwordIsValid = bcrypt.compareSync(
  //       req.body.password,
  //       user.password
  //     );

  //     if (!passwordIsValid) {
  //       return res.status(401).send({
  //         accessToken: null,
  //         message: "Invalid Password!"
  //       });
  //     }

      const token = jwt.sign({ id: 'WCDDataCentral' },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

    
        res.status(200).send({message: "Op Success", accessToken: token });
   
    // })
    // .catch(err => {
    //   res.status(500).send({ message: err.message });
    // });
};


exports.getSignalsFromState = async (req, res) => {
   try {
     const { fromDt, toDt } = req.query;
     

      // Validate the datetime values
    if (!fromDt || !toDt) {
      return res.status(400).json({ error: 'Start and end datetime parameters are required.' });
    }
    await sequelize.authenticate();
    const query = `select * from a 
                    where a.time between  :fromDt and  :toDt `;
    //const signalinfos = await sequelize.query(query, { replacements: { fromDt, toDt },  type: sequelize.QueryTypes.SELECT });
    const signalinfos = await sequelize.query(query, {replacements: { fromDt, toDt }, type: sequelize.QueryTypes.SELECT });
    const result = Array.isArray(signalinfos) ? signalinfos : [signalinfos];
    
    res.status(200).send({message: "Op Success",Count : result.length , Payload: result});
   
  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).json({ error: 'Unable to retrieve data from the database' });
  } finally {
   // await sequelize.close();
    console.log('Connection has been closed.');
  }
};

