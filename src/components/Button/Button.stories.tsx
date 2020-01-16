import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Button Theme', () =>
    <div>
      {/* <div style={{ display: "flex", padding: 10 }}>
        <Button size="big" color="default" >default</Button>
      </div> */}
      <div style={{ padding: 10 }}>
        <Button size="big" color="primary">primary</Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button size="big" color="secondary">secondary</Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button size="big" color="brownishGrey">brownishGrey</Button>
      </div>
    </div>)

  .add('Outline Button', () =>
    <div>
      <div style={{ padding: 10 }}>
        <Button bordered size="big" color="primary" >primary</Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button bordered size="big" color="secondary" >secondary</Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button bordered size="big" color="brownishGrey" >brownishGrey</Button>
      </div>
    </div>);