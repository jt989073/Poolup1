"use strict";

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Groups = [];

function randomGroupTypes() {
  const groupTypes = [
    "League",
    "Gambling",
    "Get Together/'s",
    "Socializing",
    "Competitive",
    "Just For Fun",
  ];
  let groupNum = getRandomNum(0, groupTypes.length);
  return groupTypes[groupNum];
}

function randomGroupNames() {
  const groupNames = [
    "City Wide",
    "Best In Town",
    "8Ballers",
    "Corner Pocket Crooks",
    "YEET",
    "Cue Polishers",
    "Scratch This",
    "The Chalkers",
    "Below Average",
    "Pool my Finger",
    "Bourbon Legends",
    "Pool Tang Clan",
    "Poke & Hope",
    "The Kiss Offs",
    "Clean Break",
    "Shape is Overrated",
    "We’re Solids Right?",
    "Full Cue",
    "Sink or Swim",
    "Stick it to ‘Em",
    "Bouncy Stars",
    "Hot sticks",
  ];
  let groupNum = getRandomNum(0, groupNames.length);
  return groupNames[groupNum];
}

for (let i = 0; i <= 30; i++) {
  let newGroup = {
    name: `${randomGroupNames()}`,
    type: `${randomGroupTypes()}`,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  Groups.push(newGroup);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Groups", Groups, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};
