import * as React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('Icon', () => {
  it('Icon', () => {
    const wrapper = shallow(
      <Icon name="home" isLabel style={{ width: 20, height: 20 }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
