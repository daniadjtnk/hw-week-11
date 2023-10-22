'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Todos', [
    {
      title: 'GRWM: Morning Edition',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'Romanticisize My Lunch Break',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'GRWM: Night Edition',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'My Skincare Routine',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {})
  }
};
