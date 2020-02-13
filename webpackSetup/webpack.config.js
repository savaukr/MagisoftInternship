
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/app/index.js",
    output: {
       path: __dirname + "/dist",
       filename: 'bundle.js',
       publicPath: './' 
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
            filename: "./index.html"
        })
    ],
    devServer: {
      contentBase: './dist',
      port: 7700,
  } 
}