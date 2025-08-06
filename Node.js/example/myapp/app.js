const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 讀取 songs.json
console.log(path.join(__dirname, 'songs/songs.json'));

const songs = JSON.parse(fs.readFileSync(path.join(__dirname, 'json/songs.json'), 'utf8'));

// 提供 public 資料夾中的靜態資源
app.use(express.static(path.join(__dirname, 'public')));

// // 通用的方式一次處理：
// app.use(express.static(path.join(__dirname, 'views')));

// 路由設定
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/lyrics', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'lyrics.html'));
});

// API：取得所有歌曲
app.get('/api/songs', (req, res) => {
  const songList = songs.map(song => ({
    id: song.id,
    title: song.title,
    artist: song.artist,
    image: song.image,
    path: song.path
  }));
  res.json(songList);
});

// API：取得單一歌曲資訊
app.get('/api/songs/:id', (req, res) => {
  const songId = parseInt(req.params.id);
  const song = songs.find(s => s.id === songId);

  if (!song) {
    return res.status(404).json({ error: '找不到歌曲' });
  }

  res.json(song);
});

// 404 頁面
app.use((req, res) => {
  res.status(404).send('找不到頁面');
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
