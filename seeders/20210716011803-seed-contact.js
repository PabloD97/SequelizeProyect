'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Contacts', [
      {
          firstname: 'Pablini',
          lastname: 'Diaz',
          phone: '123122',
          email: 'pablini@gmail.com',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
      },{
          firstname: 'Damini',
          lastname: 'Diaz',
          phone: '123122',
          email: 'damini@gmail.com',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
