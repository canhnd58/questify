import React, {Component} from 'react';
import NewCharacter from './NewCharacter';

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          maxWidth: 800,
          margin: 'auto',
          border: '1px solid black',
          borderWidth: '0 1px 0 1px',
        }}>
        <NewCharacter />
      </div>
    );
  }
}

export default App;
