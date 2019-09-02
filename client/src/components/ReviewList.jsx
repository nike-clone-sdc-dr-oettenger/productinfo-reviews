import React from 'react';
import Review from './Review.jsx';

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const list = this.props.reviews;
    // const listItems = list.map((review, index) => (
    //   <Review key={index} review={review} />
    // ));

    return (
      <div>
        {console.log('this props review', this.props.review)}
        <h1>div from Review List</h1>
        {/* {listItems.map(review => {
          return <Review review={review} />;
        })} */}
        {/* {listItems} */}
      </div>
    );
  }
}
