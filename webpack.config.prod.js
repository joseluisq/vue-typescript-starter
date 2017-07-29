const { resolve } = require('path')
const Webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const Manifest = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const dist = resolve(__dirname, 'dist')
const src = resolve(__dirname, 'src')

module.exports = {
  entry: {
    app: resolve(src, 'index.ts')
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: dist
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        exclude: resolve(src, 'main'),
        loader: ExtractPlugin.extract({
          use: [
            'css-loader?localIdentName="[local]-[hash:base64:5]"',
            'postcss-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(scss|sass)$/,
        exclude: resolve(src, 'main'),
        loader: ExtractPlugin.extract({
          use: [
            'css-loader?modules,localIdentName="[local]-[hash:base64:5]"',
            'postcss-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        exclude: /(images|media|img)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'assets/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEVTOOLS__: false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new Webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: true,
      compress: {
        unsafe_comps: true,
        properties: true,
        keep_fargs: false,
        pure_getters: true,
        collapse_vars: true,
        unsafe: true,
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: false,
        pure_funcs: [
          'classCallCheck',
          '_classCallCheck',
          '_possibleConstructorReturn',
          'Object.freeze',
          'invariant',
          'warning'
        ]
      }
    }),
    new HtmlPlugin({
      filename: 'index.html',
      template: resolve(src, 'index.html'),
      inject: true,
      compile: true,
      minify: {
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true
      }
    }),
    new ExtractPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module, count) {
        return module.context && module.context.indexOf('node_modules') >= 0
      }
    }),
    new Manifest({
      fileName: 'chunk-manifest.json'
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: resolve(src, 'manifest.json'),
    //     to: resolve(dist, 'manifest.json')
    //   },
    //   {
    //     from: resolve(src, 'assets/favicon.ico'),
    //     to: resolve(dist, 'favicon.ico')
    //   },
    //   {
    //     from: resolve(src, 'assets/icons'),
    //     to: resolve(dist, 'assets/icons')
    //   }
    // ]),
    new Webpack.NoEmitOnErrorsPlugin()
  ],
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m'
    }
  },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
    hints: 'warning'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
