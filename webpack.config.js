// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel',
//       query: {
//         presets: ['react', 'es2015']
//       }
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };


const path = require('path');
 module.exports = {
   entry: './index.js',
   output: {
     path: path.resolve('dist'),
     filename: 'bundle.js'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
       { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
     ]
   }
 }