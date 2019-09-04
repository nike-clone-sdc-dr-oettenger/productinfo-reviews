import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import styles from './styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: [],
      sizes: [{}]
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(
        'http://localhost:3000/api/reviews',
        { crossDomain: true },
        { params: { shoe_id: 83 } }
      )
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
    const fixingPixel = {
      marginLeft: '-38px'
    };

    return (
      <div style={styles.nikeFont}>
        <button onClick={this.getData}>GetData</button>
        <div className="row" id="typePrice" style={styles.shoePrice}>
          <div className="col-8">Running Shoe</div>
          <div className="col-4">$250</div>
        </div>
        <div id="productTitle" style={styles.shoeTitle}>
          <h1>Nike ZoomX Vaporfly Next%</h1>
        </div>
        <div id="shoesize" className="row" style={styles.shoeSize}>
          <div className="col-8">Select Size</div>
          <div className="col-4" style={fixingPixel}>
            Size Guide
          </div>
        </div>
        <div>
          <button variant="light" type="button">
            M 4 / W 5.5
          </button>
          <button variant="light" type="button">
            M 4.5 / W 6
          </button>
          <br />
          <button variant="light" type="button">
            M 5 / W 6.5
          </button>
          <button variant="light" type="button">
            M 5.5 / W 7
          </button>
          <br />
          <button variant="light" type="button">
            M 6 / W 7.5
          </button>
          <button variant="light" type="button">
            M 6.5 / W 8
          </button>
          <br />
          <button variant="light" type="button">
            M 7 / W 8.5
          </button>
          <button variant="light" type="button">
            M 7.5 / W 9
          </button>
          <br />
          <button variant="light" type="button">
            M 8 / W 9.5
          </button>
          <button variant="light" type="button">
            M 8.5 / W 10
          </button>
          <br />
          <button variant="light" type="button">
            M 9 / W 10.5
          </button>
          <button variant="light" type="button">
            M 9.5 / W 11
          </button>
          <br />
          <button variant="light" type="button">
            M 10 / W 11.5
          </button>
          <button variant="light" type="button">
            M 10.5 / W 12
          </button>
          <br />
          <button variant="light" type="button">
            M 11 / W 12.5
          </button>
          <button variant="light" type="button">
            M 11.5 / W 13
          </button>
          <br />
          <button variant="light" type="button">
            M 12 / W 13.5
          </button>
          <button variant="light" type="button">
            M 12.5 / W 14
          </button>
          <br />
          <button variant="light" type="button">
            M 13 / W 14.5
          </button>
          <br />
        </div>

        <br />
        <button>Add To Cart</button>
        <br />
        <br />
        <button>Favorite Heart</button>
        <br />
        <p>
          The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking
          speed with a lighter design and faster feel than before. With more
          cushioning underfoot and reduced weight up top, the result is
          unprecedented energy return and comfort.
        </p>
        <br />
        <ul>
          <li>Shown: Electric Green/Guava Ice/Black</li>
          <li>Style: AO4568-300</li>
        </ul>
        <br />
        <button>Read More</button>
        <br />
        <button>Free Shipping & Returns</button>
        <br />
        <div>
          <ReviewList review={this.state.dummydata} />
        </div>
        <br />
      </div>
    );
  }
}
