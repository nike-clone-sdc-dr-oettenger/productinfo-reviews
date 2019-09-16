import React from 'react';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = this.props.reviews;

    //     downStar: 7
    // review_body: "Consequatur vitae tenetur suscipit quam enim. Repellat hic consequatur aliquid. Ipsa dolorum excepturi accusamus. Sunt dolores nostrum quia. Enim soluta id natus dolore rerum.nullEt quis delectus voluptate neque et beatae cupiditate earum. Distinctio vero laudantium dolores nisi praesentium et. Ut cumque possimus suscipit maxime. Aut quis ut consequatur. Incidunt quis ut consequatur vitae similique et eos. Deleniti fugiat amet exercitationem.nullExpedita repellendus nostrum odio explicabo sequi. Incidunt ab ipsa doloremque non. In ipsa a magni dicta consequatur et qui ad. Eos quia sunt et hic quibusdam maiores dignissimos."
    // review_location: "Lake Jaydon, PA, US "
    // review_star: 4
    // review_username: "Mac.Dicki"
    // shoe_id: 16
    // upStar: 4

    {
      console.log('from the review components', this.props.reviews);
    }

    return (
      <div>
        {reviews.map(review => {
          return (
            <div id="review">
              <div></div>
            </div>
          );
        })}
      </div>
    );
  }
}
