import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { Anchor, Box, Footer, Nav } from "grommet";

const Layout = ({ pathname, children }) => {
  const borderActive = {
    color: "#3273DC",
    size: "medium",
    side: "bottom"
  };

  return (
    <div>
      <Head>
        <title>Hurricane Holes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <Nav direction="row" background="light-1" pad="small">
        <Anchor href="/">
          <Image
            src="/hurricane_holes_logo.png"
            alt="logo"
            width="40"
            height="30"
          />
        </Anchor>
        <Box border={pathname === "/" ? borderActive : false}>
          <Anchor href="/" hoverIndicator>
            Home
          </Anchor>
        </Box>
        <Box border={pathname === "/rigs" ? borderActive : false}>
          <Anchor href="/rigs" hoverIndicator>
            Rigs
          </Anchor>
        </Box>
        <Box border={pathname === "/utilities" ? borderActive : false}>
          <Anchor href="/utilities" hoverIndicator>
            Utilities
          </Anchor>
        </Box>
      </Nav>
      <Box pad="medium">{children}</Box>
      <Footer background="light-1" pad="medium">
        <span>
          Tel: (602) 943-3674 | Email:{" "}
          <Anchor href="mailto:info@hurricaneholes.com" target="_top">
            info@hurricaneholes.com
          </Anchor>
        </span>
      </Footer>
    </div>
  );
};

export default Layout;
