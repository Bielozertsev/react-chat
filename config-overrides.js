const { compose } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');
const rewirePolyfils = require('react-app-rewire-polyfills');

module.exports = compose(
  rewirePolyfils,
  rewireEslint,
);
