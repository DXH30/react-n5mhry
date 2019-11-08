import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// Buat Test component
class Test extends Component {
  constructor() {
    super();
    this.state = {
      config: 'none'
    }
  }

  render() {
    <div>

    </div>
  }
}

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
        {this.name}
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
