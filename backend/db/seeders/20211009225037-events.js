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
    image:" https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634093307/poolupp/erik-mclean-a8dkA26FLYg-unsplash_im6395.jpg",
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
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106363/poolupp/june-o-Dta1KzJYfGk-unsplash_sgax4a.jpg",
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
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106885/poolupp/nick-fewings-Tv3RgatvS7A-unsplash_gsibpy.jpg",
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
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106474/poolupp/zakaria-zayane-XT5WkWEBzcY-unsplash_dmaqxu.jpg",
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
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106572/poolupp/carla-oliveira-21FqSKZQGzI-unsplash_ulttjq.jpg",
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
