'use strict';
const faker = require("faker");

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



let newEvents = [
  {
    ownerId: 1,
    poolHallId: 36,
    name: "Slims Shootout",
    image:" https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634093307/poolupp/erik-mclean-a8dkA26FLYg-unsplash_im6395.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 6,
    playerAmount: 32,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 38,
    name: "City Wide Tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106363/poolupp/june-o-Dta1KzJYfGk-unsplash_sgax4a.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 22,
    playerAmount: 64,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 16,
    name: "BCA League Meet and Greet",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106885/poolupp/nick-fewings-Tv3RgatvS7A-unsplash_gsibpy.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 82,
    playerAmount: 128,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 7,
    name: "Junior BCA State Tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106474/poolupp/zakaria-zayane-XT5WkWEBzcY-unsplash_dmaqxu.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 64,
    playerAmount: 128,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 4,
    poolHallId: 46,
    name: "Small Tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106572/poolupp/carla-oliveira-21FqSKZQGzI-unsplash_ulttjq.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 14,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 2,
    poolHallId: 22,
    name: "A league Mid-Season tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338275/poolupp/malith-d-karunarathne-q-g4aKdfiIU-unsplash_dagxg0.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 9,
    playerAmount: 27,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 28,
    name: "Weekly Shootout",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338215/poolupp/jyothi-kumar-BLaTy14tR4U-unsplash_nwyacq.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 2,
    playerAmount: 16,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 6,
    poolHallId: 46,
    name: "Pool and Darts with friends",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338149/poolupp/lee-chinyama-EhDNF7X2WnM-unsplash_mel3jl.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 18,
    playerAmount: 44,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 4,
    poolHallId: 46,
    name: "Drinks around the table",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338090/poolupp/matthew-guay-RwYXvwITAlE-unsplash_a12t8w.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 12,
    playerAmount: 50,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 2,
    poolHallId: 21,
    name: "APA kickoff tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338067/poolupp/jyrki-nieminen-90D0inZiIBo-unsplash_jgucem.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 80,
    playerAmount: 160,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 22,
    poolHallId: 1,
    name: "State Finals",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338024/poolupp/alexandre-lion-LsEL4F5POBI-unsplash_gy7nns.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 120,
    playerAmount: 256,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 41,
    poolHallId: 14,
    name: "City finals",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634337986/poolupp/hari-av-K9N5vF8Jf70-unsplash_xub5rs.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 14,
    playerAmount: 32,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 46,
    name: "9 Ball For Everyone",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338215/poolupp/jyothi-kumar-BLaTy14tR4U-unsplash_nwyacq.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 14,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 22,
    poolHallId: 2,
    name: "$3 ball",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634106572/poolupp/carla-oliveira-21FqSKZQGzI-unsplash_ulttjq.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 6,
    playerAmount: 20,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 2,
    name: "Pets and Pool",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634338275/poolupp/malith-d-karunarathne-q-g4aKdfiIU-unsplash_dagxg0.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 32,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 14,
    poolHallId: 5,
    name: "Kelly Pool",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339026/poolupp/siz-islam-8LGUqN5VDDU-unsplash_qorz7s.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 14,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 46,
    name: "Snooker Tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339188/poolupp/taufik-ichwanudin-0Tg-FPxiPyA-unsplash_ukyyld.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 14,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 44,
    poolHallId: 46,
    name: "Senior BCA 9 ball",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339231/poolupp/ashley-byrd-wfVt70JBtDU-unsplash_dcsg0w.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 32,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 18,
    poolHallId: 9,
    name: "Beers and BCA",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339529/poolupp/richard-deng-zb0WxfTM8_0-unsplash_k64aft.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 4,
    playerAmount: 44,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 8,
    name: "Cut-Throat",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339623/poolupp/yogendra-singh-9M_3Tf_q1gg-unsplash_z2rv5a.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 18,
    playerAmount: 33,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 8,
    name: "Jack and Jill Scotch-Doubles",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339657/poolupp/aleksandra-zelena-bYFnZxKkMug-unsplash_hzvjmz.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 21,
    playerAmount: 54,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },  {
    ownerId: 12,
    poolHallId: 14,
    name: "A-League Top Shooters",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339851/poolupp/ethan-rougon-FIo11JGbwGo-unsplash_jok8qb.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 18,
    playerAmount: 60,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 1,
    poolHallId: 46,
    name: "Womens BCA tournament",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634339916/poolupp/peiwen-he-eGpuAM49pHM-unsplash_w1uo0v.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 22,
    playerAmount: 80,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  },
  {
    ownerId: 14,
    poolHallId: 46,
    name: "Ring game",
    image: "https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634340066/poolupp/hayden-8HKeFGFdHAY-unsplash_wx121q.jpg",
    date: faker.date.between("2021-10-23", "2021-11-23"),
    Attending: 40,
    playerAmount: 140,
    createdAt: faker.date.past(1),
    updatedAt: new Date()
  }
]



module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Events', newEvents, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Events', null, {});
  }
};
