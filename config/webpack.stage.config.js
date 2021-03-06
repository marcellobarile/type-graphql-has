const root = require('app-root-path').path;

module.exports = {
  mode: 'production',
  entry: `${root}/bin/www.ts`,
  target: 'node',
  externals: [
    /^[a-z\-0-9]+$/ // Ignore node_modules folder
  ],
  output: {
    filename: 'compiled', // output file
    path: `${root}/build`,
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    modules: [
      `${root}/node_modules`,
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};
