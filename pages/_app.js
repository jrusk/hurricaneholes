import App, { Container } from 'next/app';

import Layout from '../components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Layout {...pageProps} pathname={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
