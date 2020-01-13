import * as React from 'react';

interface ITestProps {
  name : string;
}

function Test({name} : ITestProps){
  return (
    <div>
      {name}
    </div>
  );
}

Test.defaultProps = {
  name : 'name'
};

export default Test;