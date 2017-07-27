const mongoose = require('mongoose');

const schema = mongoose.Schema;

const rsvpSchema = new schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    meetupId: {
        type: String,
        required: true
    },
    attending: {
        type: Boolean,
        required: true
    },
    guests: Number,
    comments: String
});

module.exports = mongoose.model('RSVP', rsvpSchema);