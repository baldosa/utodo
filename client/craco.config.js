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
              '@images': path.resolve(__dirname, 'src/static/images'),
              '@features': path.resolve(__dirname, 'src/features'),
              '@middleware': path.resolve(__dirname, 'src/middleware'),
              '@enhancers': path.resolve(__dirname, 'src/enhancers'),
              '@slices': path.resolve(__dirname, 'src/slices'),
              '@reducers': path.resolve(__dirname, 'src/reducers'),
              '@services': path.resolve(__dirname, 'src/services'),
            },
          }
        },
    }
};
