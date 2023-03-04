var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Snippet = require("../models/Snippet");

/* GET snippets. */
router.get('/', (req, res, next) => {
    Snippet.find({}, (err, snippets) => {
        if(err) return next(err);
        if(snippets) {
            return res.json(snippets);
        } else {
            return res.status(404).send("Not found");
        }
    });
});

/* POST snippet. */
router.post('/', (req, res, next) => {
    Snippet.findOne({code: req.body.code}, (err, code) => {
        if(err) throw err;
        if(!code) {
            new Snippet({
                user: req.body.user,
                code: req.body.code
            }).save((err) => {
                if(err) return next(err);
                return res.send(req.body);
            });
        } else {
            return res.status(403).send("Already has that code!");
        }
    });
});

module.exports = router;
