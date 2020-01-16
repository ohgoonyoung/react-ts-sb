import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from './index';
import IconNameTypes from './IconNameTypes';

let IconNameData: IconNameTypes[] = [
  "home", "search", "alarm", "arrow_left_black", "arrow_left_white",
  "borderDown", "borderUp", "cat", "checked", "unChecked",
  "close_black", "date", "filter", "image", "menu",
  "star", "user",
];

const CustomIcon = (name: IconNameTypes) => {
  return (
    <div style={{ padding: 10, width: 100, height: 50 }}>
      <Icon name={name} isLabel style={{ width: 20, height: 20 }} />
    </div>
  );
}

storiesOf('Icon', module)
  .add('Icon', () =>
    <div style={{ padding: 10, width: '80%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          IconNameData.map((name) => CustomIcon(name))
        }
      </div>
    </div>);
