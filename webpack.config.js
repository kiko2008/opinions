/* eslint-disable */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
var Dotenv = require('dotenv-webpack');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');


var page = function({ title, template, chunks, filename }) {
  return new HtmlWebpackPlugin(
    {
      title: title,
      template: template,
      chunks: chunks,
      minify: {
        collapseWhitespace: true
      },
      filename: filename
    }
  )
}

var commonConfig = {
  entry: {
    opinions: ['babel-polyfill', 'whatwg-fetch', path.join(__dirname, 'src', 'pages', 'opinions', 'index')]
  },
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv(),
    page({
      title: 'Opinions',
      template: path.join(__dirname, 'src', 'pages', 'opinions', 'index.html'),
      chunks: ['opinions'],
      filename: path.resolve(__dirname, 'dist', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              name: "assets/[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(html|ejs)$/,
        use: ['html-loader', 'ejs-html-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      data: path.resolve(__dirname, 'src', 'data'),
      services: path.resolve(__dirname, 'src', 'services'),
      pages: path.resolve(__dirname, 'src', 'pages')
    }
  },
  devtool: 'source-map'
};

var devConfig = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  devServer: {
    overlay: true,
    port: 8080
  },
};

var prodConfig = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(
        {
          cssProcessorOptions: { map: { inline: false } }
        }
      ),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new CleanWebpackPlugin(['dist']),
    new CriticalPlugin({
      src: path.join(__dirname, 'src', 'pages', 'opinions', 'index.html'),
      inline: true,
      minify: true,
      dest: path.join(__dirname, 'dist', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
};

module.exports = (env, argv) =>
  argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);
