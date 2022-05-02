const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const copy = require('@neutrinojs/copy');
const neutrino = require('neutrino');

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
      }
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
    copy({
      patterns: [ {from: 'src/assets/favicon.ico'} ],
      pluginId: 'copy',
    }),
    (neutrino) => {
      neutrino.config.performance
      .maxEntrypointSize(512000)
      .maxAssetSize(512000);
    }
  ]
};
