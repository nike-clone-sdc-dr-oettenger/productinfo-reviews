import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: []
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
      </div>
    );
  }
}
