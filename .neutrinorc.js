const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        rules: {
          'arrow-body-style': 0
        }
      },
    }),
    react({
      html: {
        title: 'Learn About Pokemon!'
      },
      babel: {
        'presets': [ '@babel/preset-env' ],
        'plugins': [ '@babel/plugin-transform-runtime']
      }
    }),
    jest(),
  ],
};
