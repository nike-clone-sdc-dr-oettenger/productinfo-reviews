import React from 'react';
import Review from './Review.jsx';

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>div from Review List</h1>
        <Review />
      </div>
    );
  }
}
