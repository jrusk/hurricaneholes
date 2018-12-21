import Link from 'next/link';
import Layout from '../components/layout';

export default () => (
  <Layout>
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
