/**At the moment we are forced to use react-app-rewired. Craco will be used in the future*/

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  paths: function (paths) {
    paths.appSrc = path.resolve(__dirname);
    return paths;
  },
};