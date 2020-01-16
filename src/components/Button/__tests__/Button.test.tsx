import * as React from "react";
import { mount } from 'enzyme';
import Button from 'src/components/Button/Button';

describe('Button', () => {
  it('Button Theme', () => {
    const wrapper = mount(<Button size="big" color="primary">primary</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Outline Button', () => {
    const wrapper = mount(<Button bordered size="big" color="primary">primary</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});