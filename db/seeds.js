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

const instrumentIds = [
  '5c090718a118163cfc16a168',
  '5c090724a118163cfc16a169',
  '5c090724a118163cfc16a16a',
  '5c090724a118163cfc16a16b',
  '5c090724a118163cfc16a16c',
  '5c090724a118163cfc16a16d',
  '5c090724a118163cfc16a16e',
  '5c090724a118163cfc16a16f',
  '5c090724a118163cfc16b16a',
  '5c090724a118163cfc16c16a',
  '5c090724a118163cfc16d16a',
  '5c090724a118163cfc16e16a',
  '5c090724a118163cfc16f16a',
  '5c090724a118163cfc16916a'
];

const bandData = [
  {
    name: 'Nitkowski',
    // location: 'London',
    lookingForMembers: true,
    lookingForInstrument: 'Bass',
    image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/10285450_10154800649190473_5469665624404377633_o.jpg?_nc_cat=108&_nc_ht=scontent-lhr3-1.xx&oh=0dbc1e8ca8a1a1dcdaca4d1ed1cdc95d&oe=5C636FC6',
    members: ['Ed - Guitar, Vocals', 'Dan - Guitar, Vocals', 'Alex - Drums', 'Mike - Synth'],
    genres: ['NWOBMC'],
    about: 'Flat out Dream Theatre/Miles Davis tribute band; available for weddings, bar mitzvahs, live snuff theatre'
  },
  {
    name: 'Shield Your Eyes',
    // location: 'London',
    lookingForMembers: true,
    lookingForInstrument: 'Bass',
    image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/10669286_10152739101509752_3080118464520620406_o.jpg?_nc_cat=101&_nc_ht=scontent-lhr3-1.xx&oh=c17a963a86075994bde6ee8b13601a58&oe=5CA97FB1',
    members: ['Stef Ketteringham - vocals, lead guitar, harmonica', 'Henri Grimes - drums', 'Daniel Pedersen - bass guitar'],
    influences: ['Torticoli', 'Betunizer', 'Za!', 'Picore', 'Family Elan', 'Bamboo', 'Cotton Ponies', 'Rattle', 'Sweet Williams', 'Depakine Chrono', 'Papaye', 'Falenizza Horsepower', 'Nope', 'One Lick Less', 'Jealousy Mountain Duo']
  }
];

const userData = [
  {
    username: 'Bob',
    email: 'b@b',
    password: 'pass',
    location: 'Chicago',
    instrumentsPlayed: instrumentIds[0],
    lookingForBands: true,
    _id: userIds[0]
  }, {
    username: 'Jake',
    email: 'j@j',
    password: 'pass',
    location: 'Chicago',
    instrumentsPlayed: [instrumentIds[1]],
    lookingForBands: false,
    _id: userIds[1]
  }
];


const instrumentData = [
  {
    _id: instrumentIds[0],
    name: 'Drums'
  },
  {
    _id: instrumentIds[1],
    name: 'Vocals'
  },
  {
    _id: instrumentIds[2],
    name: 'Bass'
  },
  {
    _id: instrumentIds[3],
    name: 'Lead guitar'
  },
  {
    _id: instrumentIds[4],
    name: 'Rhythm guitar'
  },
  {
    _id: instrumentIds[5],
    name: 'Piano'
  },
  {
    _id: instrumentIds[6],
    name: 'Keyboard'
  },
  {
    _id: instrumentIds[7],
    name: 'Synth'
  },
  {
    _id: instrumentIds[8],
    name: 'Saxophone'
  },
  {
    _id: instrumentIds[9],
    name: 'Clarinet'
  },
  {
    _id: instrumentIds[10],
    name: 'Double bass'
  },
  {
    _id: instrumentIds[11],
    name: 'Violin'
  },
  {
    _id: instrumentIds[12],
    name: 'Accordion'
  }
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
