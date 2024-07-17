module.exports = (sequelize, DataTypes) => {
    const Hall = sequelize.define('Hall', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rows: {
            type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
            allowNull: false
        },
        price: {
            type: DataTypes.JSON,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Hall;
};
