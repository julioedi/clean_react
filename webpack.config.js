const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Entry point for the application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder before each build
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'], // Resolve file extensions for TypeScript and SCSS
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Look for .ts or .tsx files
        use: 'ts-loader', // Use ts-loader to handle TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Look for .scss files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Resolve @import and url() in CSS files
          'sass-loader', // Compile SASS/SCSS to CSS
        ],
      },
    ],
  },
  devtool: 'source-map', // Generate source maps for better debugging
  devServer: {
    static: './dist', // Serve files from the 'dist' directory
    hot: true, // Enable hot module replacement (HMR) for live updates
    open: true, // Automatically open the browser on server start
    port: 3000, // Use port 3000 for the development server
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean up the dist folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the index.html file as a template
      filename: 'index.html', // Output the file to dist/index.html
    }),
  ],
};
