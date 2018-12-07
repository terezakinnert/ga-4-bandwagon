/* global api, expect, describe, it, beforeEach */

const Band = require('../../models/band');
const User = require('../../models/user');
const { secret } = require('../../config/environment');
const jwt = require('jsonwebtoken');

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

let token;

describe('Bands CREATE', () => {

  beforeEach(done => {
    Band.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        username: 'test',
        email: 'test',
        password: 'test'
      }))
      .then((user) => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6d' });
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.post('/api/bands')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 201 response', done => {
    api.post('/api/bands')
      .set('Authorization', `Bearer ${token}`)
      .send(bandData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/bands')
      .set('Authorization', `Bearer ${token}`)
      .send(bandData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/bands')
      .set('Authorization', `Bearer ${token}`)
      .send(bandData)
      .end((err, res) => {
        expect(res.body.name).to.eq(bandData.name);
        expect(res.body.location).to.eq(bandData.location);
        expect(res.body.lookingForMembers).to.eq(bandData.lookingForMembers);
        done();
      });
  });

});
