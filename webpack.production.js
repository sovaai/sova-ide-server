const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: [path.join(__dirname, 'src/main.ts')],
  externals: [nodeExternals({})],
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    /* new CopyPlugin([{ from: path.join(__dirname, 'certs'), to: path.join(__dirname, 'server/certs') }]), */
  ],
})
