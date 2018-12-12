/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import BandBox from '../../../src/components/bands/BandBox';

const testData =
  {
    _id: 1234,
    name: 'Violent Femmes',
    lookingForMembers: 'true',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJsOKbkAwJuSrRqpHs5qJX3j4kiqwG-paCYjWMm_XX7X8HCB3uQ',
    members: ['Gordon Gano – lead vocals, guitars, violin, banjo', 'Brian Ritchie – bass, backing and lead vocals, guitars, etc', 'Victor DeLorenzo – drums, percussion, backing vocals'],
    genres: ['Folk punk']
  };

const match = {
  params: {
    id: 1234
  }
};

sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: testData }));

describe('BandBox', () => {
  it('should show the correct bands image', done => {
    const component = mount(<BandBox band={testData}/>);
    expect(component.find('img').props().src).to.eq(testData.image);
    done();
  });

  it('should show the band name', done => {
    const component = mount(<BandBox match={match}/>);
    component.setState({ band: testData });
    expect(component.find('h4').text()).to.eq(testData.name);
    done();
  });

  it('should show an instrument the band is looking for', done => {
    const component = mount(<BandBox match={match}/>);
    component.setState({ band: testData });
    expect(component.find('.content').text()).to.eq('Looking for: ,(testData.name)');
    done();
  });

});
