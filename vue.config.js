const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
};
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/production-sub-path/' : '/',
    devServer: {
        open: true,
        host: 'localhost',
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://pili.qiniuapi.com/',
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以
                }
            }
        },

    },
    // css: {
    //     // 当为true时，css文件名可省略 module 默认为 false
    //     modules: true,
    //     // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    //     // 默认生产环境下是 true，开发环境下是 false
    //     extract: false,
    //     // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    //     sourceMap: false,
    //     //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    //     loaderOptions: {
    //         css: {},
    //         stylus: {}
    //     }
    // },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
    }
}