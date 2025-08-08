const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// 檔案儲存設定
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// 資料檔案位置
const dataFile = path.join(__dirname, '../json/songs.json');

// 輔助函式：讀取歌曲資料
function readSongs() {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data);
}

// API：取得所有歌曲
router.get('/', (req, res) => {
    const songs = readSongs();
    const songList = songs.map(({ id, title, artist, image, path }) => ({ id, title, artist, image, path }));
    res.json(songList);
});

// API：取得單一歌曲
router.get('/:id', (req, res) => {
    const songs = readSongs();
    const song = songs.find(s => s.id === req.params.id);
    if (!song) return res.status(404).json({ error: '找不到歌曲' });
    res.json(song);
});

// API：新增歌曲
router.post('/', upload.single('image'), (req, res) => {
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
        image: '/uploads/' + file.filename,
        lyrics: cleanedLyrics
    };

    const songs = readSongs();
    songs.push(newSong);

    fs.writeFileSync(dataFile, JSON.stringify(songs, null, 2));
    res.status(200).send('新增成功');
});

// API：編輯歌曲
router.put('/:id', (req, res) => {
    const { title, artist, lyrics } = req.body;

    if (!title || !artist || !lyrics) {
        return res.status(400).send('請填寫所有欄位');
    }

    const songs = readSongs();
    const index = songs.findIndex(song => song.id === req.params.id);

    if (index === -1) return res.status(404).send('找不到歌曲');

    songs[index].title = title;
    songs[index].artist = artist;
    songs[index].lyrics = lyrics.replace(/\r\n/g, '\n');

    fs.writeFileSync(dataFile, JSON.stringify(songs, null, 2));
    res.status(200).send('更新成功');
});

// API：刪除歌曲
router.delete('/:id', (req, res) => {
    let songs = readSongs();
    const originalLength = songs.length;

    songs = songs.filter(song => song.id !== req.params.id);

    if (songs.length === originalLength) return res.status(404).send('找不到歌曲');

    fs.writeFileSync(dataFile, JSON.stringify(songs, null, 2));
    res.status(200).send('刪除成功');
});

module.exports = router;
