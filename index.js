import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'React',
      status: 'Config'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        {this.}
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
