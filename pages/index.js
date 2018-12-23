import React from 'react';
//import Layout from '../components/layout';

export default class extends React.Component {
  state = {};

  handleClose = () => this.setState({ closeModal: true });

  render() {
    return (
      <div>
        <div
          className={this.state.closeModal ? 'modal' : 'modal is-active'}
          onClick={this.handleClose}>
          <div className="modal-background" />
          <div className="modal-content">
            <img src="static/red_bow.png" />
            <h1 className="is-size-1 has-text-white has-text-centered has-text-weight-bold is-italic">
              Merry Christmas!
            </h1>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
        <h1 className="title">Welcome to Hurricane Holes</h1>
        <img src="static/jeep.jpg" className="headerImage" />
        <p>We drill holes in dirt.</p>
        <br />
        <h3 className="subtitle">Contact</h3>
        <p>
          <strong>Address:</strong> 1548 W. Northern Ave. Phoenix, AZ 85021
        </p>
        <p>
          <strong>Tel:</strong> (602) 943-3674
        </p>
        <p>
          <strong>Fax:</strong> (602) 944-2293
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@hurricaneholes.com" target="_top">
            info@hurricaneholes.com
          </a>
        </p>
      </div>
    );
  }
}
