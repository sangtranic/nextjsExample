const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const {
  NODE_ENV,
  DOMAIN,
  RADIO_DOMAIN,
  IMG_DOMAIN,
  RADIO_API
} = process.env;
const isProd = NODE_ENV === 'production';

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    isProd,
    DOMAIN,
    RADIO_DOMAIN,
    IMG_DOMAIN,
    RADIO_API
  }
})
