module.exports = [{
  context: __dirname + '/app',
  entry: {
    bundle: './app.js',
    bundleCss: './assets/styles/scss/app.scss'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/app',
    //filename: 'bundle.js',
    // filename: 'style-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          },
        ]
      }
    ],
  
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    
  }
}];