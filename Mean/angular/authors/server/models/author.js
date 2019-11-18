const mongoose = require("mongoose");

const Author = new mongoose.Schema({
    name: {type: String, default: ""},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

module.exports = mongoose.model('Author', Author);