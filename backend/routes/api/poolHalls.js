const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const PoolHallRepository = require("../../db/poolHalls-repository");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const poolHalls = await PoolHallRepository.listPoolHalls();
    return res.json(poolHalls);
  })
);

module.exports = router;
