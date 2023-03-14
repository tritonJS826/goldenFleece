// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {addWebpackAlias, override} = require("customize-cra");


module.exports = override(
  addWebpackAlias({["src"]: path.resolve(__dirname, "src")}),
);