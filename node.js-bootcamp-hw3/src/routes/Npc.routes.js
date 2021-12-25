const express = require("express");
const NpcController = require('../controllers/Npc.controller');




const router = express.Router();



router.route('/').get(NpcController.index);
router.route('/').post(NpcController.create);


module.exports = router;