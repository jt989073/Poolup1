'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      const rsvps = [
        {
          eventId: 2,
          userId: 1,
        },
        {
          eventId: 3,
          userId: 1,
        },
        {
          eventId: 4,
          userId: 1,

        },
        {
          eventId: 3,
          userId: 1,
        }
      ]

      return queryInterface.bulkInsert('RSVPs', rsvps, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
