import { QueryInterface } from "sequelize";

module.exports = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
        ALTER TABLE hotels 
        CHANGE ratings rating DECIMAL(3,2),
        CHANGE rating_count ratingCount INT;
    `);
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
        ALTER TABLE hotels 
        CHANGE rating ratings DECIMAL(3,2),
        CHANGE ratingCount rating_count INT;
    `);
  }
};
