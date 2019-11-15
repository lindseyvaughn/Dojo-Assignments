const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    rating: {type: Number},
    comment: {type: String, default: ""},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

const CakeSchema = new mongoose.Schema({
    baker: {type: String, default: ""},
    image: {type: String, default: ""},
    ratings: [RatingSchema],
    avgRating: {type: Number, default: ""}
},{timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

module.exports = mongoose.model('Rating', RatingSchema);
module.exports = mongoose.model('Cake', CakeSchema);