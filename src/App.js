import React from 'react';
import './style.css';
import Hello from './Hello';
import { myContext } from './Context';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  render() {
    return (
      <myContext.Provider value={{ counter: 10, name: 'kumar' }}>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
          <Hello name="Vijay" count={this.state.count} />
        </div>
      </myContext.Provider>
    );
  }
}

export default App;
