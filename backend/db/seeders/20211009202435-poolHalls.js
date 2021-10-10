"use strict";
const faker = require("faker");

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomPoolHalls() {
  const poolHallNames = [
    "Pool Hall",
    "Pool Palace",
    "Pool Room",
    "Billiards",
    "Game Room",
    "Billiards Club",
    "Billiards & Sports Bar",
    "Hideaway"
  ];
  let poolNum = getRandomNum(0, poolHallNames.length);
  return poolHallNames[poolNum]
}

const poolHalls = [];

for (let i = 0; i <= 50; i++) {
  let newPoolHall = {
    name: `${faker.name.firstName()}'s ${randomPoolHalls()}`,
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
  };
  poolHalls.push(newPoolHall);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("PoolHalls", poolHalls, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PoolHalls", null, {});
  },
};
