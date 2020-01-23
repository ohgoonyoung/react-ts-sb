import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from './index';
import { IconNameData, IconNameType } from './IconTypes';

const CustomIcon = (name: IconNameType) => {
  return (
    <div style={{ padding: 10, width: 100, height: 50 }}>
      <Icon name={name} isLabel style={{ width: 20, height: 20 }} />
    </div>
  );
};

storiesOf('Icon', module).add('Icon', () => (
  <div style={{ padding: 10, width: '80%' }}>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {IconNameData.map(name => CustomIcon(name))}
    </div>
  </div>
));
