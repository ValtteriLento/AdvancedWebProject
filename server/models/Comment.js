const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    user: {type: String},
    topic: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model("Comment", commentSchema);