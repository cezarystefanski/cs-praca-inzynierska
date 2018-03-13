import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home.react';

const homeMock = renderer
  .create((
    <MemoryRouter>
      <Home homeVisits={0} onResetClick={() => {}} onHomeVisit={() => {}} />
    </MemoryRouter>
  ))
  .toJSON();

describe('home component', () => {
  it('renders correctly', () => {
    expect(homeMock).toMatchSnapshot();
  });
});
