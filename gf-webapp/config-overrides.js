/* eslint-disable @typescript-eslint/no-var-requires */
const {aliasWebpack} = require("react-app-alias-ex");
const path = require("path");

const options = {webpack: {alias: {"gf-ui-lib": path.resolve(__dirname, "../")}}};

module.exports = aliasWebpack(options);