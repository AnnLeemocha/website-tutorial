const data = [];

data.push({
    id: '1',
    title: 'Golden',
    artist: 'HUNTR/X, EJAE, AUDREY NUNA, REI AMI, KPop Demon Hunters Cast',
    image: '../img/uploads/KPOP DEMON HUNTERS.jpg'
});

data.push({
    id: '2',
    title: 'How It’s Done',
    artist: 'HUNTR/X, EJAE, AUDREY NUNA, REI AMI, KPop Demon Hunters Cast',
    image: '../img/uploads/KPOP DEMON HUNTERS.jpg'
});

data.push({
    title: '無 ID',
    artist: '測試',
    image: '假的圖片路徑'
});

const tbody = document.querySelector('#songTable tbody');

// 新增歌曲到清單中
function addItem({ id, title, artist, image }) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td><img class="cover" src="${image}" alt="${title} 封面" /></td>
        <td>${title}</td>
        <td>${artist}</td>
        <td>
            <div class="actions">
                <button class="edit-button" onclick="editSong('${id}')">編輯</button>
                <button class="delete-button" onclick="deleteSong('${id}')">刪除</button>
            </div>
        </td>
    `;

    return tr;
}

// 讀取歌單
try {
    for (let i = 0; i < data.length; i++) {
        const song = data[i];

        if (!song.id || typeof song.id !== 'string' || song.id.trim() === '') {
            continue;
        }

        const tr = addItem(song);
        tbody.appendChild(tr);
    }
} catch (error) {
    console.error('讀取歌單失敗:',error);
}

// 轉跳到編輯頁面
function editSong(id) {
    window.location.href = `./edit.html?id=${id}`;
}

// 刪除
function deleteSong(id) {
    if (!confirm(`你確定要刪除這首歌嗎？ (id=${id})`)) return;

    alert('刪除成功 (假)');
}