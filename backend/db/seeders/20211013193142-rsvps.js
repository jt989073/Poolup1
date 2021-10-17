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
        ,
        {
          eventId: 4,
          userId: 1,
        },
        {
          eventId: 2,
          userId: 8,
        },
        {
          eventId: 9,
          userId: 14,
        },
        {
          eventId: 8,
          userId: 12,
        },
        {
          eventId: 12,
          userId: 4,
        },
        {
          eventId: 13,
          userId: 8,
        },
        {
          eventId: 14,
          userId: 4,
        },
        {
          eventId: 23,
          userId: 12,
        },
        {
          eventId: 16,
          userId: 14,
        },
        {
          eventId: 8,
          userId: 4,
        },
        {
          eventId: 1,
          userId: 1,
        },
        {
          eventId: 4,
          userId: 14,
        },
        {
          eventId: 16,
          userId: 6,
        },
        {
          eventId: 12,
          userId: 6,
        },
        {
          eventId: 14,
          userId: 12,
        },
        {
          eventId: 8,
          userId: 2,
        },
        {
          eventId: 1,
          userId: 14,
        },
        {
          eventId: 16,
          userId: 2,
        },
        {
          eventId: 22,
          userId: 12,
        },
        {
          eventId: 14,
          userId: 4,
        },
        {
          eventId: 3,
          userId: 36,
        },
        {
          eventId: 23,
          userId: 44,
        },
        {
          eventId: 12,
          userId: 42,
        },
        {
          eventId: 1,
          userId: 19,
        },
        {
          eventId: 3,
          userId: 18,
        },
        {
          eventId: 3,
          userId: 41,
        },
        {
          eventId: 20,
          userId: 31,
        },
        {
          eventId: 22,
          userId: 41,
        },
        {
          eventId: 22,
          userId: 19,
        },
        {
          eventId: 22,
          userId: 1,
        },
        {
          eventId: 17,
          userId: 1,
        },
        {
          eventId: 3,
          userId: 16,
        },
        {
          eventId: 3,
          userId: 19,
        },
        {
          eventId: 12,
          userId: 51,
        },
        {
          eventId: 3,
          userId: 50,
        },
        {
          eventId: 13,
          userId: 21,
        },
        {
          eventId: 8,
          userId: 21,
        },
        {
          eventId: 8,
          userId: 12,
        },
        {
          eventId: 1,
          userId: 51,
        },
        {
          eventId: 22,
          userId: 11,
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
