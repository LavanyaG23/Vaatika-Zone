
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Products",{
        ProductId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProductName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProductCategory: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProductPic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProductInStock: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProductPrice: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProductDescription: {
            type: DataTypes.STRING,
        },
    })
    
    return Posts
}