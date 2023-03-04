var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Snippet = require("../models/Snippet");

/* GET all snippets from database */
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

/* GET one snippet from database */
router.get('/:topic', (req, res, next) => {
    Snippet.findOne({topic: req.params.topic}, (err, snippet) => {
        if(err) return next(err);
        if(snippet) {
            return res.json(snippet);
        } else {
            return res.status(404).send("Snippet not found");
        }
    })
})

/* POST snippet to database */
router.post('/', (req, res, next) => {
    Snippet.findOne({topic: req.body.topic}, (err, topic) => {
        if(err) throw err;
        if(!topic) {
            new Snippet({
                user: req.body.user,
                topic: req.body.topic,
                code: req.body.code
            }).save((err) => {
                if(err) return next(err);
                return res.send(req.body);
            });
        } else {
            return res.status(403).send("Already has that topic!");
        }
    });
});

module.exports = router;
