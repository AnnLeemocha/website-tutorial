const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('id');

const song = {
    id: songId,
    title: '測試歌曲',
    artist: '測試歌手',
    image: '假的圖片路徑',
    lyrics: '我是歌詞\n這是一首測試歌曲'
}

console.log(song);

document.querySelector('input[name="title"]').value = song.title;
document.querySelector('input[name="artist"]').value = song["artist"];
// document.querySelector('input[name="image"]').value = song.image;
document.querySelector('textarea[name="lyrics"]').value = song.lyrics;


// for (const key in song) {

//     switch (key) {
//         case 'id':
//         case 'image':
//             continue;
//             break;

//         case 'lyrics':
//             const elTextArea = document.querySelector(`textarea[name="${key}"]`);
//             if (elTextArea) {
//                 elTextArea.value = song[key];
//             }
            
//             break;
    
//         default:
//             const elInput = document.querySelector(`input[name="${key}"]`);
//             if (elInput) {
//                 elInput.value = song[key];
//             }
//             break;
//     }

// }
