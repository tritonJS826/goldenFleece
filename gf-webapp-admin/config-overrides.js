import * as path from "path";

export default{
  paths: function (paths) {
    paths.appSrc = path.resolve(__dirname);
    return paths;
  },
};