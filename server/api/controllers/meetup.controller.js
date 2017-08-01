const Meetup = require('../models/meetup.model');

module.exports = {

    newMeetup: (req, res) => {

        return new Meetup(req.body)
            .save()
            .then(meetup => {
                res.status(200).json({
                    message: 'Event created successfully',
                    meetup: meetup
                });
            })
            .catch(err => res.status(500).json({ error: err.message });
    },

    allFuture: (req, res) => {

        const _projections = 'title location startDate endDate';

        Meetup.find({ startDate: { $gte: new Date() }}, _projections)
            .exec()
            .then(meetups => {
                return res.status(200).json(meetups);
            })
            .catch(err => res.status(500).json({ error: err.message });

    },

    getOne: (req, res) => {

        const _projections = 'title location startDate endDate description';

        Meetup.findById(req.params.meetupId, _projections)
            .exec()
            .then(meetup => {
                if (!meetup) {
                    return res.status(404).json({ 
                        message: 'Event not found' 
                    });
                }
                return res.status(200).json({ meetup: meetup });
            })
            .catch(err => res.status(500).json({ error: err.message });
    },

    updateOne: (req, res) => {

        Meetup.findById(req.params.meetupId)
            .exec()
            .then(meetup => {
                if (!meetup) {
                    return res.status(404).json({
                        message: 'Event not found'
                    })
                }

                const updates = {
                    title: req.body.title || 
                        meetup.title,
                    location: req.body.location ||
                        meetup.location,
                    startDate: req.body.startDate ||
                        meetup.startDate,
                    endDate: req.body.endDate ||
                        meetup.endDate,
                    description: req.body.description ||
                        meetup.description
                }

                return Object.assign(meetup, updates);
            })
            .then(meetup => {
                return meetup.save();
            })
            .then(updatedDoc => {
                res.status(200).json({
                    message: 'Event updated successfully',
                    meetup: updatedDoc
                });
            })
            .catch(err => res.status(500).json({ error: err.message });
    },

    deleteOne: (req, res) => {
        Meetup.findOneAndRemove(req.params.meetupId)
            .exec()
            .then(() => {
                return res.status(200).json({ 
                    message: 'Event deleted'
                });
            })
            .catch(err => res.status(500).json({ error: err.message });
    }
    
}