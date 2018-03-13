import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Example from './Example.react';

const exampleMock = renderer
  .create((
    <MemoryRouter>
      <Example
        exampleStoreNumber={500}
        onBindClick={() => {}}
        onIncreaseClick={() => {}}
        onDecreaseClick={() => {}}
      />
    </MemoryRouter>
  ))
  .toJSON();

describe('home component', () => {
  it('renders correctly', () => {
    expect(exampleMock).toMatchSnapshot();
  });
});
