module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define('Film', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Film;
};
