const router = require('express').Router();

const meetupCtrl = require('../controllers/meetup.controller');
const adminCheck = require('../../middleware').adminCheck;
const jwtCheck = require('../../middleware').jwtCheck;

router.route('/')
    .get(meetupCtrl.allFuture) // public
    .post(meetupCtrl.newMeetup) // requre auth + admin

router.route('/:meetupId')
    .get(meetupCtrl.getOne) // public
    .put(meetupCtrl.updateOne) // requre auth + admin
    .delete(meetupCtrl.removeOne) // requre auth + admin