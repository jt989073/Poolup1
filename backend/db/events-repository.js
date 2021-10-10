const {Event} = require("./models")

const listEvents = async () => {
  return await Event.findAll()
}

module.exports = {
  listEvents,
};
