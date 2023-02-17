// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  paths: function (paths, env) {
    paths.appSrc = path.resolve(__dirname);
    return paths;
  },
};