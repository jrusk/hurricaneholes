import App from "next/app";
import { Grommet, grommet as grommetTheme } from "grommet";
import Layout from "../components/Layout";

const theme = grommetTheme;
theme.global.colors.brand = { light: "#3273DC", dark: "#2160C4" };

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Grommet theme={theme}>
        <Layout {...pageProps} pathname={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </Grommet>
    );
  }
}
