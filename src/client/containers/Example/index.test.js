import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Example from './index';
import store from '../../store';

configure({ adapter: new Adapter() });

const exampleMock = mount(<Provider store={store}><MemoryRouter><Example /></MemoryRouter></Provider>);

describe('example container', () => {
  it('mounts correctly', () => {
    expect(exampleMock.find('.exampleNumber').first().text()).toEqual('500');
    expect(exampleMock.find('.exampleNumber').last().text()).toEqual('0');
  });
  it('all buttons works as intended', () => {
    const logButton = exampleMock.find('p').first().find('button');
    const decreaseButton = exampleMock.find('p').last().find('button').first();
    const increaseButton = exampleMock.find('p').last().find('button').last();
    logButton.simulate('click');
    expect(exampleMock.find('.exampleNumber').last().text()).toEqual('500');
    decreaseButton.simulate('click');
    expect(exampleMock.find('.exampleNumber').last().text()).toEqual('499');
    increaseButton.simulate('click');
    increaseButton.simulate('click');
    expect(exampleMock.find('.exampleNumber').last().text()).toEqual('501');
  });
});
