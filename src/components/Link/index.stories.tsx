import React from 'react';

import { storiesOf } from '@storybook/react';
import Link from './index';

storiesOf('Link', module)
  .add('Link', () => <Link href="http://google.com" className="my-link-class">Link to Google</Link>);
