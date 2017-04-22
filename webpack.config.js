const webpack = require('webpack');
const ewt = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {

     //selected src file/s for bundling
     entry: [__dirname + '/client/index.js'],

     //bundled file/s conact and transformed into
     output: {
          path: __dirname + '/client/dist',
          filename: 'bundle.js',
          sourceMapFilename: 'site.map'
     },

     devtool: '#source-map',

     module: {
          //loaders code needs to be passed through
          rules: [
            {
               test: /\.js?$/,
               exclude: /node_modules/,
               use: [{
                 loader: 'babel-loader',
                 options: { presets: ["react", "es2015"] }
               }]
          },
          {
              test: /\.(sass|scss)$/,
              use: ['style-loader', 
                    {
                      loader: 'css-loader',
                      options: { modules: true }
                    }, 
                    'sass-loader']
          } 
        ]
     },
    resolve: {
       modules: [path.resolve(__dirname, './src'), 'node_modules']
    },     
     //webpack change on watch command
     watch: true

};

/**
 *      //Extract CSS to seperate file
     plugins: [
       new ExtractTextPlugin(__dirname + 'client/dist/styles.css')
     ],
 */
