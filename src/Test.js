import React from 'react';
import { myContext } from './Context';
export default () => {
  return (
    <myContext.Consumer>
      {context => {
        return (
          <h1>
            This is test component {context.counter} {context.name}
          </h1>
        );
      }}
    </myContext.Consumer>
  );
};
