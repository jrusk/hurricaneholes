import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import '../styles/styles.sass';

export default ({ pathname, children }) => {
  /*
   * Added this to toggle the is-active class. See:
   *
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = event => {
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#navbarmenu').classList.toggle('is-active');
  };

  const active = 'navbar-item is-tab is-active';
  const inactive = 'navbar-item is-tab';

  return (
    <div>
      <Head>
        <title>Hurricane Holes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link prefetch href="/">
              <a className="navbar-item">
                <img src="/static/hurricane_holes_logo.png" />
              </a>
            </Link>
            <a
              id="burger"
              onClick={toggleStyles}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarmenu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <Link prefetch href="/">
                <a className={pathname === '/' ? active : inactive}>Home</a>
              </Link>
              <Link prefetch href="/rigs">
                <a className={pathname === '/rigs' ? active : inactive}>Rigs</a>
              </Link>
              <Link prefetch href="/utilities">
                <a className={pathname === '/utilities' ? active : inactive}>
                  Utilities
                </a>
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="section">
        <div className="container">{children}</div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <span>
            Tel: (602) 943-3674 | Email:{' '}
            <a href="mailto:info@hurricaneholes.com" target="_top">
              info@hurricaneholes.com
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};
