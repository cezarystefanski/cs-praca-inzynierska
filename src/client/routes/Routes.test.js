import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from './Routes.react';

configure({ adapter: new Adapter() });

const routeMock = shallow(<Routes />);

describe('routes', () => {
  it('chould render route map', () => {
    expect(routeMock.find('Route').exists()).toEqual(true);
  });
});
