import App from 'next/app';

import Layout from '../components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Layout {...pageProps} pathname={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
