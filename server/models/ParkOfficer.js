'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParkOfficer extends Model {
    static associate() {

    }
  }
  ParkOfficer.init({
    fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    badgeNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    district: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
  }, {
    sequelize,
    modelName: 'ParkOfficer',
    tableName: 'park_officers',
    underscored: true
  });

  return ParkOfficer
};