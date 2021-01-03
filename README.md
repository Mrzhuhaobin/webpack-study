# webpack-study
根据文档： https://www.webpackjs.com/guides/
## 注意事项
### 一些坑
1. 导入less、sass依赖时，由于先下载使用的css模块并下载style-loader和css-loader,然后再使用less和sass时，会报错style-loader找不到
解决方案： 卸载style-loader并重新安装即可
2. 根据文档引入CleanWebpackPlugin依赖时，有依赖版本更新，需要`const { CleanWebpackPlugin } = require('clean-webpack-plugin');`并且CleanWebpackPlugin接受得是一个对象参数而不是数组；
3. 使用观察模式时，命令行增加--watch,修改文件后会自动刷新，但是生成的dist文件内部的index.html文件会消失，待解决；
4. 使用webpack-dev-server，下载依赖后修改配置文件执行命令后报错：`Error: Cannot find module 'webpack-cli/bin/config-yargs'`；
查阅资料是webpack3.x的版本与webpack-dev-server3.x 的版本不兼容,解决方案是卸载webpack-dev-server、webpack、webpack-cli后安装指定版本：
`yarn add webpack@4.32.2 webpack-cli@3.3.2 webpack-dev-server@3.5.1 -D`

## 一些插件
1. UglifyJSPlugin: 删除未引用代码(dead code)；
2. CleanWebpackPlugin： 运行后删除dist文件旧的内容；
3. HtmlWebpackPlugin: 构建生成新的dist文件；
4. webpack-dev-server：将代码部署到本地服务器；