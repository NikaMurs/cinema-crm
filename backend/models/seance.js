module.exports = (sequelize, DataTypes) => {
    const Seance = sequelize.define('Seance', {
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Seance;
};
