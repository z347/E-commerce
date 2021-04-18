const ESLintPlugin = require('eslint-webpack-plugin')

const ESLint = new ESLintPlugin({
  extensions: ['ts', 'tsx'],
  failOnError: true
})

const developmentConfig = [ESLint]

module.exports = developmentConfig
