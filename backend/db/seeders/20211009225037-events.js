'use strict';
const faker = require("faker");

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



let newEvents = [
  {
    ownerId: 1,
    poolHallId: 36,
    groupId: 14,
    name: "Slims Shootout",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: false,
    playerAmount: 32,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 38,
    groupId: 17,
    name: "City Wide Tournament",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: false,
    playerAmount: 64,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 16,
    groupId: 26,
    name: "BCA League Meet and Greet",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: false,
    playerAmount: 128,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 7,
    groupId: 21,
    name: "Junior BCA State Tournament",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: false,
    playerAmount: 128,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 46,
    groupId: 20,
    name: "Small Tournament",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: false,
    playerAmount: 14,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
]



module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Events', newEvents, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Events', null, {});
  }
};
