/* global api, expect, describe, it, beforeEach */

const Band = require('../../models/band');
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

describe('Bands INDEX', () => {

  beforeEach(done => {
    Band.remove({})
      .then(() => Band.create(bandData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/bands')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/bands')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/bands')
      .end((err, res) => {
        res.body.forEach(object => expect(object).to.be.an('object'));
        done();
      });
  });

  // it('should return the correct data', done => {
  //   api.get('/api/bands')
  //     .end((err, res) => {
  //       res.body.forEach((band, index) => {
  //         expect(band.name).to.eq(bandData[index].name);
  //         // console.log(bandData[index].name);
  //         // Complete this
  //       });
  //       done();
  //     });
  // });

});
