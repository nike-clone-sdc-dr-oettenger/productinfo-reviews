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
    this.setState({
      review: !this.state.review
    });
  }

  render() {
    return (
      <div className="JBodyReviewList" onClick={this.review}>
        <div id="reviewButton" className="JBody">
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
