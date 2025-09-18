// config-overrides.js
module.exports = function override(config) {
  config.resolve.fallback = {
    buffer: false,
    process: false,
    stream: false,
    crypto: false,
    http: false,
    https: false,
    assert: false,
    os: false,
    url: false,
    net: false,
    tls: false,
  };

  return config;
};
