class GridsomeSVG {
  static defaultOptions() {
    return {
      doubleDuty: false,
      svgo: {
        plugins: [
          {
            prefixIds: {
              prefix: (_, {path}) => basename(path, '.svg'),
              delim: '-',
            },
            removeViewBox: false,
            removeTitle: false,
            sortAttrs: true,
          },
        ],
      }
    }
  }

  constructor(api, options) {
    api.chainWebpack(config => {
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      if (options.doubleDuty) {
        svgRule
          .oneOf('inline')
          .resourceQuery(/inline/)
          .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .end()
          .end()
          .oneOf('external')
          .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'assets/[name].[hash:8].[ext]',
            svgo: options.svgo
          });
      } else {
        svgRule
          .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .options({
            svgo: options.svgo,
          });
      }
    })
  }
}

module.exports = GridsomeSVG

