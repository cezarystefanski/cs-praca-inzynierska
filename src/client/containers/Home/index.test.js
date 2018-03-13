import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';
import store from '../../store';

configure({ adapter: new Adapter() });

const homeMock = mount(<Provider store={store}><MemoryRouter><Home /></MemoryRouter></Provider>);

describe('home container', () => {
  it('mounts correctly', () => {
    expect(homeMock.find('.numHomeVisits').text()).toEqual('1');
  });
  it('visit counter works correctly', () => {
    homeMock.unmount();
    homeMock.mount();
    homeMock.unmount();
    homeMock.mount();
    expect(homeMock.find('.numHomeVisits').text()).toEqual('3');
  });
  it('reset button works as intended', () => {
    homeMock.find('button').simulate('click');
    expect(homeMock.find('.numHomeVisits').text()).toEqual('0');
  });
});
