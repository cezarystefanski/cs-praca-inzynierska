import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import generateTitle from './generateTitle';

configure({ adapter: new Adapter() });

describe('generateTitle', () => {
  it('should generate example title', () => {
    const expectedTitle = 'Example | MusRate';
    const helmet = shallow(generateTitle('Example'));
    expect(helmet.props().title).toBe(expectedTitle);
  });
  it('should generate title with no props', () => {
    const expectedTitle = 'MusRate';
    const helmet = shallow(generateTitle());
    expect(helmet.props().title).toBe(expectedTitle);
  });
});
