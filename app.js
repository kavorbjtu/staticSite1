const Koa = require('koa');  // 引入koa框架
const opn = require('opn');  //同时能打开 windows打开浏览器
const app = new Koa();
const fs = require('fs');
const path = require('path');
const KoaStatic = require('koa-static');
// ctx 为Koa 提供的 Context 对象，表示一次对话的上下文(包括 HTTP 请求和 HTTP 回复)，通过操作ctx，就可以控制返回给用户的内容。
app.use(KoaStatic('./static'));
app.listen(3000);
// 自动打开浏览器访问网站
opn('http://localhost:3000/' );
console.log('恭喜你，服务器启动成功：复制 http://localhost:3000/ 到浏览器即可访问');