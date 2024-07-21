const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Film = require('./film')(sequelize, Sequelize.DataTypes);
const Hall = require('./hall')(sequelize, Sequelize.DataTypes);
const Seance = require('./seance')(sequelize, Sequelize.DataTypes);
const Booking = require('./booking')(sequelize, Sequelize.DataTypes);


// Define relationships
Hall.hasMany(Seance, { foreignKey: 'hallId' });
Seance.belongsTo(Hall, { foreignKey: 'hallId' });

Film.hasMany(Seance, { foreignKey: 'filmId' });
Seance.belongsTo(Film, { foreignKey: 'filmId' });

module.exports = {
    sequelize,
    Film,
    Hall,
    Seance,
    Booking
};
