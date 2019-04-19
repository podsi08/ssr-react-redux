const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'isomorphic-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name].[ext]',
              emitFile: false,
            },
          },
        ],
      },
    ]
  },
  externals: [webpackNodeExternals()]
};
