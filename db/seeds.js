const mongoose = require('mongoose');
const { dbUri } = require('../config/environment');

const Band = require('../models/band');
const User = require('../models/user');
const Instrument = require('../models/instrument');
const Message = require('../models/message');

const userIds = [
  '5c090718a118163cfc161168',
  '5c090724a118163cfc161169'
];

const bandData = [
  {
    name: 'Blues Brothers',
    location: 'Chicago',
    lookingForMembers: true,
    lookingForInstrument: 'Drums'
  },
  {
    name: 'Shellac',
    location: 'Chicago',
    lookingForMembers: false,
    lookingForInstrument: 'Vocals'
  }
];

const userData = [
  {
    username: 'Bob',
    email: 'b@b',
    password: 'pass',
    location: 'Chicago',
    instrumentsPlayed: 'Drums',
    lookingForBands: true,
    _id: userIds[0]
  }, {
    username: 'Jake',
    email: 'j@j',
    password: 'pass',
    location: 'Chicago',
    instrumentsPlayed: 'Vocals',
    lookingForBands: false,
    _id: userIds[1]
  }
];

const instrumentData = [
  { instrument: 'Drums' },
  { instrument: 'Vocals' }
];

const messageData = [
  {
    from: userIds[0],
    to: userIds[1],
    content: 'Hi! You wanna jam?'
  }, {
    from: userIds[1],
    to: userIds[0],
    content: 'Hi, sure! Whereabouts are you?'
  }
];

mongoose.connect(dbUri);
Band.collection.drop();
User.collection.drop();
Instrument.collection.drop();
Message.collection.drop();

Band.create(bandData)
  .then(bands => {
    console.log(`Created ${bands.length} bands.`);
    return User.create(userData);
  })
  .then(users => {
    console.log(`Created ${users.length} users.`);
    return Instrument.create(instrumentData);
  })
  .then(instruments => {
    console.log(`Created ${instruments.length} instruments.`);
    return Message.create(messageData);
  })
  .then(messages => {
    console.log(`Created ${messages.length} messages.`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
