import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import styles from './styles.css';

import ReadMoreModal from './ReadMoreModal.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: [],
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
      .get('/api/reviews', { params: { shoe_id: 95 } })
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
        <button onClick={this.getData}>GetData</button>
        <div className="JRow">
          <div className="JColumnA">Running Shoe</div>
          <div className="JColumnB">$250</div>
        </div>

        <div id="producTitle">
          <h1>Nike ZoomX Vaporfly Next%</h1>
        </div>
        <div id="shoesize" className="JRow">
          <div className="JColumnA">Select Size</div>
          <div className="JColumnB">Size Guide</div>
        </div>

        <br />

        <div className="JbuttonGrid">
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 5 / W 6.5
            </button>
            <button className="jButton" type="radio">
              M 5.5 / W 7
            </button>
          </div>
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 6 / W 7.5
            </button>
            <button className="jButton" type="radio">
              M 6.5 / W 8
            </button>
          </div>
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 7 / W 8.5
            </button>
            <button className="jButton" type="radio">
              M 7.5 / W 9
            </button>
          </div>

          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 8 / W 9.5
            </button>
            <button className="jButton" type="radio">
              M 8.5 / W 10
            </button>
          </div>
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 9 / W 10.5
            </button>
            <button className="jButton" type="radio">
              M 9.5 / W 11
            </button>
          </div>
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 10 / W 11.5
            </button>
            <button className="jButton" type="radio">
              M 10.5 / W 12
            </button>
          </div>

          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 11 / W 12.5
            </button>
            <button className="jButton" type="radio">
              M 11.5 / W 13
            </button>
          </div>
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 12 / W 13.5
            </button>
            <button className="jButton" type="radio">
              M 12.5 / W 14
            </button>
          </div>
          <div id="buttonRow" className="JRow">
            <button className="jButton" type="radio">
              M 13 / W 14.5
            </button>
          </div>
        </div>
        <div id="addToCart">
          <button>Add To Cart</button>
        </div>
        <div id="heart">
          <button>Favorite Heart</button>
        </div>
        <div id="description">
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
        <div id="freeShippingButton">
          <button id="freeShippingButton" onClick={this.shipping}>
            Free Shipping & Returns
          </button>
          {this.state.shipping && (
            <p>
              Free standard shipping and 30-day free returns, only with
              NikePlus. Learn more. Return policy exclusions apply. Standard /
              Arrives 2-4 Business Days Two-Day / Arrives 2-3 Business Days
              Next-Day / Arrives 1-2 Business Days
            </p>
          )}
        </div>
        <div id="reviewList">
          <ReviewList />
        </div>
      </div>
    );
  }
}
