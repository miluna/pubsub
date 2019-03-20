const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                exclude: /.*\.test\.(js|ts)$/
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./build")
    }
};
