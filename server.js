const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// 设置静态文件目录
app.use(express.static('.superdesign/design_iterations'));
app.use(express.static('.'));

// 主路由 - 默认打开 resume_1.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.superdesign/design_iterations/resume_1.html'));
});

// 启动服务器
app.listen(PORT, '127.0.0.1', () => {
    console.log(`服务器运行在 http://127.0.0.1:${PORT}/`);
    console.log('按 Ctrl+C 停止服务器');
});