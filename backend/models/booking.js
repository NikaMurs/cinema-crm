const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        hallId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        filmId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        selectedChairs: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'taken',
        }
    });
    return Booking;
};
