import * as React from "react";
import { shallow } from 'enzyme';
import Link from 'src/components/Link';

describe('Link', () => {
  it('Renders link to Google', () => {
    const link = shallow(<Link href="http://google.com">Link to Google</Link>);
    expect(link).toMatchSnapshot();
  });

  it('Renders link to Google with classname', () => {
    const link = shallow(<Link href="http://google.com" className="my-link-class">Link to Google</Link>);
    expect(link).toMatchSnapshot();
  });
});