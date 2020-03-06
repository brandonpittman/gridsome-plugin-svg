const {basename} = require('path');
const defaultPlugins = [
  {
    removeTitle: false
  },
  {
    prefixIds: {
      prefix: (_, {path}) => basename(path, '.svg'),
      delim: '-',
    },
  },
  {
    removeDesc: false
  },
  {
    removeViewBox: false,
  },
  {
    sortAttrs: true,
  },
]

class GridsomeSVG {
  static defaultOptions() {
    return {
      goesBothWays: false,
      svgo: [],
    }
  }

  constructor(api, {goesBothWays, svgo}) {
    api.chainWebpack(config => {
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      if (goesBothWays) {
        svgRule
          .oneOf('inline')
          .resourceQuery(/inline/)
          .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .options({
            svgo: {
              plugins: [
                ...defaultPlugins,
                ...svgo
              ]
            }
          })
          .end()
          .end()
          .oneOf('external')
          .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'assets/[name].[hash:8].[ext]',
            svgo: {
              plugins: [
                ...defaultPlugins,
                ...svgo
              ]
            }
          });
      } else {
        svgRule
          .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .options({
            svgo: {
              plugins: [
                ...defaultPlugins,
                ...svgo
              ]
            }
          });
      }
    })
  }
}

module.exports = GridsomeSVG
