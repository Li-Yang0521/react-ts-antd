/*
 * @Author: Yang Li
 * @Date: 2020-02-02 10:35:52
 * @Last Modified by: Yang Li
 * @Last Modified time: 2020-02-02 10:43:29
 */
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  })
);
