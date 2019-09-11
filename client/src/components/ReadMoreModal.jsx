import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#reviewApp');

export default class ReadMoreModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Read More</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>X</button>
          <div>I am a modal</div>
          <div>
            <h4>THE FASTEST MARATHON SHOE JUST GOT FASTER. </h4>
            <p>
              The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking
              speed with a lighter design and faster feel than before. With more
              cushioning underfoot and reduced weight up top, the result is
              unprecedented energy return and comfort.
            </p>
            <h4>Benefits</h4>
            <li>
              Nike ZoomX foam delivers Nike Running’s greatest energy return
              yet, and NEXT% adds more ZoomX for responsive comfort on race day.
            </li>

            <li>
              VaporWeave material up top is an engineered woven mesh that’s
              light and breathable while giving a secure, comfortable fit.
            </li>

            <li>
              Updated laces loop through lightweight side sashes that eliminate
              the need for an arch band—helping to reduce shoe weight and
              relieve pressure on the top of your tendons.
            </li>

            <li>
              Full-length carbon fiber plate in the midsole helps prevent energy
              loss in toe bends.{' '}
            </li>

            <li>
              Wider toe area gives a roomier fit and helps engage forefoot
              muscles.
            </li>

            <li>
              Lengthwise flex grooves on outsole enhance multi-surface traction
              in a variety of weather conditions.
            </li>

            <li>The translucent grid pattern looks fast.</li>

            <li>Shown: Electric Green/Guava Ice/Black Style:</li>
            <li>AO4568-300</li>
          </div>
        </Modal>
      </div>
    );
  }
}
