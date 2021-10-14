const {Event} = require("./models")
const {RSVP} = require('./models')
const {User} = require('./models')

const listMyHostedEvents = async (id) => {
  return await User.findByPk(id, {
    include: Event
  });
}

const listMyAttendingEvents = async(id) => {
  return await User.findByPk(id, {
    include: "reservations"
  });
}

const createRSVP = async (details) => {
  return await RSVP.create(details)
}


module.exports={
  listMyHostedEvents,
  listMyAttendingEvents,
  createRSVP
}
