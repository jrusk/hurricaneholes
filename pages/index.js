import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export default class extends React.Component {
  state = {};

  handleClose = () => this.setState({closeModal: true});

  render() {
    return (
      <Layout>
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
        <section className="section">
          <div className="container">
            <h1 className="title">Welcome to Hurricane Holes</h1>
            <img src="static/jeep.jpg" className="headerImage" />
            <p>We drill holes in dirt.</p>
            <br />
            <h3 className="subtitle">Contact</h3>
            <p>Address: 1548 W. Northern Ave. Phoenix, AZ 85021</p>
            <p>Tel: (602) 943-3674</p>
            <p>Fax: (602) 944-2293</p>
            <p>
              Email:{' '}
              <a href="mailto:info@hurricaneholes.com" target="_top">
                info@hurricaneholes.com
              </a>
            </p>
            <br />
            <h3 className="subtitle">Utilities</h3>
            <p>
              You must concact Arizona 811 (Arizona Bluestake) before we dig:{' '}
              <Link href="http://www.azbluestake.com">
                <a>Arizona 811</a>
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}
