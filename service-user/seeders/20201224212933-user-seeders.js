'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('users', [
      {
        name: "ipsal",
        profession : "programmer",
        role : "admin",
        email : "ipsal@gmail.com",
        password : await bcrypt.hash('123456',10),
        created_at : new Date(),
        updated_at : new Date()
        

      },
      {
        name: "zakir",
        profession : "programmer",
        role : "student",
        email : "zakir@gmail.com",
        password : await bcrypt.hash('123456',10),
        created_at : new Date(),
        updated_at : new Date()
        

      }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
