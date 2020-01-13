import React from 'react';

import { storiesOf } from '@storybook/react';
import Link from './index';

storiesOf('Link', module)
  .add('Renders link to Google', () => <Link href="http://google.com">Link to Google</Link>)
  .add('Renders link to Google with classname', () => <Link href="http://google.com" className="my-link-class">Link to Google</Link>);
