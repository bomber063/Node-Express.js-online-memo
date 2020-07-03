# Node-Express.js-online-memo
## 初始化
* 因为是node.js项目，所以可以按照下面命令初始化
```sh
npm init -y
```
### 发现一个小问题
* 就是初始化npm init的时候，**名字不能出现空格，不然会报下面的错误**
```
$ npm init -y
npm ERR! Invalid name: "Node-Express-online memo"

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\bomber\AppData\Roaming\npm-cache\_logs\2020-07-03T11_10_28_117Z-debug.log
```
* 把`online memo`中间的空格换成连接符`-`就没问题了，比如
```js
$ npm init -y
Wrote to D:\jirengu\github收集\Node-Express-online-memo\package.json:
{
  "name": "Node-Express-online-memo",
  "version": "1.0.0",
  "description": "* 因为是node.js项目，所以可以按照下面命令初始化 ```sh npm init -y ``` ### 发现一个小问题 * 就是初始化npm init的时候，名字不能出现空格，不然会报下面的错误 ``` $ npm init -y npm ERR! Invalid name: \"Node-Express-online memo\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bomber063/Node-Express.js-online-memo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/bomber063/Node-Express.js-online-memo/issues"
  },
  "homepage": "https://github.com/bomber063/Node-Express.js-online-memo#readme"
}
```
* 然后再对应的目录下面就生成了一个package.json文件。
* 安装这个的原因是因为后面会安装很多模块，需要把一些模块的配置写入到这个package.json里面，我们还需要使用一些`npm script`的一些命令加入到package.json的`scripts`里面。
## 安装及使用node.js的express.js框架
* 安装
```sh
npm install express --save
```
* 我安装完后显示的版本是
```sh
+ express@4.17.1
```
* 老师的版本是4.14.1
* 安装官网[安装后](https://expressjs.com/en/starter/installing.html)
* 然后创建一个[hello world后台](https://expressjs.com/en/starter/hello-world.html)，创建一个app.js，代码为
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))//这里的req就是请求，res就是响应，res.send就是响应的信息发送给前端的请求

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```
* 然后运行
```
$ node app.js
Example app listening at http://localhost:3000

```
* 就可以在地址` http://localhost:3000`看到Hello World!啦
* 这里的req就是请求，res就是响应，[res.send(body)](http://expressjs.com/en/5x/api.html#res.send)就是响应的信息发送给前端的请求,也就是发送HTTP响应。所述body参数可以是一个Buffer对象，一个String，对象，或一个Array。例如：
* [app.get](http://expressjs.com/en/5x/api.html#app.get.method)就是使用指定的回调函数将HTTP GET请求路由到指定的路径。
### 使用express-generator创建符合标准格式的网站的一个大致的框架
* [Express应用程序生成器express-generator](https://expressjs.com/en/starter/generator.html)
* express有能力去创建网站，但是网站里面有各种各样的东西，一个个的去找比较麻烦，**所以删除之前的app.js测试文件**
* 使用express-generator**符合标准格式的网站的一个大致的框架**
## 其他
### 小技巧安装nrm切换源
* [npr文档](https://www.npmjs.com/package/nrm)
```sh
npm i nrm
```
* 因为我不是全局安装的，所以使用了[npx](https://www.npmjs.com/package/npx)这个命令
* 查看可选源列表，`*`符号代表当前正在使用的源
```sh
$ npx nrm ls
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

```
* 测试速度（测试源的相应时间）
```sh
$ npx nrm test
  npm ---- 1571ms
  yarn --- 4391ms
  cnpm --- 518ms
  taobao - 190ms
  nj ----- Fetch Error
  npmMirror  1825ms
  edunpm - Fetch Error
```
* 将npm切换指定的源,比如切换为cnpm
```
$ npx nrm use cnpm

   Registry has been set to: http://r.cnpmjs.org/
```
* 切换为taobao
```
$ npx nrm use taobao

   Registry has been set to: https://registry.npm.taobao.org/
```
* 切换源后你可以去`C:\Users\bomber`，里面查看`.npmrc`文件可以看到源已经修改了。
* 通过help命令查看更多用法
```sh
$ npx nrm --help
Usage: cli [options] [command]

Options:
  -V, --version                           output the version number
  -h, --help                              output usage information

Commands:
  ls                                      List all the registries
  current                                 Show current registry name
  use <registry>                          Change registry to registry
  add <registry> <url> [home]             Add one custom registry
  set-auth [options] <registry> [value]   Set authorize information for a custom registrywith a base64 encoded string or username and pasword
  set-email <registry> <value>            Set email for a custom registry
  set-hosted-repo <registry> <value>      Set hosted npm repository for a custom registryto publish packages
  del <registry>                          Delete one custom registry
  home <registry> [browser]               Open the homepage of registry with optional browser
  publish [options] [<tarball>|<folder>]  Publish package to current registry if current registry is a custom registry.
   if you're not using custom registry, this command will run npm publish directly
  test [registry]                         Show response time for specific or all registries
  help                                    Print this help

```
* 更多用法看[npr文档](https://www.npmjs.com/package/nrm)
* 以前我做过一个笔记，就是需要发布npm包的时候需要用到真实的npm地址，就需要切换到npm源，前面的[笔记](https://github.com/bomber063/DIY-UI-frame-by-Vue)


### git hub命令创建分支使用
* 创建一个分支teach，同时切换到这个teach分支上，更多解释看[这里explainshell](https://explainshell.com/explain?cmd=git+checkout+-b+teach)
```sh
git checkout -b teach
```
* 它是下面两个命令的缩写
* 创建分支teach
```sh
git branch teach
```
* 切换分支到teach
```sh
git checkout teach
```