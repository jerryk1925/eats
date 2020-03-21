const postcssPresetEnv = require('postcss-preset-env');
const postcssVarsConfig = require('./postcss.vars.js');

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-nested'),
          postcssPresetEnv({
            stage: 0,
            browsers: 'last 5 versions',
            autoprefixer: { grid: true },
            features: {
              'custom-properties': {
                preserve: false,
                importFrom: [postcssVarsConfig]
              },
              'custom-media-queries': {
                preserve: false,
                importFrom: [postcssVarsConfig]
              }
            }
          })
        ]
      }
    }
  }
};
