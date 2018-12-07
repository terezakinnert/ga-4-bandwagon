/* global api, expect, describe, it, beforeEach */

const Band = require('../../models/band');

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

let bandId;

describe('Bands SHOW', () => {

  beforeEach(done => {
    Band.remove({})
      .then(() => Band.create(bandData))
      .then(band => {
        bandId = band._id;
        done();
      });
  });

  // it('should return a 200 response', done => {
  //   api.get(`/api/bands/${bandId}`)
  //     .end((err, res) => {
  //       expect(res.status).to.eq(200);
  //       done();
  //     });
  // });

  it('should return an object', done => {
    api.get(`/api/bands/${bandId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/bands/${bandId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(bandData.name);
        expect(res.body.location).to.eq(bandData.location);
        expect(res.body.lookingForMembers).to.eq(bandData.lookingForMembers);
        done();
      });
  });

});
