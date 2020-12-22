const {override, addBabelPreset} = require("customize-cra");

module.exports = override(addBabelPreset("@emotion/babel-preset-css-prop"));

// merupakan sebuah config yang men override babel preset di dalam creat react app dengan bantuan customize-cra