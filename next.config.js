//const withSass = require('@zeit/next-sass')
//module.exports = withSass()

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require('next/constants') // Get values from `next` package when building locally
    : require('next-server/constants'); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {
  defaultConfig.target = 'serverless';

  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  // const withCSS = require('@zeit/next-css');
  // return withCSS();

  const withSass = require('@zeit/next-sass');
  return withSass();
};
