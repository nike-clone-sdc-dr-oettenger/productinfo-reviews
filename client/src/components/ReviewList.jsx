import React from 'react';
import Review from './Review.jsx';

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: false
    };
    this.review = this.review.bind(this);
  }

  review() {
    console.log('you have pressed on the review div');

    this.setState({
      review: !this.state.review
    });
  }

  render() {
    {
      console.log('passing down an array of reviews', this.props.reviews);
    }
    return (
      <div className="JBodyReviewList">
        <div id="reviewButton" className="JBody" onClick={this.review}>
          <div className="JReviews">
            <div className="JColumnA">
              Reviews ({this.props.reviews.length})
            </div>
            <div className="JColumnBReviews">★★★★★★</div>
          </div>
          {this.state.review && <Review reviews={this.props.reviews} />}
        </div>
       
      </div>
    );
  }
}
