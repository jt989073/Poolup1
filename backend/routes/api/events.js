const express = require("express");
const asyncHandler = require("express-async-handler");
const EventRepository = require("../../db/events-repository");
const { check } = require('express-validator');
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await EventRepository.listEvents();
    return res.json(events);
  }));



// const validateEvent = [
//   check()
// ]

// router.post('/', )



//TODO: add image url
module.exports = router;
