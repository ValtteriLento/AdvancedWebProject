var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Snippet = require("../models/Snippet");
const Comment = require("../models/Comment");

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

/* GET one snippet by topic from database */
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
        if(!topic && req.body.topic && req.body.code) {
            new Snippet({
                user: req.body.user,
                topic: req.body.topic,
                code: req.body.code
            }).save((err) => {
                if(err) return next(err);
                return res.send(req.body);
            });
        } else {
            return res.status(403).send("Invalid post!");
        }
    });
});

/* GET all comments by topic from database */
router.get('/comments/:topic', (req, res, next) => {
    Comment.find({topic: req.params.topic}, (err, comments) => {
        if(err) return next(err);
        if(comments) {
            return res.json(comments);
        } else {
            return res.status(404).send("Comments not found");
        }
    })
})

/* POST comment to database */
router.post('/comments', (req, res, next) => {
    if(req.body.comment) {
        new Comment({
            user: req.body.user,
            topic: req.body.topic,
            comment: req.body.comment
        }).save((err) => {
            if(err) return next(err);
            return res.send(req.body);
        });
    } else {
        return res.status(403).send("Invalid post!");
    }
});

module.exports = router;
