const express = require('express');
const Recipes = require('../data/db-config');
const router = express.Router({
    mergeParams: true,
  });



module.exports = router;