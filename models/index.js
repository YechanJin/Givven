const Sequelize = require('sequelize');
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.Campaign = require('./campaign')(sequelize, Sequelize);
db.Item = require('./item')(sequelize,Sequelize);

/* user and campign */
db.User.hasMany(db.Campaign);

/* item */
db.User.hasMany(db.Item);


module.exports = db;