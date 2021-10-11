const express = require("express");
const asyncHandler = require("express-async-handler");
const EventRepository = require("../../db/events-repository");
const { check } = require("express-validator");
const router = express.Router();
const { handleValidationErrors } = require("../../utils/validation");
const Event = require('../../db/models')

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await EventRepository.listEvents();
    return res.json(events);
  })
);

const validateEvent = [
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage("Please provide an event Name with at least 5 characters"),
  check("date")
    .exists({ checkFalsy: true })
    .isDate()
    .isAfter(new Date().toString())
    .withMessage("Please provide a date that is in the future for the event."),
  check("playerAmount")
    .exists({ checkFalsy: true })
    .isInt()
    .withMessage("Pleae provide a valid playerAmount"),
  handleValidationErrors,
];

router.post(
  "/",
  validateEvent,
  asyncHandler(async (req, res) => {
    const id = await EventRepository.createEvent(req.body);
    return res.redirect(`${req.baseUrl}/${id}`);
  })
);


//TODO: add image url
module.exports = router;
