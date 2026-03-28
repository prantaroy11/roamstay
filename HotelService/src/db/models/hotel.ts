import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { DataTypes } from "sequelize";
import sequelize from "./sequelize"

class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
    declare id:CreationOptional<number>;
    declare name:string;
    declare address:string;
    declare location:string;
    declare createdAt:CreationOptional<Date>;
    declare updatedAt:CreationOptional<Date>;
    declare rating:number;
    declare ratingCount:number;
    
}

Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    //   defaultValue: 0,
    },

    ratingCount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    //   defaultValue: 0,
    },
  },
  {
    sequelize:sequelize, 
    tableName: "hotels", // optional but recommended
    timestamps: true, // manages createdAt & updatedAt automatically
  }
);

export default Hotel;