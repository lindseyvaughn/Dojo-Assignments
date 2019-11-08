const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Why no name?"]
    },
    quote: {
        type: String,
        required: [true, "Why no quote?"]
    }
}, { timestamps: true })

const Quote = mongoose.model('Quote', QuoteSchema);