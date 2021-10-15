const {Event} = require("./models")
const {RSVP} = require('./models')


const listRSVPs = async (eventId) => {
  return await RSVP.findAll({where: {eventId}})
}

module.exports = {
listRSVPs
};
