## 注意事项
根据文档： https://www.webpackjs.com/guides/
坑1：导入less、sass依赖时，由于先下载使用的css模块并下载style-loader和css-loader,然后再使用less和sass时，会报错style-loader找不到
解决方案： 卸载style-loader并重新安装即可
坑2： 根据文档引入CleanWebpackPlugin依赖时，有依赖版本更新，需要const { CleanWebpackPlugin } = require('clean-webpack-plugin');并且CleanWebpackPlugin接受得失一个对象参数而不是数组；
坑3： 使用观察模式时，命令行增加--watch,修改文件后会自动刷新，但是生成的dist文件内部的index.html文件会消失，待解决；