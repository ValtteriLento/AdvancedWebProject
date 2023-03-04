const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let snippetSchema = new Schema ({
    user: {type: String},
    code: {type: String}
});

module.exports = mongoose.model("Snippet", snippetSchema);