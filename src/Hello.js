import React from 'react';
import Test from './Test';

export default props => {
  return (
      <div>
        <h1> this is Hello component {props.name} {props.count}</h1>
        <Test />
      </div>
  );
};
