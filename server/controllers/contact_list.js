// controller
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let contact_list= require("../models/contact_list");

module.exports.displaycontactlist = (req, res, next) => {
    contact_list.find((err, contact_list) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('contact_list/list', {title: 'contact-list', contact_list: contact_list});      
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contact_list.findById(id, (err, contact_list) => {
        if(err)
        {
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact_list/edit', {title: 'EditContact', contact_list})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedcontact = contact_list({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email_address": req.body.email_address,
        
    });

    contact_list.updateOne({_id: id}, updatedcontact, (err) => {
        if(err)
        {
            console.log("+++++++++++++++++++++++++++++++",err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contact_list.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}