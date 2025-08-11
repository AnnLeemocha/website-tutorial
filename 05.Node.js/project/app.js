const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 中介軟體
// 解析 JSON
app.use(express.json());
// 提供 public 資料夾中的靜態資源
app.use(express.static(path.join(__dirname, 'public')));

// 靜態 HTML 頁面路由
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/lyrics', (req, res) => res.sendFile(path.join(__dirname, 'views', 'lyrics.html')));
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'views', 'add.html')));
app.get('/manage', (req, res) => res.sendFile(path.join(__dirname, 'views', 'manage.html')));
app.get('/edit', (req, res) => res.sendFile(path.join(__dirname, 'views', 'edit.html')));

// 載入歌曲 API 路由
const songsRoutes = require('./routes/index');
app.use('/api/songs', songsRoutes);

// 404
app.use((req, res) => {
    res.status(404).send('找不到頁面');
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
