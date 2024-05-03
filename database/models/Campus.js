/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false //does not allow null for this field
  },

  imageurl: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue:'https://cdn-icons-png.flaticon.com/512/904/904861.png'
  },

  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT('long'),
    allowNull: true
  }
});

// Export the campus model
module.exports = Campus;