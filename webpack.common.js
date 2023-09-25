const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

module.exports = (env) => {
    return {
        mode: env,
        entry: {
            'background': path.resolve(__dirname, 'src') + '/background.js',
            'popup': path.resolve(__dirname, 'src') + '/popup.js'
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "[name].js"
        },
        plugins: [
            new DotenvPlugin(
                {
                    path: __dirname + '/.env.' + env,
                    safe: true
                }
            ),
            new CopyPlugin({
                patterns: [
                    {
                        from: 'src/icon.png',
                    },
                    {
                        from: 'src/main.css',
                    },
                    {
                        from: 'src/manifest.json',
                    },
                    {
                        from: 'src/popup.html',
                    },
                ]
            })
        ]
    }
}
