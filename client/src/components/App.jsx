import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get('/api/reviews', { params: { shoe_id: 37 } })
      .then(data => {
        console.log(data);
        this.setState({
          dummydata: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>GetData</button>
        <h1>Hello from App</h1>
      </div>
    );
  }
}
