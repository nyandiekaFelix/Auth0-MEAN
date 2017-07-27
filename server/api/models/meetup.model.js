const mongoose = require('mongoose');

const schema = mongoose.Schema;

const meetupSchema = new schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: String
});

module.exports = mongoose.model('Meetup', meetupSchema);