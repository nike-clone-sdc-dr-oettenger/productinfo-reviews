import React from 'react';

var moment = require('moment');

export default class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  // shoe_id: Number,
  // review_star: Number,
  // review_body: String,
  // review_username: String,
  // review_date: String,
  // review_location: String,
  // reviewTitle: String,
  // upStar: Number,
  // downStar: Number,
  // review_title: String

  render() {
    const reviews = this.props.reviews;
    return (
      <div>
        <div className="jWriteReview">
          <div>{String.fromCharCode(9733).repeat(5)}  5 Stars</div>
          <div>Write a Review</div>
        </div>
        <div id="reviews">
          {reviews.map(review => {
            return (
              <div className="JReviewContainer">
                <div className="JReviewTitle">{review.reviewTitle}</div>
                <div className="JcolumnStarRow">
                  <div className="jcolumnStarA">
                    {String.fromCharCode(9733).repeat(review.upStar)}
                  </div>
                  <div className="jcolumnStarB">
                    {review.review_username} -{' '}
                    {moment(review.review_date).format('MMM D, YYYY')}
                  </div>
                </div>
                <div className="JReviewBody">{review.review_body}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
