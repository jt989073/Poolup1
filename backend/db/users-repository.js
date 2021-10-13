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



module.exports={
  listMyHostedEvents,
  listMyAttendingEvents
}
