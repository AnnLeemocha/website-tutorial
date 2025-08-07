const fs = require('fs');
const express = require('express');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid'); // 產生唯一 ID
const app = express();
const PORT = 3000;

// 設定 multer 存放位置與檔名
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/uploads'));
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// 解析 JSON 與 urlencoded
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// 歌詞資料位置
const dataFile = path.join(__dirname, 'json', 'songs.json');

// 讀取歌詞資料
const songs = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

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

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'add.html'));
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'manage.html'));
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
//   const songId = parseInt(req.params.id);
  const songId = req.params.id;
  const song = songs.find(s => s.id === songId);

  if (!song) {
    return res.status(404).json({ error: '找不到歌曲' });
  }

  res.json(song);
});

// 送出新增歌詞頁面（不變）
app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add.html'));
});

// 新增歌詞（改為 multer 中介軟體接收圖片）
app.post('/api/songs', upload.single('image'), (req, res) => {
  console.log('req.body:', req.body); // 應該包含 title, artist, lyrics
  console.log('req.file:', req.file); // 應該是圖片檔案

  const { title, artist, lyrics } = req.body;
  const file = req.file;

  if (!title || !artist || !lyrics || !file) {
    return res.status(400).send('請填寫所有欄位並上傳圖片');
  }

  const cleanedLyrics = lyrics.replace(/\r\n/g, '\n');

  const newSong = {
    id: uuidv4(),
    title,
    artist,
    image: '/uploads/' + file.filename, // 記錄圖片路徑
    lyrics: cleanedLyrics 
  };

  fs.readFile(dataFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).send('讀取資料失敗');

    const songs = JSON.parse(data);
    songs.push(newSong);

    fs.writeFile(dataFile, JSON.stringify(songs, null, 2), (err) => {
      if (err) return res.status(500).send('儲存失敗');

      res.status(200).send('新增成功');
    });
  });
});

// 編輯歌詞
app.put('/api/songs/:id', (req, res) => {
  const songId = req.params.id;
  const { title, artist, lyrics } = req.body;

  if (!title || !artist || !lyrics) {
    return res.status(400).send('請填寫所有欄位');
  }

  const dataFile = path.join(__dirname, 'data', 'songs.json');

  fs.readFile(dataFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).send('讀取資料失敗');

    let songs = JSON.parse(data);
    const index = songs.findIndex(song => song.id === songId);

    if (index === -1) {
      return res.status(404).send('找不到歌曲');
    }

    // 更新欄位（不動 image）
    songs[index].title = title;
    songs[index].artist = artist;
    songs[index].lyrics = lyrics.replace(/\r\n/g, '\n');

    fs.writeFile(dataFile, JSON.stringify(songs, null, 2), (err) => {
      if (err) return res.status(500).send('儲存失敗');
      res.status(200).send('更新成功');
    });
  });
});

// 刪除歌曲
app.delete('/api/songs/:id', (req, res) => {
  const songId = req.params.id;
  const dataFile = path.join(__dirname, 'data', 'songs.json');

  fs.readFile(dataFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).send('讀取資料失敗');

    let songs = JSON.parse(data);
    const originalLength = songs.length;
    songs = songs.filter(song => song.id !== songId);

    if (songs.length === originalLength) {
      return res.status(404).send('找不到歌曲');
    }

    fs.writeFile(dataFile, JSON.stringify(songs, null, 2), (err) => {
      if (err) return res.status(500).send('刪除失敗');
      res.status(200).send('刪除成功');
    });
  });
});

// 404 頁面
app.use((req, res) => {
  res.status(404).send('找不到頁面');
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
