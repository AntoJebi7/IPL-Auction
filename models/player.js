const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true 
    },
    basePrice: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    previousTeam: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    points: {
        type: Number
    },
    bidby: {
        type: String,
        default: 'No Bid'
    },
    currentPrice: {
        type: String,
        default: '0'
    }
});



module.exports = mongoose.model('Player', playerSchema);

