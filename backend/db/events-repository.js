const {Event} = require("./models")

const listEvents = async () => {
  return await Event.findAll()
}

const createEvent = async (details) => {
  return await Event.create(details)
}

const getOneEvent = async (id) => {
 return await Event.findByPk(id)
}


module.exports = {
  listEvents,
  createEvent,
  getOneEvent
};
