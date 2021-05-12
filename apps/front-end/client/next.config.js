// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')
const path = require('path')

const developmentConfig = require('./webpack.config')

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  },

  // Custom rules
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  typescript: {
    ignoreBuildErrors: false
  },
  future: {
    // 18.04.2021 - @nrwl/next/plugins - don't support this feature
    webpack5: false
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // if (dev) config.plugins.push(...developmentConfig)

    return config
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
})
