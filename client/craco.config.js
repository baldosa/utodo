const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts",
    webpack: {
        configure: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src'),
              '@assets': path.resolve(__dirname, 'src/components'),
              '@components': path.resolve(__dirname, 'src/components'),
              '@views': path.resolve(__dirname, 'src/views'),
              // ...etc
            },
          }
        },
    }
};
