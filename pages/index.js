import React from 'react';
//import Layout from '../components/layout';

export default () => (
  <div>
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
