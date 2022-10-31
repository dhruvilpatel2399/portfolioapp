let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let contact_list= require("../models/contact_list");

let contactController = require('../controllers/contact_list');

//read operation
router.get('/', contactController.displaycontactlist);

//
router.get('/edit/:id', contactController.displayEditPage);
router.post('/edit/:id', contactController.processEditPage);
//


// delete

router.get('/delete/:id', contactController.performDelete);




module.exports=router;

