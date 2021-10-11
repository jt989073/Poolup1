const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require("./events.js")
const poolHallsRouter = require('./poolHalls.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use("/events", eventsRouter);
router.use('/poolHalls', poolHallsRouter)

module.exports = router;
