const express = require("express");
const asyncHandler = require("express-async-handler");
const RsvpRepository = require('../../db/rsvp-repository')

const router = express.Router()


router.get('/:id', asyncHandler(async(req, res)=> {
  const rsvps = await RsvpRepository.listRSVPs(req.params.id)
  return res.json(rsvps)
}))


module.exports = router;
