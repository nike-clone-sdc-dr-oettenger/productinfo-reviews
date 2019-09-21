import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import styles from './styles.css';

import ReadMoreModal from './ReadMoreModal.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      sizes: [{}],
      readMore: false,
      reading: false,
      showModal: false
    };
    this.getData = this.getData.bind(this);

    this.readMore = this.readMore.bind(this);
    this.shipping = this.shipping.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.setState.bind(this);
  }

  getData() {
    axios
      .get('/api/reviews', { params: { shoe_id: 2 } })
      .then(data => {
        this.setState({
          reviews: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getData();
  }

  readMore() {
    console.log('you have pressed readmore!');
    this.setState({
      readMore: !this.state.readMore
    });
  }

  shipping() {
    this.setState({
      shipping: !this.state.shipping
    });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="JBody">
        <div className="JRowTitle">
          <div className="JColumnA">Running Shoe</div>
          <div className="JColumnB">$250</div>
        </div>

        <div id="productTitle">
          <span className="JproductTitle">
            Nike ZoomX Vaporfly <br></br> Next%{' '}
          </span>
        </div>
        <div id="shoesize" className="JRowSizeGuide">
          <div className="JColumnASize">Select Size</div>
          <div className="JColumnBGuide">Size Guide</div>
        </div>
        <br />

        <div className="jgrid-container">
          <button className="jgrid-item" type="radio">
            M 4 / W 5.5
          </button>
          <button className="jgrid-item" type="radio">
            M 4.5 / W 6
          </button>
          <button className="jgrid-item" type="radio">
            M 5 / W 6.5
          </button>
          <button className="jgrid-item" type="radio">
            M 5.5 / W 7
          </button>
          <button className="jgrid-item" type="radio">
            M 6 / W 7.5
          </button>
          <button className="jgrid-item" type="radio">
            M 6.5 / W 8
          </button>
          <button className="jgrid-item" type="radio">
            M 7 / W 8.5
          </button>
          <button className="jgrid-item" type="radio">
            M 7.5 / W 9
          </button>
          <button className="jgrid-item" type="radio">
            M 8 / W 9.5
          </button>
          <button className="jgrid-item" type="radio">
            M 8.5 / W 10
          </button>
          <button className="jgrid-item" type="radio">
            M 9 / W 10.5
          </button>
          <button className="jgrid-item" type="radio">
            M 9.6 / W 11
          </button>

          <button className="jgrid-item" type="radio">
            M 10 / W 11.5
          </button>
          <button className="jgrid-item" type="radio">
            M 10.5 / W 12
          </button>
          <button className="jgrid-item" type="radio">
            M 11 / W 12.5
          </button>
          <button className="jgrid-item" type="radio">
            M 11.5 / W 13
          </button>
          <button className="jgrid-item" type="radio">
            M 12 / W 13.5
          </button>
          <button className="jgrid-item" type="radio">
            M 12.5 / W 14
          </button>
          <button className="jgrid-item" type="radio">
            M 13 / W 14.5
          </button>
        </div>

        <div id="addToCart" className="addToCart">
          <button className="JaddtoCart">Add To Cart</button>
        </div>
        <div id="heart" className="heart">
          <button className="JHeart">Favorite ♡</button>
        </div>
        <div id="description" className="JDescription">
          <p>
            The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking
            speed with a lighter design and faster feel than before. With more
            cushioning underfoot and reduced weight up top, the result is
            unprecedented energy return and comfort.
          </p>
        </div>
        <div id="showAndStyle">
          <ul>
            <li>Shown: Electric Green/Guava Ice/Black</li>
            <li>Style: AO4568-300</li>
          </ul>
        </div>
        <div id="readMoreModal">
          <ReadMoreModal />
        </div>
        <hr></hr>
        <div>
          <div
            id="freeShippingcontainer"
            className="JFreeshipping"
            onClick={this.shipping}
          >
            <div className="JFreeshippingA">Free Shipping & Returns</div>
            <div className="JfreeshippingB"> </div>
          </div>

          {this.state.shipping && (
            <div className="JShippingP">
              Free standard shipping and 30-day free returns, only with
              NikePlus. Learn more. Return policy exclusions apply.
              <ul className="JshippingList">
                <li>Standard / Arrives 2-4 Business Days</li>
                <li>Two-Day / Arrives 2-3</li>
                <li>Business Days Next-Day / Arrives 1-2 Business Days</li>
              </ul>
            </div>
          )}
        </div>
        <hr></hr>

        <div id="reviewList">
          <ReviewList reviews={this.state.reviews} />
        </div>
        <hr></hr>
        <div className="needHelp">Need Help? Chat now</div>
      </div>
    );
  }
}
