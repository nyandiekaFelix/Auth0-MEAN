const router = require('express').Router();

const meetupRoutes = require('./meetup.routes');
const rsvpRoutes = require('./rsvp.routes');
const userRoutes = require('./user.routes');

router.use('/meetups', meetupRoutes);
router.use('/rsvp', rsvpRoutes);
router.use('/users', userRoutes);

module.exports = router;

