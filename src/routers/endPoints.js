const express = require("express");
const router = express.Router();
const {getEven,getFibonacci,getRandom,getPrime} = require("../controller/endPoints-controller");
 

router.get('/p',getPrime);

router.get('/f',getFibonacci);

router.get('/e',getEven);

router.get('/r',getRandom);

module.exports = router;