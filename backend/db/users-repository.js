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

const deleteRSVP = async (userId, eventId) => {
  const rsvp = await RSVP.findOne({where: {userId: userId, eventId: eventId}})
  if(!rsvp) throw new Error('RSVP does not exist')

  await rsvp.destroy()
  return rsvp.id
}


module.exports={
  listMyHostedEvents,
  listMyAttendingEvents,
  createRSVP,
  deleteRSVP
}
