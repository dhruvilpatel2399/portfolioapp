let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let contact_list= require("../models/contact_list");

//read operation

router.get("/",(req,res,next)=>{
    contact_list.find((err,contact_list) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contact_list);
            res.render('contact_list',{title:'contact_list',contact_list})
        }
    });
});



module.exports=router;

