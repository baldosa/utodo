const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts",
    webpack: {
        configure: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src'),
              '@assets': path.resolve(__dirname, 'src/assets'),
              '@components': path.resolve(__dirname, 'src/components'),
              '@views': path.resolve(__dirname, 'src/views'),
              '@images': path.resolve(__dirname, 'src/static/images'),
            },
          }
        },
    }
};
