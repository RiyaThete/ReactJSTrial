/**
 * Created by riya on 19/2/17.
 */
var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");     //copy everything required to serve in dist folder
var SRC_DIR = path.resolve(__dirname, "src");       //copy from

var config = {      //webpack config
    entry:SRC_DIR+"/app/index.js",
    output:{
        path:DIST_DIR+"/app",
        filename:"bundle.js",
        publicPath:"/app/"
    },
    module:{       //transformations
        loaders:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader:"babel-loader",
                query:{
                    presets:[
                        "react","es2015","stage-2"
                    ]
                }
            }
        ]
    }
};

module.exports = config;