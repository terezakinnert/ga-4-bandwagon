/* global describe,it,beforeEach */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
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

describe('BandBox', () => {
  it('should show the correct band', done => {
    const component = shallow(<BandBox band={testData}/>);
    expect(component.find('img').length).to.eq(1);
    expect(component.find('img').props().src).to.eq(testData.image);
    done();
  });
});
