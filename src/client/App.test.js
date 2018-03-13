import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.react';

const appMock = renderer
  .create(<App />)
  .toJSON();

describe('home component', () => {
  it('renders correctly', () => {
    expect(appMock).toMatchSnapshot();
  });
});
