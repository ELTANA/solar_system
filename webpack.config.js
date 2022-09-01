const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i, // Images
        type: 'asset/resource',
      },
      {
        test: /\.(?:webm|mp4|avi)$/i, // Videos
        type: 'asset/inline',
      },
      {
        test: /\.(.woff(2)?|ttf|otf)$/i, // Fonts
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new CleanWebpackPlugin(), // Clean builds thats are not used,
  ],
  devServer: {
    // Starts a Dev-Server on Port 3000 and hot reload whenever theere is a change in a any file.
    static: path.join(__dirname, './src'),
    port: 3000, // Port in use
    hot: 'only', // Auto-Reload when there is a change in any file.
    compress: true,
    open: true, // Auto-Opens the Browser on localhost:3000
  },
}
